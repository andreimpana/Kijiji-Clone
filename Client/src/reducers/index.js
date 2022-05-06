import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import ListingsReducer from './ListingsReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    listings: ListingsReducer
});