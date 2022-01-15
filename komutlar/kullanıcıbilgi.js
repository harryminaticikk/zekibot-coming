const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
   var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("<:online:735557803607064587> Çevrimiçi") : (Durum == "offline" ? ("<:offline:735557006815002736> Çevrimdışı") : (Durum == "idle" ? ("<:idle:735556936916795503> Boşta") : (Durum == "dnd" ? ("<:dnd:735553621000716369> Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const botemoji = client.emojis.get('497041350651412480')
            var tarih = ''
            if(moment(user.createdAt).format('MM') === '01') {
                var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '02') {
                var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '03') {
                var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '04') {
                var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '05') {
                var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '06') {
                var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '07') {
                var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '08') {
                var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '09') {
                var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '10') {
                var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '11') {
                var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '12') {
                var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
  
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(user.avatarURL)
        .addField("<a:rainbowright:755806214213992458> Kullanıcı Adı:", `${user.tag}`)
        .addField("<a:rainbowright:755806214213992458> ID:", `${user.id}`)
        .addField("<a:rainbowright:755806214213992458> Sunucudaki Kullanıcı Adı:", `${member.nickname !== null ? `${member.nickname}` : 'Sunucuda kullanıcı adı bulunmuyor.'}`)
        .addField("<a:rainbowright:755806214213992458> Hesap Kuruluş Tarihi:", `${tarih}`)
        .addField("<a:rainbowright:755806214213992458> Bot mu?:", `${user.bot ? `${botemoji}`  : "Hayır."}`)
        .addField("<a:rainbowright:755806214213992458> Durum:", `${durm}`)
        .addField("<a:rainbowright:755806214213992458> Şuanda Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Şuanda hiç bir oyun oynamıyor.'}`)
        .addField("<a:rainbowright:755806214213992458> Rolleri:", `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bu kullanıcının bu sunucuda hiç rolü bulunmuyor.'}`)
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı"],
  permLevel: 2
};

exports.help = {
  name: 'kullanıcı',
  category: "kullanıcı",
  description: 'İstediğiniz kullanıcı hakkında bilgi verir.',
  usage: 'kullanıcı <@kişi-etiket>'
};