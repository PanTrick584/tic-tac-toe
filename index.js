const field1 = document.getElementById('1')
const field2 = document.getElementById('2')
const field3 = document.getElementById('3')
const field4 = document.getElementById('4')
const field5 = document.getElementById('5')
const field6 = document.getElementById('6')
const field7 = document.getElementById('7')
const field8 = document.getElementById('8')
const field9 = document.getElementById('9')

const fields = document.querySelectorAll('.field')

//Function

//Arrays
let gambleContent = [];
let gambleContentID = [];


// Adding mark to the field
function addMark() {

    let cross = 'X';
    let circle = 'O'

        if(gambleContent.length === 0 || gambleContent[gambleContent.length - 1] === 'O'){
            this.innerHTML = cross;
            gambleContent.push(this.innerHTML);
            gambleContentID.push(this.id)
        }else if (gambleContent[gambleContent.length - 1] === 'X'){
            this.innerHTML = circle;
            gambleContent.push(this.innerHTML);
            gambleContentID.push(this.id)
        }
        console.log(gambleContent)
        console.log(gambleContent.length)
        console.log(gambleContentID)
        winCondition(gambleContentID)
        

}


function winCondition(gambleContentID) {

    console.log(gambleContentID)
    if(field1.innerHTML === 'X' && field5.innerHTML === 'X' && field9.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'X' && field2.innerHTML === 'X' && field3.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }
}
//Events
fields.forEach(field => field.addEventListener('click', addMark))

winCondition(gambleContentID)


