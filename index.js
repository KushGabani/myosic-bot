const Discord = require("discord.js");
const { PREFIX, TOKEN } = require("./config.json");

const client = new Discord.Client();
client.login(TOKEN);

client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  if (!userIsConnected(message)) return;

  if (message.content == `${PREFIX}ping`) {
    return message.reply("Debug Profile: 'pong'");
  } else if (message.content == `${PREFIX}pong`) {
    return message.reply("Debug Profile: 'ping'");
  } else if (
    message.content.startsWith(`${PREFIX}play`) ||
    message.content.startsWith(`${PREFIX}p`)
  ) {
    play(message);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
});

const userIsConnected = (message) => {
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    message.channel.send("Debug Profile: Abey mere ko to andar lo...");
    return false;
  }
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    message.channel.send("Pratibha diye hai suvidha nahi.");
    return false;
  }

  return true;
};

const play = () => {
  const searchQuery = message.content
    .split(" ")
    .map((val, i) => {
      if (i != 0) return val;
    })
    .join(" ")
    .trim();

  message.channel.send(
    `Debug Profile: You searched for ${searchQuery}. Noice!`
  );
};
