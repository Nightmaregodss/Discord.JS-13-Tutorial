/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "embed",
	description: "Shows an embed",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("This is a test embed")
			.setURL("")
			.setAuthor(
				user.username,
				user.avatarURL({ dynamic: true }),
				""
			)
			.setDescription(
				""
			)
			.setColor("BLURPLE")
			.setThumbnail(user.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
			)
			.addFields(
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});
