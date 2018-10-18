import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { City } from '../cities/models/city';

export const CREATE_CITY_SUCCESSFUL = '[City] Successful city create';
export const DELETE_CITY_SUCCESSFUL = '[City] Successful city delete';
export const FAIL_CITY = '[City] Fail city create';

export class CreateCity implements Action {
    readonly type = CREATE_CITY_SUCCESSFUL;

    constructor(public payload: City) { }
}

export class DeleteCity implements Action {
    readonly type = DELETE_CITY_SUCCESSFUL;

    constructor(public name: string) { }
}

export class FailCity implements Action {
    readonly type = FAIL_CITY;

    constructor(public error: string) { }
}

export type Actions = CreateCity | DeleteCity | FailCity;
