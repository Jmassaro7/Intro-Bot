const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require("discord.js");
const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is Online!");

    client.user.setActivity("Intro Bot", {type: "WATCHING" });
})

client.on("messageCreate" , (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Message Array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS




})

if (command === 'test') {
    message.channel.send("Bot is working!")
} 

























client.login("token")