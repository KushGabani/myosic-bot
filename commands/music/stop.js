module.exports = {
  name: "stop",
  aliases: ["dc"],
  category: "Music",
  utilisation: "{prefix}stop",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send(`Abey mere ko to andar lo!!`);

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send("Tum BHI mere saath nahi 😔");

    if (!client.player.getQueue(message))
      return message.channel.send("No song currently playing!");

    client.player.setRepeatMode(message, false);
    const success = client.player.stop(message);

    if (success)
      message.channel.send(`${client.emotes.success} - **Stopped!**`);
  },
};
