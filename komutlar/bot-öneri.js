const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
if (talkedRecently.has(message.author.id)) {
 if(message.author.id === '730040314726842439'){  return message.channel.send( message.author + "Bu Komutu 1 Saatte Bir Kullanabilirsin! " );
    }} else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 3600000);
    }
let bug = args.join(" ").slice(0);
let user = message.author.username;
let userid = message.author.id;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("755297084210544650")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Öneriler")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Öneri", bug, true)
.addField("Bildiren", user, true)
.addField("Bildiren ID", userid, true)
.addField("Sunucu Adı", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send("✅  **| Önerin Başarıyla İletildi !**")
channel.send(embed)

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri-bildir"],
  permLevel: 0  
};

exports.help = {
  name: 'öneri',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'öneri'
}