/*CMD
  command: renderGames
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

var CSSFile = WebApp.getUrl({ command: "renderCSS" })
var HomeUrl = WebApp.getUrl({ command: "renderHome" })
WebApp.render({ template: "game.html", options: {CSSFile: CSSFile, HomeUrl: HomeUrl} });
