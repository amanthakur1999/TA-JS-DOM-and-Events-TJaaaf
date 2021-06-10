let form = document.querySelector("form");
let output = document.querySelector(".output")

let userInfo = {};

function handlersubmit(event){
event.preventDefault();
console.log(event);

userInfo.name = form.elements.text.value;
userInfo.email =form.elements.email.value;
userInfo.movie = form.elements.gender.value;
userInfo.color = form.elements.color.value;
userInfo.rating = form.elements.range.value;
userInfo.drone = form.elements.drone.value;
userInfo.terms = form.elements.terms.value
console.log(userInfo);
displayForm();

}
form.addEventListener("submit", handlersubmit);

function displayForm(){
    let div = document.createElement("div")
    div.classList.add('main-div')

    let cross = document.createElement('i')
    cross.innerHTML = `<i class="fas fa-times"></i>`
    cross.classList.add('cross')
    cross.addEventListener('click',()=> {
        div.style.display = 'none'
    })

    let name = document.createElement("h2")
    name.classList.add('name')
    name.innerHTML = `Your Name: ${userInfo.name}`

    let email = document.createElement("h2")
    email.classList.add('email')
    email.innerHTML = `Your Email: ${userInfo.email}`

    let movie = document.createElement("h2")
    movie.classList.add('movie')
    movie.innerHTML = `You LOve : ${userInfo.movie}`

    let color = document.createElement("h2")
    color.classList.add('color')
    color.innerHTML = `color: ${userInfo.color}`

    let rating = document.createElement("h2")
    rating.classList.add('rating')
    rating.innerHTML = `Rating: ${userInfo.rating}`

    let drone = document.createElement("h2")
    drone.classList.add('drone')
    drone.innerHTML = `Book genre: ${userInfo.drone}`
    

    let terms = document.createElement("h2")
    terms.classList.add('terms')
    terms.innerHTML = `Terms & Conditions : ${userInfo.terms}`


output.append(div)
div.append(name,cross,email,movie,color,rating,drone,terms)

}