const Discord = require('discord.js');
const fs = require('fs');

var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off")  return message.reply('Lütfen `aç` veya `kapat` Yazınız!')

    if (secenekler === "aç" || secenekler === "on") {
        
    var i = db.set(`ksistem_${message.guild.id}`, "acik")
    
        message.channel.send(("!", "") + `${i.replace("acik", "Kayıt Sistemi Komutları Artık Kullanılabilir ve Kayıt Kullanıcıları için Oda Açılmıştır.")}`)
    
 
    };

    if (secenekler === "kapat") {
    
    db.delete(`ksistem_${message.guild.id}`)
    
        message.channel.send("Kayıt Sistemi Kapatıldığı İçin Kayıt Komutları Kullanılamaz Hale Getirildi Açmak İçin `z!kayıt-sistemi aç`")
    

  }
    };

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['kayıt-sistemi'],
        permLevel: `Yeterli yetki yok`
      };
      
    exports.help = {
        name: 'kayıt-sistemi',
        description: 'kayıt sistemi işte.',
        usage: 'kayıt-sistemi <aç-kapat>'
    };