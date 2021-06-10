let display  = document.getElementById('display');
let allNumbers = document.querySelectorAll('.number');

let initialValue = 0;

function displayInput(event){
    if(event.target.classList.contains('equal')){
        display.innerHTML = eval(display.innerText)
        return display.innerHTML
    }
    else if(event.target.classList.contains('clear')){
        display.innerHTML = initialValue
        return display.innerHTML
    }
    else if(display.innerText == initialValue){
        display.innerHTML = event.target.innerText
        return display.innerHTML
    }
    else{
        display.innerText += event.target.innerText
    }
}

allNumbers.forEach((elem) => {
    elem.addEventListener('click', displayInput)
})