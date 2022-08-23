const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("tests"),
/**
 * 
 * @param {ChatInputCommandInteraction} interaction 
 */
    execute(interaction) {
     interaction.reply({content: "test", ephemeral: true});
    }
}