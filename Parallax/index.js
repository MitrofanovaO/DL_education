var parallax= document.querySelector(".parallax");

window.addEventListener("scroll", function() {

   var scrolled= window.pageYOffset,
       limit= parallax.offsetTop+ parallax.offsetHeight;
                
  if(scrolled > parallax.offsetTop && scrolled <= limit) {
    parallax.style.backgroundPositionY=  (scrolled - parallax.offsetTop) /1.5+ "px";
 
    } else {
     parallax.style.backgroundPositionY=  "0";
    }
});