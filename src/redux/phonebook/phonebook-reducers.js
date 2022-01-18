import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactReject,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactReject,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactReject,

} from "./phonebook-actions";
import { fetchContact, addContact } from "./phonebook-operations";

const contacts = createReducer([], {
  [fetchContact.fulfilled]:(_, {payload})=>payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]:()=>false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactReject]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactReject]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});

//Vanilla redux
// const contacts = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
