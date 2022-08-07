let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let meky = fs.readFileSync('./media/bot.opus') 
conn.sendFile(m.chat, meky, '', '', m, true)
}

handler.customPrefix = /^(bot|robot|tes|hai|p|helo)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
