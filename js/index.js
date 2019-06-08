// Your code goes here
window.addEventListener("load", function(event){
  alert("Page is Loaded");

  window.addEventListener("resize", function(event) {
    console.log(`Window was resized to ${window.innerWidth} x ${window.innerHeight}`);
  })
})

const logoFunBus = document.querySelector(".logo-heading");
logoFunBus.addEventListener("click", function(event){
  logoFunBus.style["background-color"] = "dodgerBlue";
  window.setTimeout(function() {
    logoFunBus.style["background-color"] = "#fff";
  }, 200);
})

const navBarItems = document.querySelectorAll(".nav-link");
navBarItems.forEach(function(navItem) {
  navItem.addEventListener("mouseover", function(event) {
    navItem.style.color = "dodgerBlue";
  })
  navItem.addEventListener("mouseout", function(event) {
    navItem.style.color = "#212529";
  })
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 71) { //KeyCode 71 is letter G
    const letsGo = document.querySelector(".text-content h2")
   letsGo.textContent = "Already Went!"
  }
})

window.addEventListener('scroll', function(event) {
  logoFunBus.textContent = "Page was scrolled."
  window.setTimeout(function() {
    logoFunBus.textContent = "Fun Bus";
   }, 1500);
});

const adventureAwaits = document.querySelector(".img-content");
adventureAwaits.addEventListener("dblclick", function(event) {
  
})
