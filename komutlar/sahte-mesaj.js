const Discord = require('discord.js');
exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Ne Yazılacağını ve kimin Yazacağını seçmelisin \n `Doğru Kullanım: z!sahtemesaj [@Kullanici#1234] [Mesaj]`!')
    
    let yazi = args.slice(1).join(" ")
    if (!yazi) return message.reply('Ne Yazılacağını ve kimin Yazacağını seçmelisin \n `Doğru Kullanım: z!sahte-mesaj [@Kullanici#1234] [Mesaj]`!')
    message.delete();
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['z!sahte-mesaj','sahtemesaj'],
    permLevel: 0
};
exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};