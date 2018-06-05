

var Game=require("./game.js")

var game= new Game() //wywołujemy nasze metody, żeby pokazał się furry i coin
game.showCoin();
game.showFurry();
game.startGame();
document.addEventListener('keydown', function (event) {
    game.turnFurry(event);
})