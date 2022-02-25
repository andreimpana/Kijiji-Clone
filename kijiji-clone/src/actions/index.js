import history from "../history";
import Listings from "../api/Listings";
import { FETCH_LISTING } from "./types"

export const fetchListings = () => async (dispatch) => {
    const response = await Listings.get('/Listings');
    dispatch({ type: FETCH_LISTING, payload: response.data });
}
