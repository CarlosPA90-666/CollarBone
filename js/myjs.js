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

	//-------------------Modificar Camiseta-----------------------
        document.getElementById('ModificarCamiseta').style.display="none";
	//-------------------Modificar Camiseta-----------------------

	//-------------------Buscar Camiseta-----------------------
        document.getElementById('BuscarCamiseta').style.display="none";
        //-------------------Buscar Camiseta-----------------------

	//-------------------Eliminar Camiseta-----------------------
        document.getElementById('EliminarCamiseta').style.display="none";
	//-------------------Eliminar Camiseta-----------------------

}

function mostrarCrearCamisetas(){

	 document.getElementById('CrearCamiseta').style.display="block";
       	 document.getElementById('ModificarCamiseta').style.display="none";
	 document.getElementById('BuscarCamiseta').style.display="none";
	 document.getElementById('EliminarCamiseta').style.display="none";

}

function mostrarModificarCamisetas(){

         document.getElementById('CrearCamiseta').style.display="none";
         document.getElementById('ModificarCamiseta').style.display="block";
         document.getElementById('BuscarCamiseta').style.display="none";
         document.getElementById('EliminarCamiseta').style.display="none";

}

function mostrarBuscarCamisetas(){

         document.getElementById('CrearCamiseta').style.display="none";
         document.getElementById('ModificarCamiseta').style.display="none";
         document.getElementById('BuscarCamiseta').style.display="block";
         document.getElementById('EliminarCamiseta').style.display="none";

}

function mostrarEliminarCamisetas(){

         document.getElementById('CrearCamiseta').style.display="none";
         document.getElementById('ModificarCamiseta').style.display="none";
         document.getElementById('BuscarCamiseta').style.display="none";
         document.getElementById('EliminarCamiseta').style.display="Block";

}

function mostrarNada(){

         document.getElementById('CrearCamiseta').style.display="none";
         document.getElementById('ModificarCamiseta').style.display="none";
         document.getElementById('BuscarCamiseta').style.display="none";
         document.getElementById('EliminarCamiseta').style.display="none";

}


function Salir(){
	location.replace("InicioSesion.html");
}

$("#buttonSalir").click(function(){

        Salir();
	Home();

});


$("#buttonEspacios").click(function(){

	mostrarCrearCamisetas();

});

$("#buttonHabitos").click(function(){

        mostrarModificarCamisetas();

});

$("#buttonTutorias").click(function(){

        mostrarBuscarCamisetas();

});

$("#buttonHorarios").click(function(){

        mostrarEliminarCamisetas();

});

$("#buttonLogin").click(function(){

        mostrarNada();

});

