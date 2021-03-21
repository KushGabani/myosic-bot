module.exports = (client, message, queue) => {
  message.channel.send(
    `${client.emotes.error} - No more members in the voice channel!`
  );
};
