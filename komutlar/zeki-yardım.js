const Discord = require("discord.js")

exports.run = async(client, message) => {
    
    let prefix = 'z!'

    const zeki = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Zeki Bot - Yardım Listesi`)
       .setDescription(`
 » **z!yardım** - Botun Tüm Listelenmiş Komut Kategorisini Listeler.
 » **z!kullanıcı** - Tüm Listelenmiş Kullanıcı Kategorisi.
 » **z!moderasyon** - Moderasyon Komutlarını Listeler.
 » **z!bot** - Botun Kendine Ait Komutlarını Listeler.
 » **z!eğlence** - Tüm Eğlence Komutlarını Listeler.
 » **z!koruma** - Tüm Koruma Komutlarını Listeler.

           ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ➦ <a:altinkant:752988788736917595> ZekiBoat | z!yardım

   🎁・Bize destek vermek, katkıda bulunmak için **z!öneri <öneriniz>** komudunu kullan!`)
        .setImage('https://hackernoon.com/hn-images/1*Ixp7ZsUIDMs3QHvgKZmsKw.gif')
       .addField("» Bağlantılarım", `
<a:yuklen:762587983055814667> [Davet Et!](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)
<a:yuklen:762587983055814667> [Destek Sunucum!](https://discord.gg/7pCmdaG)`, false)
       .setFooter(message.author.username, message.author.avatarURL) 
    .setTimestamp()
      
  return message.channel.send(zeki) 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Yetki Gerekmez`
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Komutu',
  usage: 'yardım'
};