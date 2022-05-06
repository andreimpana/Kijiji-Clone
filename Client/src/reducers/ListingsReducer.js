import _ from 'lodash';
import {
    FETCH_LISTINGS,
    FETCH_LISTING
} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_LISTINGS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}