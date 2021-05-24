import { Message, MessageEmbed } from "discord.js";
import { CMD } from "../index";

const cmd: CMD = {
  name: "ban",
  exec: (message: Message, d: any, args: Array<string>) => {
    if (message.member?.roles.cache.some(r => r.id === "845381923941253120")) {
      const ban_emb = (new d.MessageEmbed() as MessageEmbed)
        .setColor("#ffffff")
        .setTitle("At last... I will have vengeance!")
        .setImage("https://i.gifer.com/BORs.gif");
      if (
        message.member?.roles.cache.some(r => r.id === "845381923941253120")
      ) {
        const user = message.mentions.users.first();
        if (!user?.id)
          return message.channel.send("I cannot find this guardian.");
        const user_id = message.guild?.members.cache.get(user?.id);
        user_id?.ban({
          days: parseInt(args[0]) || undefined,
          reason: args?.slice(1, -1).join(" ") || undefined,
        });
        ban_emb.addField("Exiled", `${user}`);
        message.channel.send(ban_emb);
      }
    } else {
      message.channel.send(
        "You are not admin; Your traveler's light will not reach you here!"
      );
    }
  },
  usage: "//ban <@member {required}> <days {optional}> <reason {optional}>",
};

module.exports = cmd;
