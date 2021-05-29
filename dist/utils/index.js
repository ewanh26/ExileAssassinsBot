"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReq = void 0;
const axios_1 = require("axios");
const getReq = (url, headers) => {
    return axios_1.default({
        method: "GET",
        url: url,
        headers: headers,
    });
};
exports.getReq = getReq;
//# sourceMappingURL=index.js.map