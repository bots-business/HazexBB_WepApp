/*CMD
  command: renderJS
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

var GameFile = WebApp.getUrl({ command: "renderGames" })
WebApp.render({ template: "script.js", mime_type: "text/javascript", options: {GameFile: GameFile} });
