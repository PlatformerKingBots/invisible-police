const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('typingStart', (channel, user) => {
  channel.send({embed:{
    author: {
      name: user.tag,
      avatar_url: user.avatarURL
    },
    description: ':rage: '+ user.tag+ ' is typing while offline!!! :rage:'
  }});
});

client.login(process.env.token);
