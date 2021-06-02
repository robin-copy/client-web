import baseActions, { CHANGE_SEARCH_INPUT } from "./base.actions"; // [MODULE REDUCER] IMPORT ACTIONS
import { ActionTypes } from "../redux/actions";
import { BaseState } from "./base.actions";
import { REQUEST_STATUS } from "../utils/consts";

const initialState: BaseState = {
  searchInputText: "",
  // [MODULE REDUCER] INITIAL STATE
};

const baseReducer = (state = initialState, action: ActionTypes): BaseState => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInputText: action.text };
    // [MODULE REDUCER] SWITCH CASE
    default:
      return state;
  }
};

export default baseReducer;
