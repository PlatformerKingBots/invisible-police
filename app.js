const Discord = require('discord.js');
const client = new Discord.Client();

var toasters = [
  'https://media.giphy.com/media/71loenMVZGgN2/giphy.gif',
  'https://media.giphy.com/media/VWVthRb92CS8E/giphy.gif',
  'https://media.giphy.com/media/71loenMVZGgN2/giphy.gif',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('TOASTER')){
    message.channel.send({file: toasters[Math.floor(Math.random() * toasters.length)]});
  }
});

client.login('NTI4NzcxMDA5MTUxNjMxMzYw.DwnIYA.dET4n2yb-hCcP_jOQMRw3c722pU');
