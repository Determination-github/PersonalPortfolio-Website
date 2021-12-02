$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  })
});

$('.menu-btn').click(function(){
  $('.navbar .menubar').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

//typing animation
var typed = new Typed(".typing1", {
  strings: ["HTML", "CSS", "Java Script", "JAVA", "Oracle"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing2", {
  strings: ["HTML", "CSS", "Java Script", "JAVA", "Oracle"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});



// const navbar = document.querySelector(".navbar .menubar a ")
// const logo = document.querySelector(".logo a")
// const home = document.querySelector(".home")
// // const about = document.querySelector(".about")
// // const skills = document.querySelector(".skills")
// // const mysite = document.querySelector(".my-site")
// // const contact = document.querySelector(".contact")

//   navbar.addEventListener("click", click);
//   logo.addEventListener("click", click);
//   home.addEventListener("click", click);

//   function click(e) {
//     home.style.display = "none";
//     about.style.display = "flex";
//   }


// const navbar = document.querySelector(".navbar");

// const home = document.getElementById('homeID');
// const homeDisplay = document.querySelector(".home")

// const about = document.getElementById('aboutID');
// const aboutDisplay = document.querySelector(".about")



// about.addEventListener("click", click);
// function click(e) {
//   homeDisplay.style.display = "none";
//   aboutDisplay.style.display = "flex";
//   changeNav();
// // }

// function changeNav() {
//   navbar.style.position = "relative";
//   navbar.style.background = "rgb(25, 8, 53)";
// }

// const home = document.getElementById('homeID');
// const about = document.getElementById('aboutID');
// if(home.addEventListener){
//     home.addEventListener('click', function(event){
//       homeDisplay.style.display = "flex";
//       aboutDisplay.style.display = "none";
//       changeNav();
//     }); 
// } else if(about.addEventListener){
//     about.addEventListener('click', function(event){
//       homeDisplay.style.display = "none";
//       aboutDisplay.style.display = "flex";
//       changeNav();
//   }); 
// }