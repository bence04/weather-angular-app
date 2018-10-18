import { Action } from '@ngrx/store';


export enum WeatherActionTypes {
  GET_WEATHER = '[City] Create city'
}

export class Weather implements Action {
    readonly type = WeatherActionTypes.GET_WEATHER;
    constructor(public payload: any) {}
}

export type All = | Weather;
