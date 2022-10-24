const { SlashCommandBuilder } = require('discord.js');

//Provides server info to user
module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`This server is the ${interaction.guild.name}, it was created on ${interaction.guild.createdAt.toLocaleDateString("en-GB")} and has ${interaction.guild.memberCount} members.`);
	},
};