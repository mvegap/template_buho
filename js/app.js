console.log('app.js');
$('ul.nav-menu-inner').hide();
$('.oculto').hide();
$('.span').hide();

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

//se parte

$('.dropdown-menu').on('click',function(e){
  e.preventDefault();
  console.log($(e.target).attr('role-client'));
  if($(e.target).attr('role-client')=='profesor'){
    console.log('mostrar');
    $('.oculto').fadeIn('slow');
  }else{
    $('.oculto').fadeOut('slow');
  }

})

let validateNombre,validateEmail;
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const soloLetras = (e)=>{
	let code = e.which;
	if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
		return true;
	}else{
		return false;
	}
};

$('#nombres').on({
  keypress: soloLetras,
  keyup: (e)=>{
    if($(e.target).val().length > 1 ){
      validateNombre = true;
      $('.span').hide();
    }else{
      validateNombre = false;
      $('.span').show();
    }
  }
});

var input=document.getElementsByTagName('input');

function correo(event){
  var correo=input[1].value;
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    console.log('incorrecto');
    validateEmail = false;
    $('.span').show();
  }else{
    console.log('correcto');
    validateEmail = true;
    $('.span').hide();
  }
}

input[1].onblur=correo;

$('#btnSeParte').on('click', function(){
  var nombre=input[0].value;
  var correo=input[1].value;
  if(correo =="" || nombre == "" ){
    $('.span').show();
  }else{
    $('.span').hide();    
  }
})
