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

  constructor(private dbService: DbService, private apiService: ApiService) { }

  ngOnChanges() {
    this.currentWeather = [];
    this.cities.forEach(element => {
      this.apiService.getCurrentWeather(element.cityName).subscribe(data => {
        this.currentWeather.push(data);
      });
    });

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
