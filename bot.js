
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var önEk = ayarlar.prefix;
var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.login(process.env.TOKEN); //botunuzun tokenini .env kısmına yazınız.


///////////// KOMUTLAR BAŞ

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//----------------------SA-AS AYARLAMALI-----------------\\
client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('**Aleyküm Selam, Hoşgeldin! :)** ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });
//----------------------SA-AS AYARLAMALI-----------------\\
//----------------------GELİŞMİŞ AFK-----------------\\
client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Afk'lıktan Çıktınız`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});
//----------------------GELİŞMİŞ AFK-----------------\\
client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})
//-----------------------\\
client.on("message", async msg => {
 
 
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["Amk","AMK","AmK","Amk","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "orospu",  "sik", "yarrak", "amcık",  "yarram", "sikimi ye",  "aq", "amq","göt lalesi","sürtük"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
 
client.on("messageUpdate", msg => {
 
 
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["Amk","AMK","AmK","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "orospu",  "sik", "yarrak", "amcık", "yarram", "sikimi ye", "aq", "amq","göt lalesi","sürtük"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

//-------------------------------------KÜFÜR-ENGEL----------------------------------\\

//-------------------------------------REKLAM-ENGEL----------------------------------\\

client.on("messageUpdate", msg => {
  db.fetch(`reklam_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
    });
//-------------------------------------REKLAM-ENGEL----------------------------------\\


//-----------------------------------------EKLENDİM-ATILDIM-----------------------------------------------\\
client.on("guildCreate", guild => {  // sunucuya eklendim ve atıldım
let add = client.channels.get("748883031980376156")
const eklendim = new Discord.RichEmbed()

.setTitle(`<a:joined:748888482985934908> | Bir sunucuya eklendim!`)
.setFooter("ZekiBot • Sizin Sayenizde Güzelleşiyorum...", client.user.avatarURL)
.setColor("#F0F2F3")
.setThumbnail(guild.iconURL)
.addField(`<a:tools:748887764212121674> **Sunucu İsmi**`,guild.name)
.addField(`<a:tools:748887764212121674> **Sunucu İd**`, guild.id)
.addField(`<a:tac:748887133833396333> **Kurucu**`,guild.owner.user.tag)
.addField(`<a:tac:748887133833396333>**Kurucu İd**`,guild.owner.user.id)
.addField(`<:plus:748890202394722305> **Üye Sayısı**`,guild.memberCount)
add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.get("748883031980376156")
const atildim = new Discord.RichEmbed()

.setTitle(`<a:left:748889938317148250> | Bir sunucudan çıkarıldım!`)
.setFooter("ZekiBot • Sizin Sayenizde Güzelleşiyorum...", client.user.avatarURL)
.setColor("#F0F2F3")
.setThumbnail(guild.iconURL)
.addField(`<a:tools:748887764212121674>  **Sunucu İsmi**`,guild.name)
.addField(`<a:tools:748887764212121674>  **Sunucu İd**`, guild.id)
.addField(`<a:tac:748887133833396333>  **Kurucu**`,guild.owner.user.tag)
.addField(`<a:tac:748887133833396333> **Kurucu İd**`,guild.owner.user.id)
.addField(`<:plus:748890202394722305> **Üye Sayısı**`,guild.memberCount)

remove.send(atildim)
});
//-----------------------------------------EKLENDİM-ATILDIM-----------------------------------------------\\

//----------------------------------------EKLENİNCE YARDIM----------------------------------------------\\
client.on("guildCreate", guild => {
let k = guild.createChannel("bot", {type: 'text'})
const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Zeki - Hakkında")
   .setDescription('Öncelikle Botumuzu Eklediğiniz İçin Çok Teşekkürler!\nKomutlarıma Bakmak İstiyorsanız ``z!yardım`` Yazmanız Yeterlidir.\n\nTek İsteğimiz Sizlere Yardım Etmek Sizin Sayenizde Botumuz Gelişiyor.\nKatkıda Bulunmak İçin Botu Davet Edebilirsiniz!\n\n**Davet Etmek İçin Tıkla\n[Tıkla](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)\n\nDestek Sunucumuza Gelerek Yardım Alabilirsiniz.\n[Tıkla](https://discord.gg/qvxJz9t)')
  k.send(embed)
});
//----------------------------------------EKLENİNCE YARDIM----------------------------------------------\\

//--------------------------------------------------------Eklenince KANAL KURMA---------------------------------------\\
client.on('guildCreate', guild => {
const embed = new Discord.RichEmbed()
.setTitle(`ZekiBot | Bilgilendirme`)
.setColor(`09f7df`)
.setDescription(`**Merhaba!**\nBotumuzu Eklediğiniz İçin Teşekkür Ederiz!,Sizler Sayesinde Büyük Yerlere Geliyoruz.Eğer Hala Beni Eklemeyen Varsa Hala Geç Değil.\n\nKomutlara Bakmak İçin \`z!yardım\`\nBotu Davet Etmek İçin \`z!davet\`\n\n`)// <#734173047749345381>
guild.createChannel('zekibot-bilgilendirme', {type: 'text'}).then(channel => channel.send(embed))
})
//-----------------------------------------ROL KORUMA--------------------\\
client.on("roleCreate", async (rolee, member, guild) => {

  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);

  if (rolkoruma == "acik") {

    rolee.delete();

    const embed = new Discord.RichEmbed()

      .setDescription(

        "``・Dikkat!`` Sunucunuzda Bir Rol Oluşturuldu! Rol Koruma Sistemi Açık Olduğundan Dolayı Rol Otomatik Olarak Silinmiştir! "

      )

      .setColor("BLACK");

    rolee.guild.owner.send(embed);

    return;

  } else {

    return;
  }

});
//-----------------------------------------EVERYONE-HERE ENGEL--------------------\\
let ehengel = JSON.parse(

  fs.readFileSync("./ayarlar/everhereengel.json", "utf8")

);

client.on("message", async function(msg) {

  if (!msg.guild) {

  } else {

    if (!ehengel[msg.guild.id]) {

    } else {

      if (ehengel[msg.guild.id].sistem == false) {

      } else if (ehengel[msg.guild.id].sistem == true) {

        if (msg.author.id == msg.guild.ownerID) {

        } else {

          if (msg.content.includes("@everyone")) {

            msg.delete();

            msg

              .reply("**Bu sunucuda `everyone` koruması açıktır!**")

              .then(msj => msj.delete(3200));

          } else {

          }

          if (msg.content.includes("@here")) {

            msg.delete();

            msg

              .reply("Bu sunucuda `here` koruması açıktır!")

              .then(msj => msj.delete(3200));

          } else {

          }

        }

      }

    }

  }

});

//----------------------------------OTOROL-----------------------------// 
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: @${member.user.tag}'a Otorol Verildi! :bell:`)
.setColor("GREEN")
    .setFooter("Otorol Sistemi", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi! :bell:`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});
//----------------------------------OTO TAG ALINCA ROL VERME-----------------------------// 
client.on("userUpdate", async (oldUser, newUser) => {
if (oldUser.username !== newUser.username) {
let tag = "Σ"; ///////tag girin // ah be FIRE KINGDOM... 
let sunucu = "759464503187734578"; ///////sunucunuzun id
let kanal = "760150188542132244" ///////log tutulcak kanal id
let rol = "760065576772042752"; /////tag aldımı verilmesini istediğiniz rol id
if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.channels.get(kanal).send(`**${newUser} adlı kişi ${tag} tagımızı aldığı için Σ Team of Firer  rolü verildi !**`)
client.guilds.get(sunucu).members.get(newUser.id).addRole(rol) }
if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
client.channels.get(kanal).send(`**${newUser} adlı kişi ${tag} tagımızı çıkardığı için Σ Team of Firer  rolü alındı !**`) } } })


//eyy, selam! ne haber? ben harry. eski onaylı botum "ZekiBo(a)t" seni özleyeceğim dostum.. neden şimdi onaylı değil diyorsanız eski discord dbl'de onaylıydı ve şuan top.gg'ye çevirildi.. ve botumun tokeni banlı hesabımda kaldı maalesef :/ 
//her neyse, görüşürüz.. tarih 17.11.2021 21:34:34