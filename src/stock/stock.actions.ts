import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface GetStockDataRequest {
    type: typeof GET_STOCK_DATA,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const GET_STOCK_DATA = 'GET_STOCK_DATA';
export const GET_STOCK_DATA_SUCCESS = 'GET_STOCK_DATA_SUCCESS';
export const GET_STOCK_DATA_ERROR = 'GET_STOCK_DATA_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface StockResponseAction extends ResponseAction {
    type:
       typeof GET_STOCK_DATA_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface StockResponseErrorAction extends ResponseErrorAction {
   type:
        typeof GET_STOCK_DATA_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const stockActions = {
	getStockData: (id: string) => ({type: GET_STOCK_DATA, id}),
	getStockDataSuccess: (response: any): StockResponseAction => ({type: GET_STOCK_DATA_SUCCESS, response}),
	getStockDataError: (error: any): StockResponseErrorAction => ({type: GET_STOCK_DATA_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type StockActionTypes = (
      StockResponseAction 
    | StockResponseErrorAction
    | GetStockDataRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface StockState {
    
}

export default stockActions;