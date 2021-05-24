"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = {
    name: "kick",
    exec: (message, d, args) => {
        const kick_emb = new d.MessageEmbed()
            .setColor("#fff0")
            .setTitle("Light! Give your will to me!")
            .setImage("https://i.pinimg.com/originals/04/98/5a/04985ac5fb0db31e7eae9edd632babcc.gif");
        if (message.member?.roles.cache.some(r => r.id === "845381923941253120")) {
            const user = message.mentions.users.first();
            if (!user?.id)
                return message.channel.send("I cannot find this guardian.");
            const user_id = message.guild?.members.cache.get(user?.id);
            user_id?.kick();
            kick_emb.addField("Banished", `${user}`);
            message.channel.send(kick_emb);
        }
        else {
            message.channel.send("You are not admin; Your traveler's light will not reach you here!");
        }
    },
    usage: "//kick <@member {required}>",
};
module.exports = cmd;
//# sourceMappingURL=kick.js.map