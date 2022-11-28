//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.5) {
            this.data.speedOfRotation += 0.1;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.5) {
            this.data.speedOfRotation -= 0.1;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  AFRAME.registerComponent('diver-rotation-reader', {
    schema: {
      speed_of_rotation: { type: 'number', default: 0 },
      speed_of_position: { type: 'number', default: 0 }
    },
    init: function () {
      window.addEventListener('keydown', (e) => {
        this.data.speed_of_rotation = this.el.getAttribute('rotation')
        this.data.speed_of_position = this.el.getAttribute("position")
        var rotation = this.data.speed_of_rotation
        var position = this.data.speed_of_position
        if (e.key === "ArrowRight") {
          if (rotation.x < 10) {
            rotation.x += 0.5
            this.el.setAttribute("rotation", rotation)
          }
        }
        if (e.key === "ArrowLeft") {
          if (rotation.x > -10) {
            rotation.x -= 0.5
            this.el.setAttribute("rotation", rotation)
          }
        }
        if (e.key === "ArrowUp") {
          if (rotation.x < 20) {
            rotation.x += 0.5
            this.el.setAttribute('rotation', rotation)
          }
          if (position.y < 25) {
            position.y += 0.2
            this.el.setAttribute("position", position)
                    }
        }
        if (e.key === "ArrowDown") {
          if (rotation.x > -10) {
            rotation.x -= 0.5
            this.el.setAttribute('rotation', rotation)
          }
          if (position.y > 15) {
            position.y -= 0.2
            this.el.setAttribute("position", position)
          }
        }
      })
    }
  })
  AFRAME.registerComponent('fish',{
    init:function(){
        for(var i=1; i<=30; i++){
            var id=`collider${i}`
            var posX=Math.floor(Math.random()*4800+ -1000)
            var posY=Math.floor(Math.random()*2+ -1)
            var posZ=Math.floor(Math.random()*3000+ -1000)
            var position={x:posX,y:posY,z:posZ}
            this.createCollider(id,position)
        }
    },
    createCollider(id,position){
        var terrain=document.querySelector('#terrain')
        var fish=document.createElement('a-entity')
        fish.setAttribute('id', id)
        fish.setAttribute('position',position)
        fish.setAttribute('gltf-model','../clown_fish/scene.gltf')
        fish.setAttribute('scale',{x:1,y:1,z:1})
        fish.setAttribute('animation-mixer',{})
        fish.setAttribute("static-body",{shape:'sphere',sphereRadius:4})
        terrain.appendChild(fish)
    }
})
AFRAME.registerComponent('coins',{
  init:function(){
      for(var i=1; i<=100; i++){
          var id=`coin${i}`
          var posX=Math.floor(Math.random()*2800+ -1000)
          var posY=Math.floor(Math.random()*2+ -1)
          var posZ=Math.floor(Math.random()*2000+ -1000)
          var position={x:posX,y:posY,z:posZ}
          this.createCollider(id,position)
      }
  },
  createCollider(id,position){
      var terrain=document.querySelector('#terrain')
      var fish=document.createElement('a-entity')
      fish.setAttribute('id', id)
      fish.setAttribute('position',position)
      fish.setAttribute('gltf-model','../stylized_coin/scene.gltf')
      fish.setAttribute('scale',{x:10,y:10,z:10})
      fish.setAttribute('animation-mixer',{})
      fish.setAttribute("static-body",{shape:'sphere',sphereRadius:10})
      terrain.appendChild(fish)
  }
})
  
  