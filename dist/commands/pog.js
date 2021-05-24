"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = {
    name: "pog",
    exec: (message, d, args) => {
        const pog_emb = new d.MessageEmbed()
            .setTitle("POG")
            .setThumbnail("https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/pKwIyI8RyGtPW35ZFg2m")
            .setColor("#EF1414")
            .setDescription("Pogchamp Pogchamp Pogchamp");
        message.channel.send(pog_emb);
    },
    usage: "//pog",
};
module.exports = cmd;
//# sourceMappingURL=pog.js.map