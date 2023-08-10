import _ from 'lodash';
import {
    FETCH_LISTINGS,
    FETCH_LISTING,
    CREATE_LISTING,
    DELETE_LISTING
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LISTINGS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_LISTING:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_LISTING:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}