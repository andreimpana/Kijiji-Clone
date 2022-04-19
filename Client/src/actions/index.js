import history from "../history";
import Listings from "../api/Listings";
import { FETCH_LISTINGS, SIGN_IN, SIGN_OUT } from "./types"

export const fetchListings = () => async (dispatch) => {
    const response = await Listings.get('/Listings');
    dispatch({ type: FETCH_LISTINGS, payload: response.data });
}

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};