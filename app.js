const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

});

client.login('NTI4NzcxMDA5MTUxNjMxMzYw.DwnIYA.dET4n2yb-hCcP_jOQMRw3c722pU');
