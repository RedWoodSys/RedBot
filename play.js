const ytdl = require('ytdl-core');

exports.run = async (client, message, agrs, ops) => {
     // Check connection to VCH
     if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
     // Check bot connected to VCH
     if(!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is alredy connected to the guild.');
     // Check if input a url
     if(!agrs[0]) return message.channel.send('Sorry, please input url following the command.');
     //Validate Info
     let validate = await ytdl.validateURL(agrs[0]);
     //Check validation
     if (!validate) return message.channel.send('Sorry, please input ***valid*** url.');
     //Fetch vide info
     let info = await ytdl.getInfo(agrs[0]);
     //Store authors
     let connection = await message.member.voiceChannel.join();
     //Play song
     let dispather = await connection.play(ytdl(agrs[0], { filter: 'audioonly' }));
     //Output
     message.channel.send(`Now playing: ${info.title}`);
}