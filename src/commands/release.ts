import { Message, MessageEmbed } from "discord.js";
import { CMD } from "../index";

const cmd: CMD = {
  name: "release",
  exec: (message: Message, d: any, args: Array<string>) => {
    if (
      message.member?.roles.cache.some(
        r => r.id === "845381923941253120" || r.id === "845008330208706620"
      )
    ) {
      const release_emb = (new d.MessageEmbed() as MessageEmbed)
        .setTitle("Released from the shadow realm!")
        .setImage(
          "http://pa1.narvii.com/6573/49565d33d2984d78fbb7724c74bac0f258d21d8b_00.gif"
        )
        .setColor("#000000");

      const member_role = message.guild?.roles.cache.find(
        r => r.id === "846054845563273226"
      );

      const stuckInTheShadowRealm_role = message.guild?.roles.cache.find(
        r => r.id === "846055515289157673"
      );

      const shadowRealm_vc = message.guild?.channels.cache.find(
        c => c.id === "845009833438609448"
      );

      const target_user = message.mentions.users.first();
      const target_member = message.mentions.members?.first();

      if (!target_user?.id)
        return message.channel.send("I cannot find this guardian.");

      if (stuckInTheShadowRealm_role)
        target_member?.roles.remove(stuckInTheShadowRealm_role);

      if (shadowRealm_vc) target_member?.voice.setChannel(null);

      if (member_role) target_member?.roles.add(member_role);

      release_emb.setDescription(
        `${target_member || "someone"} has been released from the shadow realm.`
      );
      message.channel.send(release_emb);
    } else {
      return message.channel.send(
        "Thou canst release them from the shadow realm"
      );
    }
  },
  usage: "//release <@member {required}>",
};

module.exports = cmd;
