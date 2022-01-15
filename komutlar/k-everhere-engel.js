const Discord = require("discord.js");

const fs = require('fs');
exports.run = (client, msg, args) => {

   if (!msg.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);

if(!args[0]) {

      msg.reply("lütfen `aç` veya `kapat` şeklinde bir ayar giriniz.")

    } else {

      if(!["aç", "kapat"].includes(args[0])) {

        msg.reply("**Doğru Kullanım:** `aç` **veya** `kapat` **şeklinde bir ayar giriniz.**")

      } else {

        if(args[0] == "aç") {

          try {

            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));

            dosya[msg.guild.id] = {

              sistem: true

            }

            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {

              if(err) throw err;

            })

            msg.reply("**Sistem Başarıyla Açıldı :ballot_box_with_check:**");

          } catch (e) {

            console.log(e);

          }

        } else if(args[0] == "kapatr") {

          try {

            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));

            dosya[msg.guild.id] = {

              sistem: false

            }

            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {

              if(err) throw err;

            })

            msg.reply("**Sistem Başarıyla Kapatıldı**:x:");

          } catch (e) {

            console.log(e);

          }

        }

      }

    }


};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "everyone-engelle",

  description: "everyone ve here engeller",

  usage: "everyone-engelle"

};
