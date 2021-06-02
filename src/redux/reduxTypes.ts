import { StockState } from "../stock/stock.actions";
import { BaseState } from "../base/base.actions";
// [REDUX TYPES] IMPORT MODULE STATE

export interface ReduxState {
  stock: StockState;
  base: BaseState;
  // [REDUX TYPES] ADD MODULE STATE
}
