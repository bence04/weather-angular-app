import { Actions, SET_ACTUAL_CITY } from '../actions/actual.actions';

const initialState: string = null;

export function reducer(
    state = initialState,
    action: Actions) {

    switch (action.type) {
        case SET_ACTUAL_CITY:
            return action.name;

        default:
            return state;
    }
}
