import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContactRequest,addContactSuccess,addContactReject,deleteContact , changeFilter} from "./phonebook-actions";



const contacts = createReducer([], {
 [ addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactReject]:()=>false
})

export default combineReducers({
  contacts,
  filter,
  loading
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
