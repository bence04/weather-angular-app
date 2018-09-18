import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../db.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  @Input() cities: any[];
  @Input() actualCity: any[];
  @Output() citiesChange = new EventEmitter();
  @Output() actualCityChange = new EventEmitter();
  currentWeather: any[] = [];
  objectKeys: any[] = [];
  dictionary = {};

  constructor(private dbService: DbService, private apiService: ApiService) { }

  ngOnChanges() {
    this.currentWeather = [];
    this.dictionary = {};
    const requests = this.cities.map((item) => {
        return new Promise((resolve) => {
          this.asyncFunction(item, resolve);
        });
    });

    Promise.all(requests).then(() => {
      this.objectKeys = Object.keys(this.dictionary);
      Object.entries(this.dictionary).forEach(([key]) => {
        this.apiService.getCurrentWeather(key).subscribe(data => {
          this.dictionary[key] = data;
          console.log(this.dictionary);
        });
      });

    });

  }

  asyncFunction(item, resolve) {
    this.dictionary[item.cityName] = [];
    resolve();
  }

  removeCity(cityName) {
    this.dbService.removeCityByUserID(this.dbService.getUserID(), cityName);
    this.citiesChange.emit(this.dbService.getCitiesByUserID(this.dbService.getUserID()));
  }

  setActual(cityName) {
    const newActual = {
      userID: this.dbService.getUserID(),
      cityName: cityName
    };
    this.actualCityChange.emit(newActual);
  }
}
