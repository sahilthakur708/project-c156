AFRAME.registerComponent('gameplay', {
    schema: {
        elementId: { type: 'string', default: '#coin1' }
    },
    update: function () {
        this.isCollided(this.data.elementId)
    },
    
  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },
  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        this.gameOver();        
      }
    }
  },
    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener('collide', (e) => {
            if (elementId.includes('#coin')) {
                element.setAttribute("visible",false)
                this.updateScore()
            
            }
            else{
                this.gameOver()
            }
        })
    },
    updateScore:function(){
        var scoreEl=document.querySelector("#score")
        var score=scoreEl.getAttribute("text").value
         score=parseInt(score)
         score+=50
         scoreEl.setAttribute('text',{value:score})
      },
 
      gameOver:function(){
       var plane=document.querySelector('#diver')
       var gameOver=document.querySelector("#game_over_text")
       gameOver.setAttribute("visible",true)
       plane.setAttribute('dynamic-body',{mass:1})
      }
    });

