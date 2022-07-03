class Casino {
    // Write code here
    constructor(name, FakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.FakeCoin = FakeCoin;
    }
    updateCoin(coin){
        this.FakeCoin = coin;
    }
    playGame(betAmount) {
        this.timesPlayed += 1;
        console.log("test coin", this.FakeCoin);
        if(Math.random() <= 0.5 || this.FakeCoin) {  //Math.random by default is for numbers between 0 and 1
            console.log(`${this.name} wins`);
            return `${this.name} wins`;
        } else {
            const winAmount = betAmount * this.timesPlayed;
            console.log(`you won ${winAmount}!`)
            return `you won ${winAmount}!`;
        }
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino", true);
console.log(myCasino);
myCasino.updateCoin(false);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.updateCoin(true);
myCasino.playGame(25);
myCasino.playGame(35);
console.log(myCasino);


// BONUS TESTS

// const myBonusCasino = new Casino("HackerU Bonus Casino", true);
// console.log(myBonusCasino);
// myBonusCasino.playGame(5);
// myBonusCasino.playGame(15);
// myBonusCasino.playGame(25);
// myBonusCasino.playGame(35);
// console.log(myBonusCasino);

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/


// class Casino {
//     // Write code here
//     constructor(name, fakeToken) {
//       this.name = name;
//       this.fakeToken = fakeToken;
//       this.timesPlayed = 0;
//     }
//     updateToken(token) {
//       this.fakeToken = token;
//     }
//     playGame(betAmount) {
//       this.timesPlayed += 1;
//       console.log("test token", this.fakeToken);
//       if (Math.random() <= 0.5 || this.fakeToken) {
//         console.log(`${this.name} wins`);
//         return `${this.name} wins`;
//       } else {
//         const winAmount = betAmount * this.timesPlayed;
//         console.log(`you won ${winAmount}!`);
//         return `you won ${winAmount}!`;
//       }
//     }
//   }
  
//   // TESTS
//   const myCasino = new Casino("HackerU Casino", true);
//   console.log(myCasino);
//   myCasino.updateToken(false);
//   myCasino.playGame(5);
//   myCasino.playGame(15);
//   myCasino.updateToken(true);
//   myCasino.playGame(25);
//   myCasino.playGame(35);
//   console.log(myCasino);