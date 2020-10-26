console.log('antes');
home();

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');



btn.addEventListener('click', e => {
	menu.classList.toggle("menu-expanded");
	menu.classList.toggle("menu-collapsed");

	document.querySelector('body').classList.toggle('body-expanded');

});

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

function home(){

	//-------------------Crear Camiseta-----------------------
	document.getElementById('CrearCamiseta').style.display="none";
	//-------------------Crear Camiseta-----------------------
	console.log('aaa');

}
