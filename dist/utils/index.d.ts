import { AxiosPromise } from "axios";
declare const getReq: (url: string, headers: object) => AxiosPromise<any>;
export { getReq };
