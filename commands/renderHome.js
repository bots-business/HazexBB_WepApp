/*CMD
  command: renderHome
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

var botLink = "http://t.me/" + bot.name;
var CSSFile = WebApp.getUrl({ command: "renderCSS" })
var JSFile = WebApp.getUrl({ command: "renderJS" })
var RequestForm = WebApp.getUrl({ command: "renderRequestForm" })
WebApp.render({
  template: "index.html",
  options: {
    botLink: botLink,
    CSSFile: CSSFile,
    JSFile: JSFile,
    RequestForm: RequestForm
  }
});
