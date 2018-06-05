
    var Furry=require("./furry.js")
    var Coin=require("./coin.js")

    function Game() {
        this.board = document.querySelectorAll("#board div"); //wyszukujemy nasze divy i przypisujemy do this.board(tablicy)
        this.furry = new Furry(); //wywołujemy konstruktora Furry
        this.coin = new Coin();  //wywołujemy konstruktora Coin
        this.score = 0;          //definiuję zmienną score=0
        this.index = function (x, y) {
            return x + (y * 10);        //funkcja, która przekształca współrzędne x i y na pozycję w tablicy
        };

        var self = this;
        this.showFurry = function () {
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
            //1.(furry.x, furry.y)-pobiera wartości 0 i 0;
            //2.[this.index(furry.x, furry.y)]- wykonuje się metoda this.index czyli 0+(0*10)=0 - wskazuje nam to na pozycję furrego
        };

        this.hideVisibleFurry=function () {
            var removeFurry=document.querySelector(".furry")
            if(removeFurry!==null){
                removeFurry.classList.remove('furry')
            }
        };

        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };


        this.moveFurry = function () {



            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;
            } else if
            (this.furry.direction === 'left') {
                this.furry.x = this.furry.x - 1;
            } else if
            (this.furry.direction === 'up') {
                this.furry.y = this.furry.y + 1
            } else if
            (this.furry.direction === 'down') {
                this.furry.y = this.furry.y -1
            }


            this.gameOver()


            this.checkCoinCollision();
            this.showFurry()
        };

        this.turnFurry=function (event) {
            switch (event.which){
                case 37:
                    self.furry.direction='left';
                    break;
                case 38:
                    self.furry.direction='down';
                    break;
                case 39:
                    self.furry.direction='right';
                    break;
                case 40:
                    self.furry.direction='up';
                    break;
            }
        };

        this.checkCoinCollision=function () {
            if (this.furry.x===this.coin.x && this.furry.y===this.coin.y){
                this.score+=1;
                console.log(score)
                var newScore=document.querySelector('strong');
                console.log(newScore)
                newScore.innerText=this.score
                var removeCoin=document.querySelector('.coin');
                removeCoin.classList.remove('coin');
                this.coin= new Coin();
                this.showCoin()
            }
        };

        this.gameOver=function () {
            if (this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){
                console.log('GAME OVER');
                clearInterval(this.IdSetInterval);
                this.hideVisibleFurry();
                // var strong = document.querySelector("strong");
                // console.log(strong);
                // strong.innerText = "game over";
                var gameEnd=document.querySelector('#over')
                gameEnd.style.display='block'
                var yourScore=document.querySelector('.yourScore')
                console.log(yourScore)
                yourScore.innerText=this.score
            }
        };

        this.startGame = function () {
            this.IdSetInterval = setInterval(function () {
                // console.log("hura z setIntervala");
                self.moveFurry();
            }, 250);
        }
    };

module.exports=Game;