/*CMD
  command: game.html
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Play Game</title>
    <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="<% options.CSSFile %>">
</head>
<body>

<nav id="navbar" class="navbar">
    <h1><i class="fas fa-gamepad"></i> Hazex Games</h1>
    <div class="game-menu">
        <a onclick="exitFullScreen()" href="<% options.HomeUrl %>">Back</a>
        <a onclick="toggleFullScreen()">Full Screen</a>
    </div>
</nav>

<div class="game-container" id="game">
    <iframe class="game-frame" id="gameFrame" src="" frameborder="0" allowfullscreen></iframe>
</div>

<script>
const games = {
    "subway-surfers": "https://freeonlinegames.github.io/subway-surfers-tokyo/",
    "happy-wheels": "https://games-online.io/game/HappyWheels/",
    "geometry-dash": "https://freeonlinegames.github.io/geometry-dash.html",
    "monster-truck": "https://szhong.4399.com/4399swf//upload_swf/ftp35/chenling/20210303/1/index.html",
    "temple-run": "https://sda.4399.com/4399swf//upload_swf/ftp36/liuxinyu/20210628/jjjj1/index.html",
    "stupid-zombie": "https://g.vseigru.net/6/igra-tupye-zombi/",
    "stack-bounce": "https://cdn.gamesnacks.com/stackbounceupdate/gameCode/index.html",
    "tunnel-rush": "https://ubg100.github.io/games/tunnelrush/index.html",
    "pac-man": "https://bward2.github.io/pacman-js/",
};

const tg = window.Telegram.WebApp;
tg.expand();
tg.enableClosingConfirmation();

const params = new URLSearchParams(window.location.search);
const game = params.get('game');
if (games[game]) {
    document.getElementById('gameFrame').src = games[game];
} else {
    tg.showAlert('Game not found!');
}

let isFullScreen = false;

function toggleFullScreen() {
    if (isFullScreen) {
        tg.exitFullscreen();
        isFullScreen = false;
    } else {
        tg.requestFullscreen();
        isFullScreen = true;
    }
}

function exitFullScreen() {
        tg.exitFullscreen();
}

Telegram.WebApp.ready();

if (Telegram.WebApp.DeviceOrientation) {
    Telegram.WebApp.onEvent('deviceOrientationChanged', function() {
        const beta = Telegram.WebApp.DeviceOrientation.beta;
        const gamma = Telegram.WebApp.DeviceOrientation.gamma;

        if (Math.abs(beta) > Math.abs(gamma)) {
            document.getElementById('navbar').style.display = "flex";
            document.getElementById('game').style.height = "calc(100vh - 50px)";
            document.getElementById('game').style.top = "50px";
        } else {
            document.getElementById('navbar').style.display = "none";
            document.getElementById('game').style.height = "100vh";
            document.getElementById('game').style.top = "0px";
        }
    });

    Telegram.WebApp.DeviceOrientation.start();
}
</script>

</body>
</html>

