//global variables to sync java script to html elements/classes

let bgtxt = document.getElementById('bigtext');
let nxtbtn = document.getElementById('next');
let smtxt = document.getElementById('smalltext');
let resetBtn = document.getElementById('goreset');


//setting click to the goreset class and to run it's function
resetBtn.addEventListener('click', resetState);

//setting click to the next class in html and to run it's function
nxtbtn.addEventListener('click', changeState);

var state = 0;

var selectedSymbol = String.fromCharCode(Math.floor(Math.random() * 10) + 36);

window.onhashchange = function() {       
    if (location.hash.length > 0) {        
        state = parseInt(location.hash.replace('#',''),10);     
    } else {
        state = 0;
    }
    renderState();
}

function resetState() {
    state = 0;
    location.hash = state;
    renderState();
}

function changeState() {
    state++;
    location.hash = state;
    renderState();
}

function renderState() {
    switch (state) {
        case 0:
        

         // bigtext 'Pick a number from 01-99'
         bgtxt.innerHTML = 'I can read your mind';
         // next button needs to reveal
         resetBtn.style.visibility = 'hidden';
         // small text 'when you have your number click next'
         smtxt.innerHTML = 'when you have your number click next';

         // go needs to change to reset icon and needs to take you back to state 1
         nxtbtn.innerHTML = 'Go';
         break;

        case 1:


            // bigtext 'Pick a number from 01-99'
            bgtxt.innerHTML = 'Pick a number 01-99';
            // next button needs to reveal
            nxtbtn.style.visibility = 'visible';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'when you have your number click next';

            // go needs to change to reset icon and needs to take you back to state 1
            resetBtn.style.visibility = 'visible';
            resetBtn.innerHTML = 'Reset';
            nxtbtn.innerHTML = 'Next';
            break;


        case 2:
           
            bgtxt.innerHTML = 'Add both digits together to get a new number';
            
            nxtbtn.style.visibility = 'visible';
           
            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5, Ex: 7 is 0 + 7 = 7, click next to proceed';


            // go needs to change to reset icon and needs to take you back to state 1
            break;

        case 3:
            
            bgtxt.innerHTML = 'Subtract your new  number from the  original number ';
         
            nxtbtn.style.visibility = 'visible';
            
            smtxt.innerHTML = 'Ex: 14 - 5 = 9, click next to proceed';


            // go needs to change to reset icon and needs to take you back to state 1
            break;

        case 4:
           
            bgtxt.innerHTML = ' ';

            for (var i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                    
                    bgtxt.innerHTML += i + ' = ' + selectedSymbol + '<br>';
                }
                else  {
                    var r = String.fromCharCode(Math.floor(Math.random() * 10) + 36);
                    bgtxt.innerHTML += i + ' = ' + r + '<br>';
                }
                

            }

            // next button needs to say REVEAL
            nxtbtn.style.visibility = 'visible';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5, click next to proceed';


            // go needs to change to reset icon and needs to take you back to state 1
            break;

        case 5:
            // bigtext 'Pick a number from 01-99'
            bgtxt.innerHTML = selectedSymbol;
            // next button needs to reveal
            nxtbtn.style.visibility = 'hidden';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'Your symbol is: <br> ' + selectedSymbol;


            // go needs to change to reset icon and needs to take you back to state 1
            break;

    }


}

renderState();