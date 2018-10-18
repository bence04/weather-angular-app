import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../db.service';
import { ApiService } from '../../api.service';
import { City } from '../../cities/models/city';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { DeleteCity } from '../../actions/city.actions';
import { Observable } from 'rxjs';
import { SetActualCity } from 'src/app/actions/actual.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  cities$: Observable<City[]>;
  actualCity$: Observable<string>;
  currentWeather: any[] = [];
  objectKeys: any[] = [];
  dictionary = {};

  constructor(private store: Store<AppState>, private dbService: DbService, private apiService: ApiService) {
    this.cities$ = this.store.select('city');
    this.actualCity$ = this.store.select('actualCity');
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
    console.log(this.actualCity$);

    // this.actualCityChange.emit(newActual);
  }
}
