import { City } from './cities/models/city';

export interface AppState {
    readonly city: City[];
}
