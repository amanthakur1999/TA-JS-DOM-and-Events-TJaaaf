let container = document.querySelector("main")

{/* <div class="box">
        <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="img">
        <h2>Benjen Stark</h2>
        <p>Brother of Eddard Stark - First ranger of the Night's Watch</p>
        <button>know More</button>
      </div> */}
      got.houses.forEach((houes)=>{
          houes.people.forEach((peoples)=>{
              let div =document.createElement("div");
              div.classList.add("box");
              let img =document.createElement("img")
              img.src =peoples.image;
              let h2 =document.createElement("h2")
               h2.innerText = peoples.name;
               let p =document.createElement("p")
               p.innerText =peoples.description;
               let a = document.createElement("a")
               a.href = peoples.wikiLink
               a.innerText = "Know More"
               div.append(img,h2,p,a)
               container.append(div)
          })
      })