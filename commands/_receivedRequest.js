/*CMD
  command: /receivedRequest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var txt = `<b>🚀 New Game Request Received

▫️ User's Name: ${options.user_name}
▫️ User's Telegram ID: <code>${options.user_id}</code>

🔸 Game Name: ${options.game_name}</b>`

var adminId = "5582378166";

Api.sendMessage({ chat_id: adminId, text: txt, parse_mode: "HTML" })
