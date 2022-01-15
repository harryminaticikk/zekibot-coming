const Discord = require('discord.js');
exports.run = (client, message, args) => {  
 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`emoji` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  const emojiList =  message.guild.emojis.map(e=>e.toString()).join(" **|** ");
  message.channel.send(emojiList);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'emojiler',
  description: 'Sunucudaki Tüm Emojileri Gösterir.',
  usage: 'emojiler'
};