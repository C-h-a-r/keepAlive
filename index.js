const Discord = require('discord.js')
const Client = new Discord.Client();

const keepAlive = require('./server.js')


Client.login(process.env.TOKEN)
