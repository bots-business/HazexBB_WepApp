/*CMD
  command: request.html
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
    <title>Request Game - Hazex Games</title>
    <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="<% options.CSSFile %>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    
</head>
<body>

<nav class="navbar">
    <h1><i class="fas fa-gamepad"></i> Hazex Games</h1>
    <a href="<% options.HomeUrl %>"><i class="fas fa-arrow-left"></i> Back</a>
</nav>

<div class="container">
    <div class="form-container">
        <h1 class="heading">Request Game</h1>
        <form id="gameForm">
            <label for="game-name">Enter Your Game Name:</label>
            <input id="game-name" class="input-field" placeholder="Game Name" autocomplete="off">
            <div id="error-message" class="down-error"></div>
            <button class="submit-button" type="button" id="submitBtn">Submit</button>
        </form>
    </div>
</div>

<script>
const tg = window.Telegram.WebApp;
tg.expand();
tg.enableClosingConfirmation();

const userid = tg.initDataUnsafe.user?.id;
if (!userid) {
    tg.showAlert('Open it inside Telegram WebApp, cannot detect user.');
} else {
    const inputField = document.getElementById('game-name');
    const errorMessage = document.getElementById('error-message');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        errorMessage.textContent = ''; 
        const gameName = inputField.value.trim();

        if (!gameName) {
            errorMessage.textContent = 'Please enter a game name!';
            tg.HapticFeedback.notificationOccurred('error');
            return;
        }

        const payload = {
            user_id: tg.initDataUnsafe.user.id,
            user_name: tg.initDataUnsafe.user.first_name,
            game_name: gameName
        };

        fetch("<% options.saveUrl %>", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                inputField.value = "";
                tg.showAlert('Game Request Sent!');
                tg.HapticFeedback.notificationOccurred('success');
            } else {
                errorMessage.textContent = "Failed To Submit Request!";
                tg.HapticFeedback.notificationOccurred('error');
            }
        })
        .catch(error => {
            errorMessage.textContent = 'Failed To Submit Request!.';
            tg.HapticFeedback.notificationOccurred('error');
        });
    });
}
</script>

</body>
</html>

