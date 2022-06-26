const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
     intents: [
       "GUILDS",
       "GUILD_MESSAGES",
       "GUILD_MEMBERS"
     ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "mango") {
        message.reply("is GAY!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "centella") {
        message.reply("is GAY!")
    }
})

const welcomeChannelId = "695304367598731312"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)