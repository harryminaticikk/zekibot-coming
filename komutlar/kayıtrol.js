
//KAYIT KANALI İÇİN


//KAYIT ROLÜ İÇİN

const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("**Kayıt komutları kapalı açmak için z!kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let role = message.mentions.roles.first()

    if (!role) {
        return message.reply("Ayarlamak istediğin rolü etiketlemelisin!")
    }

  
    db.set(`krol_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setTitle(`» Kayıt olunca verilecek rol başarıyla **${role.name}** olarak ayarlandı! Rolü değiştirmek istersen tekrar etiketlemelisin.`)
    .setColor("RANDOM")
    message.channel.send({embed})
      }
  }

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-rol'],
    permLevel: `ueytki`,
}

exports.help = {
    name: 'kayıt-rol-ayarla',
    category: 'moderasyon',
    description: 'Birisi susturulunca verilecek rolü ayarlar.',
    usage: 'kayıt-rol-ayarla <@rol>'
}
//KAYIT OLMAK İÇİN

