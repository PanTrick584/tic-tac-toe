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
        winConditionX()
        winConditionO()
        

}


function winConditionX() {

    if(field1.innerHTML === 'X' && field5.innerHTML === 'X' && field9.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'X' && field2.innerHTML === 'X' && field3.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'X' && field4.innerHTML === 'X' && field7.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field4.innerHTML === 'X' && field5.innerHTML === 'X' && field6.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field7.innerHTML === 'X' && field8.innerHTML === 'X' && field9.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field2.innerHTML === 'X' && field5.innerHTML === 'X' && field8.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field3.innerHTML === 'X' && field6.innerHTML === 'X' && field9.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'X' && field5.innerHTML === 'X' && field9.innerHTML === 'X'){
        console.log('WYGRAŁEŚ!!')
    }
    // else if(fields.every(el => el.innerHTML !== '')){
    //     console.log('REMIS')
    // }
}

function winConditionO() {

    if(field1.innerHTML === 'O' && field5.innerHTML === 'O' && field9.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'O' && field2.innerHTML === 'O' && field3.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'O' && field4.innerHTML === 'O' && field7.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field4.innerHTML === 'O' && field5.innerHTML === 'O' && field6.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field7.innerHTML === 'O' && field8.innerHTML === 'O' && field9.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field2.innerHTML === 'O' && field5.innerHTML === 'O' && field8.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field3.innerHTML === 'O' && field6.innerHTML === 'O' && field9.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }else if(field1.innerHTML === 'O' && field5.innerHTML === 'O' && field9.innerHTML === 'O'){
        console.log('WYGRAŁEŚ!!')
    }
    // else if(Array.from(fields.every(el => el.innerHTML !== ''))){
    //     console.log('REMIS')
    // }
}

//Events
fields.forEach(field => field.addEventListener('click', addMark))


