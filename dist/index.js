"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.APIKEY = exports.prefix = void 0;
const D = require("discord.js");
const fs = require("fs");
require("dotenv").config();
exports.prefix = "//";
exports.APIKEY = process.env.APIKEY;
class Bot extends D.Client {
    constructor(MCL = 180, MCMS = 200, MEHMS = 200, MSI = 200) {
        super({
            ws: { intents: D.Intents.ALL },
            messageCacheLifetime: MCL,
            messageCacheMaxSize: MCMS,
            messageEditHistoryMaxSize: MEHMS,
            messageSweepInterval: MSI,
        });
        this._login = () => {
            return this.login(process.env.TOKEN);
        };
        this.listen = () => {
            this.once("ready", () => {
                console.log("ONLINE");
                this.user?.setActivity("you...", { type: "WATCHING" });
                this.user?.setPresence({ status: "idle" });
            });
            this.on("message", (message) => {
                if (message.content.startsWith(exports.prefix)) {
                    const args = message.content.slice(exports.prefix.length).split(" ");
                    const command = args.shift()?.toLowerCase();
                    exports.commands.get(command || "none")?.exec(message, D, args);
                }
                else {
                    return;
                }
            });
            this.on("guildMemberAdd", (member) => {
                const member_role = member.guild.roles.cache.find(r => r.id === "846054845563273226");
                if (member_role)
                    member.roles.add(member_role);
                member.guild.channels.cache.find(r => r.name === "general").send([
                    `Come for me, ${member}. I will finish what Crota began.`,
                    `The Darkness is a gift, ${member}! Let my will set you free!`,
                    `You took my son, ${member}!`,
                    `Crota fell, ${member}. I will not.`,
                ][Math.floor(Math.random() * 4)]);
            });
        };
    }
}
const client = new Bot();
exports.commands = new D.Collection();
const command_fArr = fs.readdirSync(__dirname + "/commands").filter(file => file.endsWith(".js"));
for (var f of command_fArr) {
    const cmd = require(`./commands/${f}`);
    exports.commands.set(cmd.name, cmd);
}
client.listen();
client._login();
//# sourceMappingURL=index.js.map