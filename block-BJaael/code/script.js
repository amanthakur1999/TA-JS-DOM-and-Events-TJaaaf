
let h1 =document.querySelector("h1");
let allbox =document.querySelector(".allbox");
// let singleBox = document.querySelector('.box')


function randomNumber(){
    var num = Math.floor(Math.random() * 10)
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
    singleBox.innerText =randomNumber();
    singleBox.style.backgroundColor = colorBox();
    allbox.append(singleBox);
    
}
function colorBox(){
     
    // let boxsColor = getRandomColor();
    // console.log(boxsColor);

    // return boxsColor;
    // let boxs = document.querySelectorAll(".box")
    // boxs.forEach((elm)=>{
    //     var boxsColor = getRandomColor();
        
    //    boxsColor = boxsColor.elm;
     //    console.log(boxsColor);
    //    return boxsColor;

    // })
    
}
 
 
 singleBox.addEventListener('mousemove', colorBox)
 singleBox.addEventListener('mousemove', randomNumber)
 