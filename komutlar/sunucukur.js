

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async(client, message, args) => {

let rekoronline = await db.fetch(`panelrekor_${message.guild.id}`)
if(args[0] === "sil" || args[0] === "kapat") {
db.delete(`sunucupanel_${message.guild.id}`)
db.delete(`panelrekor_${message.guild.id}`)
try{//ZEKİBOT
message.guild.channels.find(x =>(x .name).includes("• Sunucu Panel")).delete()
message.guild.channels.find(x =>(x .name).includes("Toplam Üye •")).delete()
message.guild.channels.find(x =>(x .name).includes("Aktif Üye •")).delete()
message.guild.channels.find(x =>(x .name).includes("Botlar •")).delete()
message.guild.channels.find(x =>(x .name).includes("Rekor Aktiflik •")).delete()
} catch(e) { }
message.channel.send(`Ayarlanan sunucu paneli başarıyla devre dışı bırakıldı!`)
return 
}//ZEKİBOT



message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu Kur').setDescription('Sunucudaki Tüm Kanallar silinip yenileri eklensin mi').setFooter('Onaylıyorsan 10 saniye içerisinde "evet" yazmalısın.'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 10000,
errors: ['time'],
}) 
.then((collected) => { 


try{
let role = message.guild.roles.find("name", "@everyone");
message.guild.createChannel(`Kayıt`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
message.guild.createChannel(`🎈・Kayıt-ol`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kayıt`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})

  message.guild.channels.map(m => m.delete())
  
message.guild.createChannel(`🔊・Ses Teyit`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kayıt`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
message.guild.createChannel(`Bilgilendirme`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
  message.guild.createChannel(`📋・Kurallar`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🕥・Sayaç`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🚪・Gelen Giden`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
 message.guild.createChannel(`🔍・Sunucu Rolleri`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
 message.guild.createChannel(`🔔・Duyurular`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`👥・Partnerler`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🚫・Cezai İşlemler`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Bilgilendirme`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`Kullanıcı Kanalları`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
   message.guild.createChannel(`💬・Sohbet`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🔨・Bot Komut`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🎬・Görsel`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🎉・Çekiliş`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
message.guild.createChannel(`❓・Öneriler`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`⛔・Şikayetler`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Kullanıcı Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
 
   message.guild.createChannel(`🔢・Sayı Sayma`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Eğlence`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
    message.guild.createChannel(`👍・Tuttu Tutmadı・👎`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Eğlence`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🔠・Son Harften Kelime`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Eğlence`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`👍・Doğruluk Cesaret・👎`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Eğlence`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`Yetkili Kanalları`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
   message.guild.createChannel(`🔊・TOPLANTI`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Yetkili Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`🏆・Yetkili Sohbet`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Yetkili Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
    message.guild.createChannel(`Ses Kanalları`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
 message.guild.createChannel(`🔊・Sesli Sohbet 1`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Ses Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🔊・Sesli Sohbet 2`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Ses Kanalları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`Müzik Odaları`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
   message.guild.createChannel(`🎼・Müzik Aç`, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Müzik Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
    message.guild.createChannel(`🎼・Müzik Odası 1`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Müzik Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎼・Müzik Odası 2`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Müzik Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
  message.guild.createChannel(`Oyun Odaları`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]); 
   message.guild.createChannel(`🎮・Oyun Odası 1`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎮・Oyun Odası 2`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎮・Oyun Odası 3`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎮・Oyun Odası 4`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎮・Oyun Odası 5`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
   message.guild.createChannel(`🎮・Oyun Sohbet `, 'text').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `Oyun Odaları`))).then(c => {
c.overwritePermissions(role, {
CONNECT: true,
});
})
        message.guild.createRole({
        name: '🔥 • Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: '🎈 • Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: '⚡ • Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: '✡️ • V.İ.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: '🕹️ • Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: '✅ • BOT',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
 

}catch(e){
console.log(e.stack);
}

});
});

};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["sunucu-kur"],
permLevel: 3
};

exports.help = {
name: 'sunucu-kur',
description: 'Sunucu İstatistiklerini Gösteren Panel Kurar Ve Sürekli Olarak Günceller.',
usage: 'sunucupanel',
kategori: 'yetkili'
};