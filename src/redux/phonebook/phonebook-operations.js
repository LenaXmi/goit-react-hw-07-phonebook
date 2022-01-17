import axios from "axios";
import {addContactRequest, addContactSuccess, addContactReject} from './phonebook-actions'
export const addContact =
  ( name, phone ) =>
    (dispatch) => {
    // const contact={name,phone}
    dispatch(addContactRequest());

    axios.post("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts",{name,phone})
      .then(( {data} ) =>
        dispatch(addContactSuccess(data))
      )
      .catch((error) =>
        dispatch(addContactReject(error))
      );
  };
