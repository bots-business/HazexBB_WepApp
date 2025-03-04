/*CMD
  command: styles.css
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

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
    -webkit-tap-highlight-color: transparent;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: #00ADB5;
    color: #000;
    height: 50px;
}


.navbar h1 {
    font-size: 29px;
}

.game-menu {
  margin-right: 10vw;  
}

.navbar a {
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background: #00979e;
  -webkit-tap-highlight-color: transparent;
  padding: 8px;
  border-radius: 10px;
}

.navbar a:hover {
    background: #009299;
}

.search-bar {
    position: relative;
}
.search-bar input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #000;
    border-left: 1.8px solid #000;
    padding: 8px 8px 8px 30px;
    color: #000;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
}

.search-bar input::placeholder {
    color: #141414;
}

.search-bar input:focus {
    border-bottom-color: #3b3b3b;
    border-left-color: #3b3b3b;
}

.search-bar .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #141414;
}

.games-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    padding: 20px;
}

.game-card {
    width: 250px;
    height: 350px;
    background-color: #222831;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    text-align: center;
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: transparent;
}

.game-card img {
    width: 100%;
    max-width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 8px;
}

.game-card h3 {
    margin: 10px 0 5px;
    font-size: 18px;
    color: #EEEEEE;
}

.game-card p {
    margin: 0;
    font-size: 14px;
    color: #EEEEEE;
}

.game-card:hover {
    background-color: #393E46;
}


.game-container {
    top: 50px;
    overflow: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 50px);
    background: #000;
}

iframe {
    width: 100%;
    height: 100%;;
}

.requests-btn {
    margin-top: 10px;
    margin-left: 20px;
    width: 180px;;
    display: block;
    text-decoration: none;
    padding: 10px 15px;
    background: #00ADB5;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    -webkit-tap-highlight-color: transparent;
    color: #000;
}

.requests-btn i {
  margin-right: 7px;
}

.requests-btn:hover {
    background: #00888f;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
}

.form-container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #222831;
    border-radius: 10px;
    text-align: center;
}

.heading {
    margin-bottom: 20px;
    color: #EEEEEE;
    font-family:"Varela Round", sans-serif;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    width: 100%;
    text-align: left;
    font-size: 14px;
    color: #fff;
    margin-bottom: 3.5px;
}

.input-field {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 17px;
    background: #393E46;
    border: 2px solid rgb(83, 88, 88);
    color: #fff;
    outline: none;
    transition: border-color 0.3s ease;
}

.submit-button {
    width: 100%;
    padding: 11px;
    background-color: #00ADB5;
    color: #000;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 5px;
    -webkit-tap-highlight-color: transparent;
}

.input-field::placeholder {
    color: #afafafc3;
    transition: color 0.3s ease;
}

.input-field:focus::placeholder {
    color: #cccccc;
}

.input-field:focus {
    color: #fff;
    border-color: rgb(149, 159, 159);
    background: #535a66;
}

.submit-button:hover {
    background-color: #00888f;
}

.down-error {
    color: rgb(248, 215, 218);
    font-size: 15px;
    margin-bottom: 15px;
    margin-top: -10px;
}

@media (max-width: 600px) {
  
 .game-menu {
  margin-right: 0px;  
  }
  
.games-list {
   grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
   gap: 10px;
   padding: 10px;
   margin-left: 3px;
}

.game-card {
    width: 41vw;
    height: 250px;
 }

.game-card img {
    max-width: 40vw;
    height: 40vw;
}

.navbar h1 {
    font-size: 22px;
}
 
.navbar input {
  height: 18px;
  width: 140px;
}

}
