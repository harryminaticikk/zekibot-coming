
const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
  const db = require('quick.db')
  let kullanıcı = await db.fetch(`ksistem_${msg.guild.id}`);

  if( kullanıcı == undefined){
msg.reply("**Kayıt komutları kapalı açmak için z!kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
    let kayıt = msg.author

         const kanal = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

         const channelss = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

  if (msg.channel.id !== kanal) return msg.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
    if (msg.channel.id == kanal) {
                              msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(msg.author, {
                    VIEW_CHANNEL: true
                });
            });
                          
                 msg.guild.channels.get(channelss).overwritePermissions(msg.author, {
                    VIEW_CHANNEL: false
                });
                   const rol = db.fetch(`krol_${msg.guild.id}`)
            msg.member.addRole(rol)
          msg.delete();
                    msg.author.send('**Başarıyla Kayıt Oldunuz Yönlendiriliyorsunuz...**')

      }
  }
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt','kayıtol'],
    permLevel: 0
};

exports.help = {
    name: 'kayıt-ol',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'kayıt-ol'
};