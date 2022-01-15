const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'z!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Zeki Bot - Kullanıcı`)
       .setDescription(`
» **z!emojiler** - Sunucuda ki emojilere bakabilirsin.
» **z!kanalbilgi** - Yazı yazdığın kanalın bilgilerine bakabilirsin.
» **z!kullanıcıbilgi** - Bir kullanıcının profiline bakabilirsin.
» **z!sunucubilgi** - Sunucu bilgilerine bakabilirsin.
» **z!avatar <@etiket>** - Profil fotoğrafına bakabilirsin.`)
.addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Zeki Bot - Kullanıcı`)
  return message.channel.send(zekibot)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici` 
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Komutu',
  usage: 'kullanıcı',
};