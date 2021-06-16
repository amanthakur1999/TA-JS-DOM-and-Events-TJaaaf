function main() {
    let inputText = document.querySelector("#text");
    let root = document.querySelector("ul");
    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let clear = document.querySelector(".clear");
  
    let activeButton = "all";
    let allTodos = localStorage.getItem("allTodos") ? JSON.parse(localStorage.getItem(allTodos)):[];
    function handleInput(event) {
      if (event.keyCode === 13 && event.target.value !== "") {
        let todo = {
          name: event.target.value,
          isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI();
        localStorage.setItem("alltodos",JSON.stringify(allTodos));
      }
    }
  
    function handleDelete(event) {
      let id = event.target.dataset.id;
      allTodos.splice(id, 1);
      createUI();
      localStorage.setItem("alltodos",JSON.stringify(allTodos));
    }
    function handleToggle(event) {
      let id = event.target.dataset.id;
      allTodos[id].isDone = !allTodos[id].isDone;
  
      createUI();
      localStorage.setItem("alltodos",JSON.stringify(allTodos));
      
      
    }
  
    function createUI() {
      root.innerHTML = "";
      let div = document.createElement("div");
      div.classList.add("div");
      allTodos.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
      
        input.addEventListener("change", handleToggle);
        input.setAttribute("data-id", index);
        input.checked = todo.isDone;
        
        let p = document.createElement("p");
        p.innerText = todo.name;
        p.style.marginLeft = "2rem";
  
        if(input.checked === true){
          p.style.textDecoration = "line-through"
        }
        let span = document.createElement("span");
        span.innerHTML = "❌ ";
        span.style.marginLeft = "3rem";
        span.setAttribute("data-id", index);
        span.style.cursor = "pointer";
  
        span.addEventListener("click", handleDelete);
  
        li.append(input, p, span);
        root.append(li);

        localStorage.setItem("alltodos",JSON.stringify(allTodos));
      });
    }
  
    createUI();
    all.classList.add("selected");
    clear.addEventListener("click", () => {
      allTodos = allTodos.filter((todo) => !todo.isDone);
      createUI();
      localStorage.setItem("alltodos",JSON.stringify(allTodos));
    });
  
  
  
    inputText.addEventListener("keyup", handleInput);
  }
  main();