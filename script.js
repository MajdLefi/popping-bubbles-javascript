

let button = document.getElementById("start");

let scoreGame = document.getElementById("score");

let game =  document.getElementById("game");



let bubbles = [];
let timer = parseInt(prompt('difficulté 1:difficile 2 ,3'))
console.log('one',timer);
while(timer != 1 && timer != 2 && timer != 3){
timer = parseInt(prompt('difficulté 1:difficile 2 ,3'))
console.log('two',timer);
}
if(timer == 1)
timer = 2
if(timer == 2)
timer = 7
if(timer == 3)
timer = 12

bubblesCreated = 0;
var score = 0

  let intervale = null;
  let count = 0;
  function createBubble()
     {
 
        button.style.display = "none";

        createB()

        intervale = setInterval(function(){
        console.log('test 1')
        let currentBubble = document.querySelector('.bubble');
        console.log('bubble',currentBubble)
        if(currentBubble != null)
        popBubble(currentBubble)
  
        count++;
        if(count == 3)
        {
           button.style.display = "block";
           
           clearInterval(intervale)
           
          //  popBubble(currentBubble)

          
            
           scoreGame.innerHTML += "<h1>Game Over</h1>";
           count =0;
        }
        else
        {
          createB()
        }
        }, timer*100);
                  
     }

  button.addEventListener('click', createBubble)

  
  function popBubble(elem){
      console.log(elem)
      
      elem.classList.remove('bubble') 
      
      
      elem.style.color = elem.style.backgroundColor

      elem.style.backgroundColor = "";
      elem.innerHTML="POP!"
    
    console.log(elem.style.top)
    setTimeout(function(){
      elem.remove()

    },1000)
   
   }

            function createB()
            {
               let bubble = document.createElement("div");
              bubble.classList.add("bubble");
              bubble.classList.add("bubble_section");
              game.appendChild(bubble);

              let colors = ["blue", "royalblue", "royalgreen", "yellow", "green"];
              let index = Math.floor(Math.random() * colors.length);
                    
              bubble.style.backgroundColor = colors[index];
            
                  
              let left = Math.floor(Math.random() * 255);
              let top = Math.floor(Math.random() * 455);
              bubble.style.left = left + "px";
              bubble.style.top = top + "px";

              bubblesCreated++;
              updateScore()

              
            }


    function updateScore()
      {
      
       let text = "Bubbles Popped: " + score;
        text += "<br>Total Bubbles: " + bubblesCreated;
        scoreGame.innerHTML = text;

      }

    function gameOver()
    {
        button.style.display = "block"
       
        updateScore();
          if (score < bubblesCreated)
          {
            scoreGame.innerHTML += "<h1>Game Over</h1>";
          }
    }
  
  
    document.addEventListener('click', function(event){

      if(event.target.classList.contains ('bubble'))
         {
          count =0;
          popBubble(event.target);
          score++;
          updateScore()
         }
     
       })


         
       

     