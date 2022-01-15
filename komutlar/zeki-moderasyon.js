const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'z!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Zeki Bot - Moderasyon`)
       .setDescription(`
» **z!sa-as** Sa-As Sistemini Açar-Kapatır.
» **z!ban <@kullanıcı>** - Seçtiğiniz kullanıcıyı sunucudan yasaklar.
» **z!oylama <mesaj>** - Bir oylama yapmanızı sağlar.
» **z!slow-mode** - Kanalın yazma limiti belirlersiniz.
» **z!sunucupanel** - Sunucunuza bir kullanıcı paneli kurabilirsiniz.
» **z!snipe** - Son silinen mesajı gösterir.
» **z!sil <miktar>** - Mesajları silmenize yarar.
» **z!reklam-engel <aç-kapat>** - Sunucuda reklamları önler.
» **z!küfür-engel <aç-kapat>** - Sunucuda küfürleri önler.
» **z!emojiyükle** - Sunucuya emoji yükleyebilirsiniz.
» **z!sunucu-kur** - Güzel  bir sunucu kurmanız sağlar.
» **z!duyuru** - Mesaj duyurmanıza sağlar.
» **z!reklamtaraması** - Üyelerin oynuyor kısmın da yazdığı reklamlara bakarsınız.
» **z!sunucutanıt** - Sunucunuzu bizim destek sunucumuz da tanıtırsınız.
» **z!çekiliş** - Bir çekiliş yaparsınız.
» **z!kayıtsistemi** - Sunucuna kayıt sistemi ekleyip, daha güvenli bir sunucu kurabilirsin!`)
.addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Zeki Bot - Moderasyon`)
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
  name: 'moderasyon',
  description: '[Admin Komutu]',
  usage: 'moderasyon'
};