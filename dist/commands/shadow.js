"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = {
    name: "shadow",
    exec: (message, d, args) => {
        if (message.member?.roles.cache.some(r => r.id === "845381923941253120" || r.id === "845008330208706620")) {
            const shadow_emb = new d.MessageEmbed()
                .setTitle("Sent to the shadow realm!")
                .setImage("https://33.media.tumblr.com/a1be537496b06043da405bc6c2117da0/tumblr_nslr77kZbz1qzh2aio8_500.gif")
                .setColor("#000000");
            const member_role = message.guild?.roles.cache.find(r => r.id === "846054845563273226");
            const stuckInTheShadowRealm_role = message.guild?.roles.cache.find(r => r.id === "846055515289157673");
            const shadowRealm_vc = message.guild?.channels.cache.find(c => c.id === "845009833438609448");
            const target_user = message.mentions.users.first();
            const target_member = message.mentions.members?.first();
            if (target_member?.roles.cache.has("845381923941253120")) {
                return message.channel.send("Thou canst banish this guardian to the shadow realm.");
            }
            if (member_role)
                target_member?.roles.remove(member_role);
            if (shadowRealm_vc)
                target_member?.voice.setChannel(shadowRealm_vc);
            if (stuckInTheShadowRealm_role)
                target_member?.roles.add(stuckInTheShadowRealm_role);
            shadow_emb.setDescription(`${target_member} has been taken by Oryx`);
            message.channel.send(shadow_emb);
        }
        else {
            return message.channel.send("Thou canst banish to the shadow realm.");
        }
    },
    usage: "//shadow <@member {required}>",
};
module.exports = cmd;
//# sourceMappingURL=shadow.js.map