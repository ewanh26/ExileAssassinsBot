import { Message, MessageEmbed } from "discord.js";
import { CMD } from "../index";

const cmd: CMD = {
  name: "unban",
  exec: (message: Message, d: any, args: Array<string>) => {
    if (message.member?.roles.cache.some(r => r.id === "845381923941253120")) {
      const unban_emb = (new d.MessageEmbed() as MessageEmbed)
        .setColor("#ffffff")
        .setTitle(
          "You... are the last hope of the Light? I have taken entire worlds. You are not worthy to face me."
        )
        .setImage(
          "http://pa1.narvii.com/6226/6c8a7cdfd03344985fe8268dc769cad823678c21_00.gif"
        );
      if (
        message.member?.roles.cache.some(r => r.id === "845381923941253120")
      ) {
        const user = message.mentions.users.first();
        if (!user?.id)
          return message.channel.send("I cannot find this guardian.");
        message.guild?.members.unban(user);
        unban_emb.addField(`${user}`, "Has returned from the dreadnaught.");
        message.channel.send(unban_emb);
      }
    } else {
      message.channel.send(
        "You are not admin; Your traveler's light will not reach you here!"
      );
    }
  },
  usage: "//unban <@member {required}>",
};

module.exports = cmd;
