const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Dragon ✨ | !help `,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name :",`${message.author.username}`, true)
  .addField('Tag :',"#" +  message.author.discriminator, true)
  .addField("ID :", message.author.id, true)
  .addField("Create Accounit :", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message =>{//ping
if(message.content.startsWith(prefix  +  'ping'))  {
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`
Discord API: ${client.ping.toFixed(0)} ms`);
  });
  }
});


client.on('message', function(msg) {
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "Russia": "Russia",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
      
          if (msg.content.startsWith(prefix + 'server')) {
          if (!msg.guild) return message.reply('**Only Servers | :x:**')
      console.log(`${msg.author.username} Has Ran Server Command`)
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(msg.guild.iconURL)
          .setTitle(`${msg.guild.name}`)
          .addField('**Server Name **',`[** __${msg.guild.name}__ **]`,true)
          .addField('**OwnerShip **',`**${msg.guild.owner}**`,true)
          .addField('**Server ID **',`**${msg.guild.id}**`,true)
          .addField('**Members Count **',`[** __${msg.guild.memberCount}__ **]`,true)
          .addField('**Region **',`[** __${region[msg.guild.region]}__** ]`,true)
          .addField('**Text Channels **',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
          .addField('**Voice Channels **',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
          .addField('**Created Server **',msg.guild.createdAt.toLocaleString())
          msg.channel.send({embed:embed});
        }
      });


client.on("message", message => {
    var prefix = "!";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


client.on("message", message => {
  if (message.content === "!help") {
   const embed = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')
       .setFooter('اوامر الادمنيه')
     .addField('!server', `لمعرفة معلومات السيرفر`)
       .setFooter('======================================================')
       .setFooter('اوامر الاعضاء')
       .addField('!bot', `لاضافة البوت الى سيرفرك`)
     .addField('!roles', `لمعرفة الرتب الي في السيرفر`)
       .addField('!2avatar', `الافتار عن طريق المنشن`)
     .addField('!id', `يجبلك الملف الشخصي حقك`)
     .addField('!clear', `البوت يمسح  100 رسايل`)
     .addField('!ping', `يقلك كم بنق البوت`)
       .addField('!support', `سيرفر الدعم`)
       .setFooter('======================================================')
       .setFooter('كل أسبوع يتم تجديد الأوامر ,')
       message.author.send({embed});
 
  }
 });


client.on('message', message => {let prefix = "!";
if(message.content.startsWith(prefix + "sug")) {
      message.delete()

const args = message.content.slice(prefix.length).trim().split(/ +/g);

  var suggestMessage = args.slice(1).join(" ")
  if(!suggestMessage) return message.reply("Please make a suggestion")
  let suggestsEMBED = new Discord.RichEmbed()
   .setColor('#0028db')
   .setTitle(" Suggestion ! ")
   .setDescription(`**${suggestMessage}**`)
   .setFooter(` Proposed : ${message.author.tag}`)
  
       let suggests = message.guild.channels.find(ch => ch.name === "suggestions");
                   if (!suggests) return message.reply("يرجى صنع روم بأسم : suggestions")
               suggests.send(suggestsEMBED);
}
})


client.login(process.env.BOT_TOKEN);
