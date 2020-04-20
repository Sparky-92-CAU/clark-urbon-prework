const game = {
    guesses: 10,
    wins: 0,
    lettersUsed: ['a','b','c','d'],
    word: 'guess'

    setBoard(){
        const guesses = document.querySelector('#guesses');
        const used = document.querySelector('#used');
        const wins = document.querySelector('#wins');

        guesses.innerText = `Guesses Left: ${this.guesses}`;
       used.innerText = `Letters Used: ${this.lettersUsed}`;
       wins.innerText = `Number of Wins: ${this.wins}`;
    }
    
  };

  game.setBoard();

