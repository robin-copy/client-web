import baseActions, {
  GET_SHARES_LIST,
  // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from "./base.actions";
import { services } from "./base.services";
import { Middleware } from "redux";

const baseMiddleware: Middleware = (api) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SHARES_LIST:
      services
        .getSharesList()
        .then((response: any) =>
          api.dispatch(baseActions.getSharesListSuccess(response))
        )
        .catch((error: any) =>
          api.dispatch(baseActions.getSharesListError(error))
        );
      break;
    // [MODULE MIDDLEWARE] SWITCH CASE
    default:
      break;
  }
};

export default baseMiddleware;
