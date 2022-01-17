import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactReject,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactReject,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactReject,
} from "./phonebook-actions";

export const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactReject(error)));
};

export const addContact = (name, phone) => (dispatch) => {
  // const contact={name,phone}
  dispatch(addContactRequest());

  axios
    .post("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts", {
      name,
      phone,
    })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactReject(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`https://61e42cd7fbee6800175eb21d.mockapi.io/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactReject(error)));
};
