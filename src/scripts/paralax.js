const paralax = document.querySelector('.paralax__layer');
const paralaxLayer = paralax.children;

function moveLayersDepensOnScroll(scroll , layers , speed) {
    Array.from(layers).forEach(layer =>{
        const divider = layer.dataset.speed;
        const strafe = scroll * divider/speed;
        layer.style.transform = `translateY(-${strafe}%)` ;
    })
} 

window.addEventListener(scroll, e=>{
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll , paralaxLayer , 14);
  })


//   window.onscroll = function() {
//       var wScroll = window.pageYOffset;

//       console.log(wScroll);
//   }