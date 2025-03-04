/*CMD
  command: saveRequest
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

Bot.run({ command: "/receivedRequest", user_telegramid: options.user_id, options: options })

WebApp.render({ content: {"success": true, "msg": "Saved!"}, mime_type: "application/json"   });
