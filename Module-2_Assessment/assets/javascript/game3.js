
//game object
const game = {
    guesses: 10,
    wins: 0,
    lettersUsed: [],
    word: '',
    wordBank: ['apple','banana','grape','orange','kjahskfjhaskdjfhak'],
    
    resetBoard(){

       //sets word to random word from wordbank
       this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

       //build placeholder string
       let wordPlaceholder = '';
       for(let i =0;i<this.word.length;i++){
           wordPlaceholder+='_ ';
       };
       // set placeholder
       wordDisplayed.innerText = wordPlaceholder;
      
       console.log(this.word);
    },

    updateBoard(event){
        
        const key = event.key;
         if (game.word.includes(key)) {
            
          
            console.log(`${key}`);
            }
         else {
            
            console.log('not found');
    
         }
      }

  };

//Get html element references 
  const guesses = document.querySelector('#guesses');
  const used = document.querySelector('#used');
  const wins = document.querySelector('#wins');
  const wordDisplayed = document.querySelector('#word');


//set html elements
guesses.innerText = `Guesses Left: ${game.guesses}`;
used.innerText = `Letters Used: ${game.lettersUsed}`;
wins.innerText = `Number of Wins: ${game.wins}`;




  game.resetBoard();

document.addEventListener('keyup', game.updateBoard);
 
  

