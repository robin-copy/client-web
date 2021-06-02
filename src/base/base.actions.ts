import { ResponseAction, ResponseErrorAction } from "../common/types";

interface GetSharesListRequest {
  type: typeof GET_SHARES_LIST;
}

// [MODULE_ACTIONS] NEW INTERFACE

export const GET_SHARES_LIST = "GET_SHARES_LIST";
export const GET_SHARES_LIST_SUCCESS = "GET_SHARES_LIST_SUCCESS";
export const GET_SHARES_LIST_ERROR = "GET_SHARES_LIST_ERROR";

export const CHANGE_SEARCH_INPUT = "SEARCH_INPUT_TEXT";

// [MODULE_ACTIONS] EXPORT ACTION

export interface BaseResponseAction extends ResponseAction {
  type: typeof GET_SHARES_LIST_SUCCESS;
  response: any[];
  // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface BaseResponseErrorAction extends ResponseErrorAction {
  type: typeof GET_SHARES_LIST_ERROR;
  // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const baseActions = {
  getSharesList: () => ({ type: GET_SHARES_LIST }),
  getSharesListSuccess: (response: any): BaseResponseAction => ({
    type: GET_SHARES_LIST_SUCCESS,
    response,
  }),
  getSharesListError: (error: any): BaseResponseErrorAction => ({
    type: GET_SHARES_LIST_ERROR,
    error,
  }),
  changeSearchInput: (text: string): ChangeSearchInput => ({
    type: CHANGE_SEARCH_INPUT,
    text,
  }),
  // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type BaseActionTypes =
  | BaseResponseAction
  | BaseResponseErrorAction
  | GetSharesListRequest
  | ChangeSearchInput;

// [MODULE_ACTIONS] EXPORT ACTION TYPE

// [MODULE_ACTIONS] EXPORT TYPES DECLARATION

export interface BaseState {
  searchInputText: string;
  sharesList: any[];
}

export type ChangeSearchInput = {
  type: typeof CHANGE_SEARCH_INPUT;
  text: string;
};

export default baseActions;
