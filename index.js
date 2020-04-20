const field1 = document.getElementById('1')
const field2 = document.getElementById('2')
const field3 = document.getElementById('3')
const field4 = document.getElementById('4')
const field5 = document.getElementById('5')
const field6 = document.getElementById('6')
const field7 = document.getElementById('7')
const field8 = document.getElementById('8')
const field9 = document.getElementById('9')

const finalMessage = document.getElementById('final-message')
const messageContainer = document.getElementById('message-container')
const h2 = document.getElementById('h2')

const playAgainBtn = document.getElementById('play-button')

const fields = document.querySelectorAll('.field')

//Function

//Arrays
let gambleContent = [];
let clickedFields = [];

// Check if field was clicked - undo
function isEpmty() {

    console.log(this)
    if(this.innerHTML === ""){
        
    }else{
        h2.innerHTML = "You already clicked this field, try another"
    }
}

// Adding mark to the field

function addMark(e) {

    let cross = 'X';
    let circle = 'O';

    
    console.log(e.target.id);

    if(!clickedFields.includes(e.target.id)){
        if(gambleContent.length === 0 || gambleContent[gambleContent.length - 1] === 'O'){
            e.target.innerHTML = cross;
            gambleContent.push(e.target.innerHTML);
            clickedFields.push(e.target.id)
        }else if(gambleContent[gambleContent.length - 1] === 'X'){
            e.target.innerHTML = circle;
            gambleContent.push(e.target.innerHTML);
            clickedFields.push(e.target.id)
    
        }
    }else {
        console.log('dupa')
    }

    console.log(clickedFields)
    console.log(e.target)
        winConditionX()
        winConditionO()
}

function winMessage(message) {

    finalMessage.innerText = message;
    messageContainer.style.display = 'flex';
}


function winConditionX() {

    let message = finalMessage.innerText = `Congratulations! Player ${gambleContent[gambleContent.length - 1]} won!`;
    if(field1.innerHTML === 'X' && field5.innerHTML === 'X' && field9.innerHTML === 'X'){
       winMessage(message)
    }else if(field1.innerHTML === 'X' && field2.innerHTML === 'X' && field3.innerHTML === 'X'){
        winMessage(message)
    }else if(field1.innerHTML === 'X' && field4.innerHTML === 'X' && field7.innerHTML === 'X'){
        winMessage(message)
    }else if(field4.innerHTML === 'X' && field5.innerHTML === 'X' && field6.innerHTML === 'X'){
        winMessage(message)
    }else if(field7.innerHTML === 'X' && field8.innerHTML === 'X' && field9.innerHTML === 'X'){
        winMessage(message)
    }else if(field2.innerHTML === 'X' && field5.innerHTML === 'X' && field8.innerHTML === 'X'){
        winMessage(message)
    }else if(field3.innerHTML === 'X' && field6.innerHTML === 'X' && field9.innerHTML === 'X'){
        winMessage(message)
    }else if(field1.innerHTML === 'X' && field5.innerHTML === 'X' && field9.innerHTML === 'X'){
        winMessage(message)
    }else if(gambleContent.length === 9){
        winMessage(finalMessage.innerText = `Draw!`)
    }
}

function winConditionO() {

    let message = finalMessage.innerText = `Congratulations! Player ${gambleContent[gambleContent.length - 1]} won!`;

    if(field1.innerHTML === 'O' && field5.innerHTML === 'O' && field9.innerHTML === 'O'){
        winMessage(message)
    }else if(field1.innerHTML === 'O' && field2.innerHTML === 'O' && field3.innerHTML === 'O'){
        winMessage(message)
    }else if(field1.innerHTML === 'O' && field4.innerHTML === 'O' && field7.innerHTML === 'O'){
        winMessage(message)
    }else if(field4.innerHTML === 'O' && field5.innerHTML === 'O' && field6.innerHTML === 'O'){
        winMessage(message)
    }else if(field7.innerHTML === 'O' && field8.innerHTML === 'O' && field9.innerHTML === 'O'){
        winMessage(message)
    }else if(field2.innerHTML === 'O' && field5.innerHTML === 'O' && field8.innerHTML === 'O'){
        winMessage(message)
    }else if(field3.innerHTML === 'O' && field6.innerHTML === 'O' && field9.innerHTML === 'O'){
        winMessage(message)
    }else if(field1.innerHTML === 'O' && field5.innerHTML === 'O' && field9.innerHTML === 'O'){
        winMessage(message)
    }else if(gambleContent.length === 9){
        winMessage(finalMessage.innerText = `Draw!`)
    }
}

//Events
fields.forEach(field => field.addEventListener('click',  e => addMark(e)))

playAgainBtn.addEventListener('click', ()=>{

    //Empty arrays
    gambleContent.splice(0);
    fields.forEach(el => el.innerHTML = '')

    messageContainer.style.display = 'none';
})
