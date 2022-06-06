import history from "../history";
import Listings from "../api/Listings";
import { FETCH_LISTINGS, SIGN_IN, SIGN_OUT, CREATE_LISTING } from "./types"

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

export const getEmail = () => async (dispatch, getState) => {
    const { email } = getState().auth;
    return email;
}

export const createListing = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await Listings.post('/Listings', {...formValues, userId });
    dispatch({ type: CREATE_LISTING, payload: response.data });
    history.push('/');
};