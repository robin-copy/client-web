import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface GetSharesListRequest {
    type: typeof GET_SHARES_LIST,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const GET_SHARES_LIST = 'GET_SHARES_LIST';
export const GET_SHARES_LIST_SUCCESS = 'GET_SHARES_LIST_SUCCESS';
export const GET_SHARES_LIST_ERROR = 'GET_SHARES_LIST_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface BaseResponseAction extends ResponseAction {
    type:
       typeof GET_SHARES_LIST_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface BaseResponseErrorAction extends ResponseErrorAction {
   type:
        typeof GET_SHARES_LIST_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const baseActions = {
	getSharesList: () => ({type: GET_SHARES_LIST}),
	getSharesListSuccess: (response: any): BaseResponseAction => ({type: GET_SHARES_LIST_SUCCESS, response}),
	getSharesListError: (error: any): BaseResponseErrorAction => ({type: GET_SHARES_LIST_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type BaseActionTypes = (
      BaseResponseAction 
    | BaseResponseErrorAction
    | GetSharesListRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface BaseState {
    
}

export default baseActions;