/*CMD
  command: renderRequestForm
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
var saveUrl = WebApp.getUrl({ command: "saveRequest" })
WebApp.render({ template: "request.html", options: {CSSFile: CSSFile, HomeUrl: HomeUrl, saveUrl: saveUrl } });
