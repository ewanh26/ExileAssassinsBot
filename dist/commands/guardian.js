"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const utils_1 = require("../utils");
const cmd = {
    name: "guardian",
    exec: (message, d, args) => {
        if (!args[0])
            return message.channel.send("Please enter a guardian.");
        let profile_res;
        const basic_emb = new d.MessageEmbed();
        for (let i = 0; i < 6; i++) {
            utils_1.getReq(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${i}/${args
                .slice(0)
                .join(" ")}/`, { "X-API-Key": index_1.APIKEY })
                .then(res => {
                profile_res = res.data.Response || undefined;
                if (profile_res) {
                    profile_res.forEach(e => {
                        basic_emb
                            .setColor("#FFF4")
                            .setThumbnail("https://www.bungie.net/" + e.iconPath)
                            .setTitle("Guardian found")
                            .setDescription(e.displayName + " is their name");
                        utils_1.getReq(`https://www.bungie.net/Platform/Destiny2/${e.membershipType}/Profile/${e.membershipId}/?components=200`, { "X-API-Key": index_1.APIKEY })
                            .then(character_res => {
                            const character_data = character_res.data.Response.characters.data;
                            for (const k in character_data) {
                                const v = character_data[k];
                                const character_emb = new d.MessageEmbed()
                                    .setThumbnail("https://www.bungie.net/" + v.emblemPath)
                                    .addFields({ name: `${v.light}`, value: "Light" }, {
                                    name: v.dateLastPlayed.slice(0, 10),
                                    value: "Last Played",
                                })
                                    .setColor([
                                    v.emblemColor.red,
                                    v.emblemColor.green,
                                    v.emblemColor.blue,
                                ]);
                                message.channel.send(character_emb);
                            }
                        })
                            .catch(err => err);
                        message.channel.send(basic_emb);
                    });
                }
            })
                .catch(err => err);
            if (!(profile_res?.length !== 0)) {
                return message.channel.send("Cannot find that guardian");
            }
        }
    },
    usage: "//guardian <username (Case-Sensitive!) {required}>",
};
module.exports = cmd;
//# sourceMappingURL=guardian.js.map