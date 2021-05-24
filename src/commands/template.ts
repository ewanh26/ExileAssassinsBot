import { Message } from "discord.js";
import { CMD } from "../index";

const cmd: CMD = {
  name: "",
  exec: (message: Message, d: any, args: Array<string>) => {
    //if (message.member?.roles.cache.some(r => r.id === "845381923941253120"))
  },
  usage: "",
};

module.exports = cmd;
