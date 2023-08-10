import history from "../history";
import Listings from "../api/Listings";
import { FETCH_LISTINGS, SIGN_IN, SIGN_OUT, CREATE_LISTING, FETCH_LISTING, DELETE_LISTING } from "./types"

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

export const fetchListings = () => async (dispatch) => {
    const response = await Listings.get('/Listings');
    dispatch({ type: FETCH_LISTINGS, payload: response.data });
}

export const createListing = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await Listings.post('/Listings', { ...formValues, userId });
    dispatch({ type: CREATE_LISTING, payload: response.data });
    history.push('/');
};

export const fetchListing = (id) => async (dispatch) => {
    const response = await Listings.get(`/Listings/${id}`);
    dispatch({ type: FETCH_LISTING, payload: response.data });
};

export const deleteListing = (id) => async (dispatch) => {
    await Listings.delete(`/Listings/${id}`);
    dispatch({ type: DELETE_LISTING, payload: id });
    history.push('/');
}

// Playing around with this
// https://www.npmjs.com/package/json-server
export const fetchListingKeyword = (keyword) => async (dispatch) => {
    const response = await Listings.get(`/Listings?title=${'test'}`);
    dispatch({ type: FETCH_LISTING, payload: response.data });
}