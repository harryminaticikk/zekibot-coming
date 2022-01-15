const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  let çarpı = client.emojis.get(":x:")
  if (message.author.id !== '730040314726842439') return message.channel.send(çarpı + ":x: Bu komutu sadece `Yapımcım` **kullanabilir!**")
  let nesne = args[0]
  let çarpı2 = client.emojis.get("731168996673585205")
  if (!nesne) return message.channel.send(':x: **Gold üye olacak kişinin idsini girermisin başkan.**')
  
 await db.set(`gold_${nesne}`, 'tm')
  let tik = client.emojis.get("731168996673585205")
  message.channel.send(`**<@${nesne}> Kullanıcısı, Başarıyla Gold Üye Oldu!**`)
   client.guilds.get("756005115000782988").channel.find(x => x.name === "gold-üye-log").send(`${tik} <@${nesne}> kullanıcısı için gold üyeliği **açıldı!**`)
 
}  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'gold-ver',
  description: '[Admin Komutu]',
  usage: 'gold-ver'
};