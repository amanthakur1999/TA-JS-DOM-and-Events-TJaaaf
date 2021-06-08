let numbers = document.querySelectorAll('.number');
numbers.forEach((elem, index) => {
    elem.addEventListener('click',(event) => {
        event.target.innerText = index + 1;

        setTimeout(() => {
            event.target.innerText = ""
        },2000)
    });
});

var secondBox = document.querySelector('.numbers');
secondBox.addEventListener('click', (event)=> {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(()=> {
        event.target.innerText = "";
    },5000)
})


