import { Actions, CREATE_CITY_SUCCESSFUL, DELETE_CITY_SUCCESSFUL } from '../actions/city.actions';
import { City } from '../cities/models/city';

const initialState: City[] = [];

export function reducer(
    state: City[] = initialState,
    action: Actions) {

    switch (action.type) {
        case CREATE_CITY_SUCCESSFUL:
            return [...state, action.payload];

        case DELETE_CITY_SUCCESSFUL:
            return state.filter(({ name }) => name !== action.name);

        default:
            return state;
    }
}
