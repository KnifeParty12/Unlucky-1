var scores, roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer ).textContent = dice;
// document.querySelector('#current-' + activePlayer ).innerHTML = '<em>' + dice +  '</em>';

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', ()=>{
    //Random Number
    dice = 1 + Math.floor(Math.random()*6);

    //Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'Photos/dice-' + dice + '.png';

    // Update the roundscore IF the number rolled is not 1
    if(dice !== 1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        //Next PLayer
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',()=>{
        //Add Current Score to GlobalScore
            scores[activePlayer] += roundScore;

        // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else{
            //Next Player
            nextPlayer();
        }
});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}
