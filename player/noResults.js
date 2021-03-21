module.exports = (client, message, query) => {
  message.channel.send(
    `${client.emotes.error} = Song not found on YouTube for ${query}`
  );
};
