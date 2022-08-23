const { 
     ChatInputCommandInteraction,
     SlashCommandBuilder, 
     PermissionFlagsBit, 
     Client} = require("discord.js");

const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = rquire('../../Handlers/eventHandler');

 module.exports = {
    developer: true,
 data: new SlashCommandBuilder()
 .setName("reload")
 .setDescription("Reload your commands/events.")
 .setDefaultMemberPermissions("premissionFlagBits.Adminstrator")
 .addSubcommand((Options) => Options
 .setName("events")
 .setDescription("Reload your events."))
 .addSubcommand((options) => options
 .setName("commands")
 .setDescription("Reload your commands.")),
 /**
      * 
      * @param {ChatInputCommandInteraction} inreraction 
      * @param {Client} client 
      */
 execute(inreraction, client) {
      const subCommand = Interaction.options.getsubcommand();
  
      switch(subCommand) {
           case "events" : {
                 for(const [key, value] of client.events)
                 client.removeListener(`${key}, value, true`);
                 loadEvents(client);
                 Interaction.reply({content: "Reloaded events", ephemeral: true});
           }
           break;
           case "commands" : {
             loadCommands(client);
             Interaction.reply({content: "Reloaded Commands",ephemeral: true})
           }
           break;
          }
     }

}