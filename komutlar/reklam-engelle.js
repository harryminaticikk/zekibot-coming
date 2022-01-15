const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Bunu Kullanabilmek İçin `aç` Yada `kapat` Yazınız!')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik').then(i => {
      const embed = new Discord.RichEmbed()
      .setColor('#00fffd')
.setDescription('✅  **Reklam Engel Başarıyla Açıldı!**')
message.channel.send(embed)

    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'kapali').then(i => {
       const embed = new Discord.RichEmbed()
      .setColor('#ff0002')
.setDescription('✅  **Reklam Engel Başarıyla Kapatıldı!**')
message.channel.send(embed)
    })
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: '[Admin Komutu]',
  usage: 'reklam-engel'
};
