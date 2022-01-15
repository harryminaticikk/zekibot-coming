const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  
const zekibot = new Discord.RichEmbed()
.setTitle('Zeki Bot Davet')
.setDescription('**Zeki Botun Özelliklerini Kendi Sunucunda Keşfetmek İçin Botumuzu Ekleyiniz**\n[Tıkla](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)\n\n**Sunucumuza Gelerek Bot Hakkında Görüşlerini Belirtebilir,Yardım Alabilirsin!**\n[Destek Sunucumuz](https://discord.gg/qvxJz9t)')
.setFooter('Beni eklemeyi unutma!')
.setColor('GOLD')
.setImage('https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif')
return message.channel.send(zekibot);
}


exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['bot-davet'],
	permLevel : 0
}
//NIGHT
exports.help = {
	name : 'davet',
	description : 'Komut kategorilerini atar',
	usage : 'davet'
}