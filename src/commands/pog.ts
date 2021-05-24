import { Message, MessageEmbed } from "discord.js";
import { CMD } from "../index";

const cmd: CMD = {
  name: "pog",
  exec: (message: Message, d: any, args: Array<string>) => {
    const pog_emb = (new d.MessageEmbed() as MessageEmbed)
      .setTitle("POG")
      .setThumbnail(
        "https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/pKwIyI8RyGtPW35ZFg2m"
      )
      .setColor("#EF1414")
      .setDescription("Pogchamp Pogchamp Pogchamp");

    message.channel.send(pog_emb);
  },
  usage: "//pog",
};

module.exports = cmd;
