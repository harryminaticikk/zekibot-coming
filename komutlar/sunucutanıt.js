const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const zekibot = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  let kanal = client.channels.get("751891528942747758") 
  const embed = new Discord.RichEmbed()
  .setTitle("» ZekiBot | Sunucu Tanıt")
  .setDescription("**<a:altinkant:752988788736917595> Sunucun ZekiBot Destek Sunucusunda Tanıtıldı** **Davet Linki** » [Tıkla](https://discord.gg/aCufCz3)")
  .setFooter("Sunucu Tanıtıldı!")
  message.channel.send(embed) 
      const invite = new Discord.RichEmbed() 
  .setAuthor("» ZekiBoat | Sunucu Tanıt")
  .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(zekibot.url)
      kanal.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt',
  description: '',
  usage: 'sunucutanıt'
};