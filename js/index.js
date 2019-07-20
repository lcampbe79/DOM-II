// Your code goes here

//Load
window.addEventListener("load", function(event){
  console.log("Page is Loaded");

  window.addEventListener("resize", function(event) {
    console.log(`Window was resized to ${window.innerWidth} x ${window.innerHeight}`);
  })
})

//Click
const logoFunBus = document.querySelector(".logo-heading");
logoFunBus.addEventListener("click", function(event){
  logoFunBus.style["background-color"] = "dodgerBlue";
  window.setTimeout(function() {
    logoFunBus.style["background-color"] = "#fff";
  }, 200);
})

//Mouseover
const navBarItems = document.querySelectorAll(".nav a");
navBarItems.forEach(function(navItem) {
  navItem.addEventListener("mouseover", function(event) {
    navItem.style.color = "dodgerBlue";
  })
  //Mouseout
  navItem.addEventListener("mouseout", function(event) {
    navItem.style.color = "#212529";
  })
  //Prevent Default
  navItem.addEventListener("click", function(event) {
    event.preventDefault();
  })
})

//Keydown
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 71) { //KeyCode 71 is letter G
    const letsGo = document.querySelector(".text-content h2")
   letsGo.textContent = "Already Went!"

   window.setTimeout(function() {
    letsGo.textContent = "Let's Go!";
  }, 1500);
  }
})

//Scroll
window.addEventListener('scroll', function(event) {
  logoFunBus.textContent = "Page was scrolled."
  window.setTimeout(function() {
    logoFunBus.textContent = "Fun Bus";
   }, 1500);
});

//DoubleClick


const adventureAwaits = document.querySelector(".img-content img");

adventureAwaits.addEventListener('dblclick', function(event) {
  adventureAwaits.style.display = "none";
})





// adventureAwaits.addEventListener("dblclick", function(event) {
//   adventureAwaits.style.display = "none";
// })

// class HiddenImg {
//   constructor(img)
//   this
// }

// const adventureAwaitsImg = document.querySelector(".img-content");

// adventureAwaitsImg.forEach((hiddenImg) => {
//   return new HiddenImg(img);
// })

