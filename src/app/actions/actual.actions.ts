import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const SET_ACTUAL_CITY = '[City] Set actual city';

export class SetActualCity implements Action {
    readonly type = SET_ACTUAL_CITY;

    constructor(public name: string) { }
}

export type Actions = | SetActualCity;
