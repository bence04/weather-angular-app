import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Weather, WeatherActionTypes } from '../actions/weather.actions';
import { AppState } from '../app.state';
import { CreateCity, FailCity } from '../actions/city.actions';


@Injectable()
export class WeatherEffects {

  constructor(private store: Store<AppState>, private actions: Actions, private router: Router, private apiService: ApiService) {}

  @Effect()
  Weather: Observable<any> = this.actions.pipe(
    ofType(WeatherActionTypes.GET_WEATHER),
    map((action: Weather) => action.payload),
    exhaustMap(payload =>
      this.apiService.getCurrentWeather(payload.name).pipe(
        tap(result => {
            console.log('TAP RES');
            console.log(result);
        }),
        map(res => new CreateCity({name: res.name, userID: '0', weather: res})),
        catchError(error => of(new FailCity(error)))
      )
    )
  );


}
