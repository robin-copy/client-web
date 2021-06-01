import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	getStockData: (id: string) => get(`${webApi}stock/${id}`),
    // [MODULE SERVICES] NEW SERVICE
};