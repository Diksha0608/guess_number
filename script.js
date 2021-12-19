'use strict';

// console.log(document.querySelector('.message').textContent = 'Correct Number!')

// document.querySelector('.message').textContent = 'correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

let secretNum = Math.trunc(Math.random() *20 )+1;
let score = 20;
let highscore =0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);

    // When there is no input
    if(!guess){
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number');
    }
    // when player wins
    else if(guess === secretNum){

        // document.querySelector('.message').textContent = 'Correct Answer';
        displayMessage('Correct Answer');
        document.querySelector('.number').textContent = secretNum;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            
        }
    }else if(guess !== secretNum){
        if(score>1){
            // document.querySelector('.message').textContent
         displayMessage( guess>secretNum ? 'Too High' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
    
        }else{
            // document.querySelector('.message').textContent = 'You Lost The Game!'
            displayMessage('You Lost The Game!')
            document.querySelector('.score').textContent = 0;
        }

    }
    // when guess number is too high
    // else if(guess >secretNum){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You Lost The Game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
      
    // }
    // // when guess number is too low
    // else if(guess <secretNum){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
        
    //         document.querySelector('.message').textContent = 'You Lost The Game!';
    //         document.querySelector('.score').textContent = 0;

    //     }   
    // }
    document.querySelector('.again').addEventListener('click', function(){
        let secretNum = Math.trunc(Math.random() *20 )+1;
        let score = 20;
        document.querySelector('.message').textContent = 'Start Guessing...'
        document.querySelector('.score').value = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })
})

