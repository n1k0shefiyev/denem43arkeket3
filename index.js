const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  cola: {
    cost: 4000 
  },
  lahmacun: {
    cost: 25
  },
  kahve: {
    cost: 24.38
  },
  soda: {
    cost: 2
  },
adacayı: {
    cost: 3
  },
mercimekcorbası: {
    cost: 12
  },
patateskızartması: {
    cost: 8
  },
ciger: {
    cost: 16
  },
yapraksarma: {
    cost: 15
  },
biberdolması: {
    cost: 15
  },
sutlac: {
    cost: 9
  },
kunefe: {
    cost: 10
  },
patlıcan: {
    cost: 18
  },
kahve: {
    cost: 4
  },
fanta: {
    cost: 6
  },
kurufasulye: {
    cost: 7
  },
tavuk: {
    cost: 8
  },
kusbasi: {
    cost: 15
  },
bamya: {
    cost: 8
  },
nohut: {
    cost: 10
  },
sekerpare: {
    cost: 12
  },

cukolata: {
    cost: 8
  },
oralet: {
    cost: 5
  },
mumbar: {
    cost: 18
  },
adana: {
    cost: 14
  },
urfa: {
    cost: 13
  },
karnıyarık: {
    cost: 15
  },
cola: {
    cost: 4
  },
lahmacun: {
    cost: 18
  },
doner: {
    cost: 12
  },
pizza: {
    cost: 25
  },
tost: {
    cost: 8
  },
cay: {
    cost: 1.5
  },
su: {
    cost: 1
  },
gazoz: {
    cost: 6
  },
bira: {
    cost: 15
  },
viski: {
    cost: 23
  },
ayran: {
    cost: 4
  },
pide: {
    cost: 14
  },
salgam: {
    cost: 7
  },
salata: {
    cost: 6
  },
pilav: {
    cost: 8
  },
pankek: {
    cost: 13
  },
güvec: {
    cost: 24
  },
kofte: {
    cost: 15
  },
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(client.config.token);

client.on("message", async message => {
let kanal = "838448870173966368" //buraya kanal id sini yaz
if(message.channel.id !== kanal) return;
message.react('838454307250110524') //buraya emojiyi koy

})

//.help yardim komutu

client.on('message', message => {
  if(message.content.toLowerCase() === ".denemeg")
  message.channel.send(
    new Discord.MessageEmbed()

    .setColor('RANDOM')
    .setTitle('deneme')
    .setURL('https://discord.js.org/')
    .setAuthor('deneme', 'https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif', 'dhttps://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif')
    .setDescription("**deneme, deneme deneme deneme**")
    .setThumbnail('https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif')
    
    .addField('deneme', 'denueme', true)
    .setImage('https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif')
    .setTimestamp()

  )
return false;
});


client.on('message', message => {
  if(message.content.toLowerCase() === "deneme")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('deneme amaci')
	.setURL('https://discord.js.org/')
	.setAuthor('denemek', 'https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif', 'https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif')
	.setDescription("deneme icin acildi**")
	.setThumbnail('https://blog.commlabindia.com/wp-content/uploads/2019/07/animated-gifs-corporate-training.gif')
	
	.addField('deneme deni ace', 'denemes', true)
	.setImage('https://blog.commlabindia.com/wp-content/uploads/2019/07/animated-gifs-corporate-training.gif')
	.setTimestamp()

  )
return false;
});

client.on('message', async message => {   
   let süre = 4000
  let kontrol = await db.fetch(`atriasensei_${message.author.id}`)
  if(süre - (Date.now() - kontrol) > 0) return message.reply("Bu komutu 4 saniyede bir kullanabilirsin")
    if(message.content.toLowerCase() === "deneme")
  
    message.channel.send(
      new Discord.MessageEmbed()
  
      .setColor('RANDOM')
      .setTitle('deneme')
      .setURL('https://discord.js.org/')
      .setAuthor('deneme', 'deneme.com', 'deneme.com')
      .setDescription("**deneme, deneme deneme deneme**")
      .setThumbnail('deneme.gif')
      
      .addField('deneme', 'deneme', true)
      .setImage('deneme.gif')
      .setTimestamp()
  
    )
  return false;
  });

const db = require("quick.db")