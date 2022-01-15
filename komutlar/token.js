const Discord = require("discord.js")

exports.run = async(client, message) => {
  const bottoken = new Discord.RichEmbed()
  .setDescription('**Token mi İstedin Alabilirsin :)**')
  .setImage('https://cdn.discordapp.com/attachments/746605854320623686/748898252375720056/Animated_GIF-downsized_large.gif')
  .setColor('YELLOW')
  message.channel.send(bottoken)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'token',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'token'
}