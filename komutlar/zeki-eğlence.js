const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'z!'
  
	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Zeki Bot - Eğlence`)
       .setDescription(`
» **z!yaz <mesaj>** - Bota istediğiniz mesajı yazdırırsınız.
» **z!sahtemesaj <@kullanıcı> <mesaj>** - Etiketlediğiniz Kullanıcıya İstediğiniz Mesajı Yazdırırsınız.
» **z!missionpassed** - Profilinize Mission Passed Efekti Verir.
» **z!havadurumu <şehir>** - Girilen Şehirin Hava Durumunu Listeler.
» **z!youtube <ara>** - YouTube'da Bir şey aratırsınız.
» **z!kralol** - Kral olursunuz.
» **z!afk <sebep>** - AFK Olursunuz.
» **z!yılbaşı** - Yılbaşı Sayaç.
» **z!token** - Botun tokenine erişebilirsin.
» **z!düello** - Biriyle 1vs1 kapışabilirsiniz.
» **z!tkm** - Taş, kağıt , makas oynarsınız.
» **z!espri** - Gülmek garanti.
» **z!banner** - Banner bir yazı yazarsınız.`)
.addField("**»Linkler**", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Zeki Bot - Eğlence`)
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
  name: 'eğlence',
  description: '[Admin Komutu]',
  usage: 'eğlence'
};