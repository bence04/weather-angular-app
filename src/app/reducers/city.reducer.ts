import { Actions, CREATE_CITY, DELETE_CITY, SET_ACTUAL_CITY } from '../actions/city.actions';
import { City } from '../cities/models/city';

const initialState: City[] = [];

export function reducer(
    state: City[] = initialState,
    action: Actions) {

    switch (action.type) {
        case CREATE_CITY:
            return [...state, action.payload];

        case DELETE_CITY:
            return state.filter(({ name }) => name !== action.name);

        case SET_ACTUAL_CITY:
            const updatedItems = state.map(item => {
                if (item.name === action.name) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });
            return updatedItems;

        default:
            return state;
    }
}
