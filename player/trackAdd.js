module.exports = (client, message, queue, track) => {
  message.channel.send(
    `${client.emotes.music} - ${track.title} added to the queue!`
  );
};
