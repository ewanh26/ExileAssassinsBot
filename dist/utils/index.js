"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const getReq = (url, headers) => {
    return axios_1.default({
        method: "GET",
        url: url,
        headers: headers,
    });
};
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
//const getProfileComps = async (
//  componentId: number,
//  membershipId: string | number,
//  membershipType: string | number
//) => {
//  let profileComps: object = {};
//  await getReq(
//    `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=${componentId}`,
//    { "X-API-Key": APIKEY }
//  )
//    .then(res => {
//      profileComps = res.data.Response || {};
//    })
//    .catch(err => console.error(err));
//  return profileComps;
//};
//
//export { getReq, getProfileComps };
//# sourceMappingURL=index.js.map