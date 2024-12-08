let Score= JSON.parse(localStorage.getItem('score'))||{
  Wins:0,
  Loss:0,
  Tie:0
}

updateScore();

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result='';

  if(playerMove==='Scissors'){

    if(computerMove==='Rock'){
    result='You lose.'
    }else if (computerMove==='Paper'){
    result='You win.'
    }else if (computerMove==='Scissors'){
    result='Tie.'
    }

  }else if (playerMove==='Paper'){

    if(computerMove==='Rock'){
    result='You win.'
    }else if (computerMove==='Paper'){
    result='Tie.'
    }else if (computerMove==='Scissors'){
    result='You lose.'
    }

  }else if (playerMove==='Rock'){

    if(computerMove==='Rock'){
    result='Tie.'
    }else if (computerMove==='Paper'){
    result='You lose.'
    }else if (computerMove==='Scissors'){
    result='You win.'
    }
  }

  if(result==='You win.'){
    Score.Wins +=1;
  }else if (result==='You lose.'){
    Score.Loss +=1;
  }else if (result==='Tie.'){
    Score.Tie +=1;
  }

  document.querySelector('.js-playermove')
  .innerHTML =`Your Move:<img class="img-score1" src="img/${playerMove}-emoji.png" alt="">`;

  document.querySelector('.js-computermove')
  .innerHTML =`<img class="img-score2" src="img/${computerMove}-emoji.png" alt=""> :Computer Move `;

  document.querySelector('.js-result')
  .innerHTML= `Result : ${result}`;

  localStorage.setItem('score',JSON.stringify(Score));

  updateScore();

  // alert(`Your Move: ${playerMove} \nComputer Move : ${computerMove} \n\n \nScore Board \nWINS: ${Score.Wins},Loss: ${Score.Loss},Tie: ${Score.Tie}`);

}

function updateScore(){

    document.querySelector('.js-score').innerHTML=`\nWins: ${Score.Wins},Loss: ${Score.Loss},Tie: ${Score.Tie}`;
}

function pickComputerMove(){
  const randomNumb = Math.random();
  if(randomNumb>=0 && randomNumb<1/3){
  computerMove='Rock';
  }else if (randomNumb>=1/3 && randomNumb< 2/3){
  computerMove='Paper';
  }else if (randomNumb>=2/3 && randomNumb<1){
  computerMove='Scissors';  
  }

  return computerMove;
}

