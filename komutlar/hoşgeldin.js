const Discord = require('discord.js');
module.exports.run = (client, message, args) => { 
    var Jimp = require("jimp");
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://i.postimg.cc/g2CKXYSM/tZ6OQWe.png");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[0],
        img = imgs[1];
    moldura.resize(78, 74);    // KULLANICI FOTOĞAFI <-
    img.resize(392, 184)   // ARKA PLAN BÜYÜKLÜĞÜ
    img.composite(moldura, 25, 53).getBuffer(Jimp.MIME_PNG, (err, buffer) => { // X-Y-Z
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));        
    });
})};


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg"],
  permLevel: 0
};

module.exports.help = {
  name: 'hoşgeldin',
  description: 'Avatarınız ile hoşgeldin resmi hazırlar',
  usage: 'hoşgeldin'
};
