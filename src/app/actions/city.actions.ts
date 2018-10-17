import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { City } from '../cities/models/city';

export const CREATE_CITY = 'City_Create';
export const DELETE_CITY = 'City_Delete';
export const SET_ACTUAL_CITY = 'Set_Actual_City';

export class CreateCity implements Action {
    readonly type = CREATE_CITY;

    constructor(public payload: City) { }
}

export class DeleteCity implements Action {
    readonly type = DELETE_CITY;

    constructor(public name: string) { }
}

export class SetActualCity implements Action {
    readonly type = SET_ACTUAL_CITY;

    constructor(public name: string) { }
}

export type Actions = CreateCity | DeleteCity | SetActualCity;
