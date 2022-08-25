const { loadCommands } = require("../../Handlers/commandHandler");
const { ActivityType } = require('discord.js');

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("The Client is now ready.");
    client.user.setPresence({
      activities: [{ name: `${(await client.guilds.fetch('721833153060274218')).memberCount} members`, type: ActivityType.Watching }], 
      status: 'idle',
    });

   loadCommands(client);
  }
}
