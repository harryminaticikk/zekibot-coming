const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Duyuru yapmam için birşeyler yazmalısın!** **Örnek:** `z!duyuru ZekiBot!`');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTitle(`Duyuru`)
    .setFooter(`${message.author.tag} Tarafından Duyuruldu`, message.author.avatarURL)
    .setDescription(`\n${mesaj}`)

message.channel.send("@everyone - @here").then(m => m.delete(100));

    return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0
};

exports.help = {
  name: 'duyuruyap',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuruyap [yazı]'
};