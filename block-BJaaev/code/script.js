function main(){
let inputText = document.querySelector("#text");
let root = document.querySelector("ul");

let allTodos =[];
function handleInput(event){
    if(event.keyCode === 13 && event.target.value !== ""){
    let todo ={
        name:event.target.value,
        isDone: false,
    };
    allTodos.push(todo);
    event.target.value="";
    createUI();

 }

}

function handleDelete(event){
let id = event.target.dataset.id;
allTodos.splice(id,1)
createUI();
}
function handleToggle(event){
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone

    createUI();
}

function createUI(){
    root.innerHTML ="";
    let div =document.createElement("div");
    div.classList.add("div")
    allTodos.forEach((todo, index)=>{
        let li = document.createElement("li")
        let input =document.createElement("input")
        input.type = "checkbox";
        input.addEventListener('change',handleToggle)
        input.setAttribute("data-id",index)
        input.checked = todo.isDone;
        let p = document.createElement("p")
        p.innerText = todo.name;
        p.style.marginLeft ="2rem"
        let span = document.createElement("span")
        span.innerHTML = "❌ ";
        span.style.marginLeft ="3rem"
        span.setAttribute("data-id",index)
        span.style.cursor ="pointer"

    span.addEventListener("click",handleDelete)
        
        li.append(input ,p ,span)
        root.append(li)
    
    })
    

}
 



inputText.addEventListener("keyup",handleInput);
}
main();