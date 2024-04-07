const diceImages = [
    'dice1.png', 
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
  ];
  let score1 = 0;
  let score2 = 0;
  const winningScore = 20;
  document.getElementById('rollButton').addEventListener('click', function() {
      let dice1Value = rollDice();
      let dice2Value = rollDice();
  
      updateDiceImage('dice1', dice1Value);
      updateDiceImage('dice2', dice2Value);
  
      updateScores(dice1Value, dice2Value);
      checkForWinner();
  });
  
  function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
  }
  
  function updateDiceImage(diceId, value) {
      let diceElement = document.getElementById(diceId);
      diceElement.style.backgroundImage = 'url(' + diceImages[value - 1] + ')';
  }
  
  function updateScores(dice1Value, dice2Value) {
      score1 += dice1Value;
      score2 += dice2Value;
      document.getElementById('score1').textContent = 'Player 1 Score: ' + score1;
      document.getElementById('score2').textContent = 'Player 2 Score: ' + score2;
  }
  
  function checkForWinner() {
      if (score1 >= winningScore) {
          announceWinner(1);
      } else if (score2 >= winningScore) {
          announceWinner(2);
      }
  }
  
  function announceWinner(playerNumber) {
      document.getElementById('winner').textContent = 'Player ' + playerNumber + ' Wins!';
      document.getElementById('rollButton').disabled = true;
  }
  