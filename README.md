
# 🎮 Hazex Games

Hazex Games is a **Telegram WebApp-powered gaming platform**, delivering **fast, fun, and addictive games directly inside Telegram**. From arcade classics to modern skill challenges.

---

## ✨ Key Features

- 🕹️ **8+ Games Embedded Directly Inside Telegram**
- 📲 **Full WebApp Integration**
- 📐 **Auto Fullscreen with Orientation Support**
- ⚡ **Seamless Play with No Installs**
- 🎮 Users Can Request New Games Directly
- 🛎️ Admin Receives Game Requests in Bot with User Info
- 🎨 **Responsive Design for Mobile & Desktop**

---

## 🎮 Games Available

| Game Name    | Description |
|----------------|---------------------------------|
| Subway Surfers | Run, dodge, and collect coins. |
| Temple Run - Holi | Run, escape, and dodge all obstacles! |
| Stack Bounce | Smash stacks with bouncing ball fun! |
| Pac Man | Eat dots, avoid ghosts, classic maze! |
| Happy Wheels | Crazy physics racing with hilarious crashes! |
| Geometry Dash | Jump, dodge, and survive the beat! |
| Tunnel Rush | Dodge obstacles in colorful fast tunnel! |
| Monster Truck | Race monster trucks to the finish! |

---

## 🔗 How It Works

1. Users open the bot and click the **Open** button.
2. They see a clean interface with **game cards, search bar, and a responsive layout**.
3. Clicking any game opens it directly inside Telegram.
4. **Fullscreen support for immersive gameplay.**
5. Orientation detection hides the navbar in landscape mode for better screen space.
6. Users can exit fullscreen or return to the main menu at any time.
7. If a user wants a new game added, they can fill a "Request Game" form.
8. The requested game name and the user's Telegram name are instantly sent to the bot admin via a direct bot message.
9. Admin can review and decide whether to add the new game to the list.

---

## 🛠️ Technologies Used

- **Bots.Business WebApp**
- **BJS, HTML, CSS, JS**
- **Telegram Mini App Events (orientation, fullscreen, etc.)**
- **Dynamic Game Loader using URL Parameters**
- **Mobile Responsive Layout**

---

## 📄 Example Code

**Dynamic Game Loading (game.html)**

```javascript
const games = {
    "subway-surfers": "https://freeonlinegames.github.io/subway-surfers-tokyo/",
    "geometry-dash": "https://freeonlinegames.github.io/geometry-dash.html",
    "tunnel-rush": "https://ubg100.github.io/games/tunnelrush/index.html",
    //more in same format
};

const tg = window.Telegram.WebApp;
tg.expand();

const params = new URLSearchParams(window.location.search);
const game = params.get('game');

//embed game in iframe
if (games[game]) {
    document.getElementById('gameFrame').src = games[game];
} else {
    document.body.innerHTML = '<h2>Game not found!</h2>';
}
```

**Orientation Handling to Hide Navbar in Landscape**

```javascript
//telegram event handler for orientation

Telegram.WebApp.onEvent('deviceOrientationChanged', () => {
    const beta = Telegram.WebApp.DeviceOrientation.beta;
    const gamma = Telegram.WebApp.DeviceOrientation.gamma;

    if (Math.abs(beta) > Math.abs(gamma)) {
        document.getElementById('navbar').style.display = "flex";
        //more
    } else {
        document.getElementById('navbar').style.display = "none";
        //more
    }
});

Telegram.WebApp.DeviceOrientation.start();
```

**Fullscreen Toggle**

```javascript
//telegram bulit-in fullscreen toggle

let isFullScreen = false;

function toggleFullScreen() {
    if (isFullScreen) {
        Telegram.WebApp.exitFullscreen();
        isFullScreen = false;
    } else {
        Telegram.WebApp.requestFullscreen();
        isFullScreen = true;
    }
}
```

**Request Form**

```javascript
//form submmit with error handling and success alert

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
    errorMessage.textContent = 'Failed To Submit Request!';
    tg.HapticFeedback.notificationOccurred('error');
});
```

---


---

## 🚀 Why Hazex Games Stands Out

- Unique blend of **casual & classic games**.
- Built with **Telegram Mini Apps’ latest features**.
- **Auto-adaptive UI** for both portrait and landscape.
- Built for **performance and user engagement inside Telegram.**

---

## 🏆 Contest Focus

This bot is designed for a **Telegram WebApp contest**, focusing on:

- ✅ Smooth UX inside Telegram
- ✅ Leveraging Mini App Events (fullscreen, orientation, lifecycle)
- ✅ Unique multi-game experience
- ✅ Clean and readable code
- ✅ Users can request new games via a form inside the WebApp.
- ✅ The admin receives the game request directly as a message in your bot including the user's Telegram name, id and the requested game.

---

## 📸 Screenshots

### Main Game Menu
![Main Menu](https://i.ibb.co/mC9CGPZf/image.png)

### Gameplay
![Gameplay](https://i.ibb.co/8n4v0Nth/image.png)

### Request Form
![Request Form](https://i.ibb.co/bM9kTsSy/image.png)

---

## 💬 Contact

Have questions or want to collaborate? Reach out via Telegram:

👉 [Contact Developer](https://t.me/mrhazex)

---

## ⭐ Credits

Developed By: **Hazex**
Contest Hosted By: [Bots.Business](https://t.me/botsbus)
Bot Link: [@HazexBB_Bot](https://t.me/Hazexbb_bot)

---

## 🏁 Final Note

This project isn’t just a game launcher — it’s designed to show the **full potential of Telegram WebApps and Bots.Business Platform**, including:

- Fullscreen gaming experience
- Real-time device interaction
- User's Game Request
- Seamless integration with Bots.Business’s evolving platform
