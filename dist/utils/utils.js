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
//def getProfileComponentsForPlayer(componentID, player):
//    profile = {}
//    try:
//        profile[player] = requests.get(
//            f'https://www.bungie.net/Platform/Destiny2/{userInfoCards[player][0]["membershipType"]}/Profile/{userInfoCards[player][0]["membershipId"]}/?components={componentID}',
//            headers=API_KEY_HEADER
//        ).json()['Response']
//    except IndexError:
//        return profile
//    return profile
const getProfileComps = (componentId, membershipId, membershipType) => {
    let profileComps;
};
//# sourceMappingURL=utils.js.map