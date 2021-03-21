module.export = (client, message, track) => {
  message.channel.send(
    `${client.emoets.music} - Playing ${track.title} in ${message.member.vocie.channel.name}...`
  );
};
