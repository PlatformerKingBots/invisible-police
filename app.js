const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('typingStart', (channel, user) => {
  if (user.presence.status == 'offline') {
  channel.send({embed:{
    author: {
      name: user.tag,
      icon_url: user.avatarURL
    },
    color: 0xf42225,
    description: ':rage: '+ user.tag+ ' is typing while offline!!! :rage:'
  }});
  }
});

client.login(process.env.token);
