import { deleteRequest, get, post, put, webApi } from "../utils/httpUtils";

// http://localhost:8080/api/users/{userId}/shares/{stockSymbol}
export const services = {
  getStockData: (stock: any) =>
    get(`${webApi}users/1/shares/${stock.stockSymbol}`),
  // [MODULE SERVICES] NEW SERVICE
};
