
let h1 =document.querySelector("h1");
let allbox =document.querySelector(".allbox");

function randomNumber(max){
    var num = Math.floor(Math.random() * max)
    // console.log(num);
    return num;
    
}
function getRandomColor() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    var color = '#';
    for (var i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16)
        color = color + letters[randomNumber]
        
    }
    return color;
    
  }

for (let i=1; i <= 500; i++){
    var singleBox = document.createElement("div");
    singleBox.classList.add("box");
    let h3 =document.createElement("h1");
    let randomNo = randomNumber(500);
    h3.innerText =randomNo;
    singleBox.append(h3);
    allbox.append(singleBox);
    
}
let boxs = document.querySelectorAll(".box")
function colorBox(){
     
    boxs.forEach((elm)=>{
        elm.style.backgroundColor = getRandomColor();
        
        elm.children[0].innerText=randomNumber(500);

    });
    
}

 allbox.addEventListener('mousemove', colorBox);

 