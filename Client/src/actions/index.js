import history from "../history";
import Listings from "../api/Listings";
import { FETCH_LISTINGS } from "./types"

export const fetchListings = () => async (dispatch) => {
    const response = await Listings.get('/Listings');
    dispatch({ type: FETCH_LISTINGS, payload: response.data });
}
