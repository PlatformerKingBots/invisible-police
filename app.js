const Discord = require('discord.js');
const client = new Discord.Client();

var toasters = [
  'https://media.giphy.com/media/71loenMVZGgN2/giphy.gif',
  'https://media.giphy.com/media/VWVthRb92CS8E/giphy.gif',
  'https://media.giphy.com/media/71loenMVZGgN2/giphy.gif',
  'https://media.giphy.com/media/7wUoPcTuC166s/giphy.gif',
  'https://media.giphy.com/media/EAvAOsVRNphfO/giphy.gif',
  'https://media1.tenor.com/images/84e2ba1c9804ecaf13b24a776a03f03a/tenor.gif?itemid=4950420',
  'https://media1.tenor.com/images/e7fe8d76d9f1cf392c2d97d87d673f07/tenor.gif?itemid=5319546',
  'https://media1.tenor.com/images/e700a457fb705fd1b90e65baab24c5ba/tenor.gif?itemid=5645503',
  'https://media1.tenor.com/images/e700a457fb705fd1b90e65baab24c5ba/tenor.gif?itemid=5645503',
  'https://media1.tenor.com/images/73d563cdc282ad270a027f8d5efb17a8/tenor.gif?itemid=5395765',
  'https://media1.tenor.com/images/5b6a39aa00312575583031d2de4edbd4/tenor.gif?itemid=5468293',
  'https://media1.tenor.com/images/36840fcc3b6aba202c3f75811a7262d1/tenor.gif?itemid=10874237',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith('TOASTER')){
    message.channel.send({file: toasters[Math.floor(Math.random() * toasters.length)]});
  }
});

client.login(process.env.token);
