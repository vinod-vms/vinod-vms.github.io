/*
window.onscroll = function() {
    stickyNavFunction()
};
*/
var x = window.matchMedia("(max-width: 768px)");
var y = window.matchMedia("(max-width: 350px)");
var z = window.matchMedia("(max-width: 250px)");
var logo = document.getElementById("logo");
//var main_section = document.getElementById("main_section");
    sticky = sticky_point.offsetTop + 100 ;
    window.addEventListener("load", navFunction);
window.addEventListener("scroll", stickyNavFunction);



function navFunction(){
    if (z.matches) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "26px";
        logo.style.width = "102px";
    }  else if (y.matches) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "34px";
        logo.style.width = "128px";
    } else if (x.matches)  {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "44px";
        logo.style.width = "171px";
    } else
    {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "66px";
        logo.style.width = "255px";

    }
   
}

function stickyNavFunction() {

    if (z.matches) {
        if (window.pageYOffset <= sticky) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "26px";
        logo.style.width = "102px";
    } else if (window.pageYOffset >= sticky) {
        logo.style.backgroundImage = "url('./logo_green2.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "26px";
        logo.style.width = "102px"; 
    }
    }     
    else if (y.matches) {
   if (window.pageYOffset <= sticky) {
    logo.style.backgroundImage = "url('./logo_green.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.height = "34px";
    logo.style.width = "128px";

   } else if (window.pageYOffset >= sticky) {
    logo.style.backgroundImage = "url('./logo_green2.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.height = "34px";
    logo.style.width = "128px";
   }
  }
else if (x.matches) {
    if ( window.pageYOffset >= sticky) {
        logo.style.backgroundImage = "url('./logo_green2.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "44px";
        logo.style.width = "171px";
    
       } else if (window.pageYOffset <= sticky) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "44px";
        logo.style.width = "171px";
       }
}
   else{
    if ( window.pageYOffset >= sticky) {
        logo.style.backgroundImage = "url('./logo_green2.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "66px";
        logo.style.width = "255px";
    
       } else if (( window.pageYOffset <= sticky)) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "66px";
        logo.style.width = "255px";
       }
   }
  // window.pageYOffset >= sticky ? logo.classList.add("sticky_logo") : logo.classList.remove("sticky_logo"); 

}

