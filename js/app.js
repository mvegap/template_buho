console.log('app.js');
$('ul.nav-menu-inner').hide();

function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  var boton=document.getElementsByClassName('nav-menu-inner')[0];
  if(scroll>=160){
    boton.style.display="block";
  }else{
    boton.style.display="none";
  }
}

window.addEventListener('scroll',moveScroll);

$('.item-buho a').on("click", function(e) {
   e.preventDefault();
    // console.log("desplaza");
    // console.log(e.target);
    var target ='#'+ $(this).attr("role-link");
    console.log(target);
    $('html,body').animate({scrollTop: $(target).offset().top},1200);
    return false;
   });
