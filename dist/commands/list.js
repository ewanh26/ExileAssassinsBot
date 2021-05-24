"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const cmd = {
    name: "list",
    exec: (message, d, args) => {
        const list_emb = new d.MessageEmbed()
            .setTitle("Commands")
            .setColor("#EF7444")
            .setThumbnail("https://www.pngarea.com/pngs/394/2984794_tom-clancy-png-destiny-taken-king-png-transparent.png");
        index_1.commands.map(({ name, usage }) => {
            list_emb.addField(index_1.prefix + name, "usage: " + usage, false);
        });
        message.channel.send(list_emb);
    },
    usage: "//list",
};
module.exports = cmd;
//# sourceMappingURL=list.js.map