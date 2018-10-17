import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../db.service';
import { ApiService } from '../../api.service';
import { City } from '../../cities/models/city';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { DeleteCity, SetActualCity } from '../../actions/city.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  cities: Observable<City[]>;
  @Input() actualCity: any[];
  @Output() citiesChange = new EventEmitter();
  @Output() actualCityChange = new EventEmitter();
  currentWeather: any[] = [];
  objectKeys: any[] = [];
  dictionary = {};

  constructor(private store: Store<AppState>, private dbService: DbService, private apiService: ApiService) {
    this.cities = this.store.select('city');
    console.log(this.cities);
  }

  ngOnChanges() {
    /*this.currentWeather = [];
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
        });
      });

    });*/

  }

  /* asyncFunction(item, resolve) {
    this.dictionary[item.cityName] = [];
    resolve();
  } */

  removeCity(cityName) {
    this.store.dispatch(new DeleteCity(cityName));
    // this.dbService.removeCityByUserID(this.dbService.getUserID(), cityName);
    // this.citiesChange.emit(this.dbService.getCitiesByUserID(this.dbService.getUserID()));
  }

  setActual(cityName) {
    this.store.dispatch(new SetActualCity(cityName));
    // this.actualCityChange.emit(newActual);
  }
}
