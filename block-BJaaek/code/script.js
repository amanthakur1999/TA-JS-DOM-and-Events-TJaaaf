

let click =document.querySelector(".first");
let click2 =document.querySelector(".second");

function getRandomColor() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    // console.log(letters.length);
    var color = '#';
    for (var i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16)
        color = color + letters[randomNumber]
    }
    console.log(color);

    return color;
    console.log(color);
  }
  
  function handler (){
      let randomColor = getRandomColor();
      click.style.backgroundColor = randomColor;
  };

  function mouseMove (){
      let chageColor = getRandomColor();
      click2.style.backgroundColor = chageColor;
  };

  click.addEventListener('click', handler)
  click2.addEventListener('mousemove', mouseMove)