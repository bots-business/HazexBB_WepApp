/*CMD
  command: script.js
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

function openGame(gameKey) {
    window.location.href = "<% options.GameFile %>&game="+gameKey;
}

function searchGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
}

