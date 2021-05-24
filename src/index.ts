import * as D from "discord.js";
const fs = require("fs");
require("dotenv").config();
export const prefix = "//";
export const APIKEY = process.env.APIKEY;

export interface CMD {
  name: string;
  exec: Function;
  usage: string;
}

class Bot extends D.Client {
  public constructor(MCL = 180, MCMS = 200, MEHMS = 200, MSI = 200) {
    super({
      ws: { intents: D.Intents.ALL },
      messageCacheLifetime: MCL,
      messageCacheMaxSize: MCMS,
      messageEditHistoryMaxSize: MEHMS,
      messageSweepInterval: MSI,
    });
  }
  _login = (): Promise<string> => {
    return this.login(process.env.TOKEN);
  };

  listen = (): void => {
    this.once("ready", () => {
      console.log("ONLINE");
      this.user?.setActivity("you...", { type: "WATCHING" });
      this.user?.setPresence({ status: "idle" });
    });
    this.on("message", (message: D.Message) => {
      if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(" ");
        const command = args.shift()?.toLowerCase();
        commands.get(command || "none")?.exec(message, D, args);
      } else {
        return;
      }
    });
    this.on("guildMemberAdd", (member: D.GuildMember) => {
      const member_role = member.guild.roles.cache.find(
        r => r.id === "846054845563273226"
      );
      if (member_role) member.roles.add(member_role);
      (
        member.guild.channels.cache.find(
          r => r.name === "general"
        ) as D.TextChannel
      ).send(
        [
          `Come for me, ${member}. I will finish what Crota began.`,
          `The Darkness is a gift, ${member}! Let my will set you free!`,
          `You took my son, ${member}!`,
          `Crota fell, ${member}. I will not.`,
        ][Math.floor(Math.random() * 4)]
      );
    });
  };
}

const client = new Bot();

export let commands = new D.Collection<string, CMD>();
const command_fArr = (
  fs.readdirSync(__dirname + "/commands") as Array<string>
).filter(file => file.endsWith(".js"));
for (var f of command_fArr) {
  const cmd: CMD = require(`./commands/${f}`);
  commands.set(cmd.name, cmd);
}

client.listen();
client._login();
