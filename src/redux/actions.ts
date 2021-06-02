import commonActions from "../common/common.actions";
import { LocationChange } from "../common/types";

// [GLOBAL ACTIONS] IMPORT MODULE ACTIONS
import stockActions, { StockActionTypes } from "../stock/stock.actions";
import baseActions, { BaseActionTypes } from "../base/base.actions";
// [GLOBAL ACTIONS] IMPORT MODULE ACTION TYPES

export default {
  common: commonActions,
  stock: stockActions,
  base: baseActions,
  // [GLOBAL ACTIONS] EXPORT ACTIONS
};

export type ActionTypes = LocationChange | StockActionTypes | BaseActionTypes;
// [GLOBAL ACTIONS] EXPORT ACTION TYPE
