let randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guesslot = document.querySelector('.guesses');
const remain = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess = []
let numguess = 1
let playgame = true
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    });
}
function validateguess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number.");
    }
    else if(guess < 1){
        alert("Please enter Number greater than or equal 1.");
    }
    else if(guess > 100){
        alert("Please enter Number less than or equal 100.");
    }
    else{
        prevguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymsg(`Game Over Random Number was : ${randomnumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess===randomnumber){
        displaymsg("You Guess it right.")
        endgame()
    }
    else if(guess < randomnumber){
        displaymsg("Number is low.")
    }
    else if(guess > randomnumber){
        displaymsg("Number is High.")
    }
}
function displayguess(guess){
    userinput.value='';
    guesslot.innerHTML+=`${guess},`;
    numguess++;
    remain.innerHTML=`${11-numguess}`;
}

function displaymsg(message){
    loworhi.innerHTML=`${message}`
}
function endgame(guess){
    userinput.value='';
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newgame">Start A new Game</h2>';
    startover.appendChild(p);
    playgame=false;
    newgame();
}
function newgame(guess){
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function(e){
       randomnumber = parseInt(Math.random()*100+1);
       prevguess=[]
       numguess=1
       guesslot.innerHTML=''
       remain.innerHTML=`${11-numguess}`;
       userinput.removeAttribute('disabled');
       startover.removeChild(p);

       playgame=true
    });
}
