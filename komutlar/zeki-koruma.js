const Discord = require("discord.js")

exports.run = async(client, message) => {
    
    let prefix = 'z!'

    const night = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Zeki Bot - Koruma`)
       .setDescription(`
 » **z!rol-koruma** - Bir rol oluşturulmasını önler.
 » **z!everyone-engelle** - Everyone korumasını önler.`)
        .setImage('https://hackernoon.com/hn-images/1*Ixp7ZsUIDMs3QHvgKZmsKw.gif')
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/7pCmdaG)`, false)
       .setFooter(message.author.username, message.author.avatarURL) 
    .setTimestamp()
      
  return message.channel.send(night)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Yetki Gerekmez`
};

exports.help = {
  name: 'koruma',
  description: 'Koruma Komutu',
  usage: 'koruma'
};