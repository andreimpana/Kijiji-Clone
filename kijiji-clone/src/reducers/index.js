import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import ListingsReducer from './ListingsReducer';

export default combineReducers({
    form: formReducer,
    listings: ListingsReducer
});