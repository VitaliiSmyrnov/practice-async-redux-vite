import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://63bd6f4718bc301c02677f9c.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());

    const { data } = await axios.get("/contacts");
    console.log("data", data);

    dispatch(fetchingSuccess(data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
