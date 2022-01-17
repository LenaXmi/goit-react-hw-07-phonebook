import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contact/fetchContactRequest")
export const fetchContactSuccess = createAction("contact/fetchContactSuccess")
export const fetchContactReject = createAction("contact/fetchContactReject")

export const addContactRequest = createAction("contact/addContactRequest")
export const addContactSuccess = createAction("contact/addContactSuccess")
export const addContactReject = createAction("contact/addContactReject")

export const deleteContactRequest = createAction("contact/deleteContactRequest")
export const deleteContactSuccess = createAction("contact/deleteContactSuccess")
export const deleteContactReject=createAction("contact/deleteContactReject")


export const changeFilter = createAction("contact/changeFilter");

//Vanilla redux
// export const addContact = (id, name, number) => ({
//   type: types.ADD,
//   payload: { id, name, number },
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
