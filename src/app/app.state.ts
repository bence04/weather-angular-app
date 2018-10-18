import { City } from './cities/models/city';
import * as city from './reducers/city.reducer';

export interface AppState {
    readonly city: City[];
}

export const reducers = {
    city: city.reducer
};
