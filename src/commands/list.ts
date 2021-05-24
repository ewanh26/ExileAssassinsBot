import { Message, MessageEmbed } from "discord.js";
import { CMD, commands, prefix } from "../index";

const cmd: CMD = {
  name: "list",
  exec: (message: Message, d: any, args: Array<string>) => {
    const list_emb = (new d.MessageEmbed() as MessageEmbed)
      .setTitle("Commands")
      .setColor("#EF7444")
      .setThumbnail(
        "https://www.pngarea.com/pngs/394/2984794_tom-clancy-png-destiny-taken-king-png-transparent.png"
      );
    commands.map(({ name, usage }) => {
      list_emb.addField(prefix + name, "usage: " + usage, false);
    });
    message.channel.send(list_emb);
  },
  usage: "//list",
};

module.exports = cmd;
