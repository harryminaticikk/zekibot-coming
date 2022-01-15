const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'z!'
  
	const zekibot = new Discord.RichEmbed() 
  .setColor('ff56ff')
.setDescription(`
**Kayıt Sistemi**

» \`z!kayıt-rol <@rol>\`
<:online:735557803607064587> | Kayıt Olunca Verilecek Rolü Ayarlar

» \`z!kayıt-kanal <#kanal>\`
<:online:735557803607064587> | Kayıt Kanalını Ayarlar

» \`z!kayıt-sistemi <aç-kapat>\`
<:online:735557803607064587> | Kayıt Sistemini Açar,Kapatır

» \`z!kayıt\`
<:online:735557803607064587> | Sunucuda Kayıt Olursunuz`)
message.channel.send(zekibot)
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'kayıtsistemi',
  description: '[Admin Komutu]',
  usage: 'kayıtsistemi'
};