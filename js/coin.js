//KONSTRUKTOR COIN

function Coin() {
    this.x=Math.floor(Math.random() *10); //losuje nam liczbę od 0 do 9
    this.y=Math.floor(Math.random()*10);
}

module.exports=Coin;