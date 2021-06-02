import {
  RequestStatus,
  ResponseAction,
  ResponseErrorAction,
} from "../common/types";

// [MODULE_ACTIONS] NEW INTERFACE

export const CHANGE_SEARCH_INPUT = "SEARCH_INPUT_TEXT";
// [MODULE_ACTIONS] EXPORT ACTION

// [MODULE_ACTIONS] MODULE RESPONSE ACTIONS

// [MODULE_ACTIONS] MODULE ERROR ACTIONS

const baseActions = {
  changeSearchInput: (text: string): ChangeSearchInput => ({
    type: CHANGE_SEARCH_INPUT,
    text,
  }),
  // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

// [MODULE_ACTIONS] EXPORT TYPES DECLARATION

export interface BaseState {
  searchInputText: string;
}

export type ChangeSearchInput = {
  type: typeof CHANGE_SEARCH_INPUT;
  text: string;
};

export type BaseActionType = ChangeSearchInput;

export default baseActions;
