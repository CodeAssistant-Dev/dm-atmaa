const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "480709626917027842") return message.reply('Bu komutu sadece Sahip Kullanabilir'); // Ordaki ID yerine kendi discord idnizi yazın
      
  if (!message.guild) {
  const CSDcodeserver= new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı', 'Bu komut özel mesajlar için yapılmamıştır');
  return message.author.sendEmbed(CSDcodeserver); }
  let guild = message.guild;
  let sebeb = args.slice(1).join(' ');
  let üye = message.mentions.users.first();
  if (sebeb.length < 1) return message.reply("üye'ye ne mesajı attacağım ?");
  if (message.mentions.users.size < 1) return message.reply("kime mesaj attacağım etiketle").catch(console.error);
  message.delete();
  message.reply('Mesajını üyeye gönderdim')
  message.channel.send("CSD's Code Server Sunucumuza Gel Dostum: https://discord.gg/wdKvqHK")
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**CSD's Code Server Mesajı**`)
  .setTimestamp()
  .setDescription(sebeb);
  return üye.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm-mesaj','özel-mesajlar'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  ÇalmayınDöveriz: 'Dövülmek İstemiyorsan Çalma',
  SunucuyadaGel: 'mesajat'
};
