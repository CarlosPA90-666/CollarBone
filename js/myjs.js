home()

const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#sidemenu')

btn.addEventListener('click', e => {
  menu.classList.toggle('menu-expanded')
  menu.classList.toggle('menu-collapsed')

  document.querySelector('body').classList.toggle('body-expanded')
})

function main () {
  $('.menu_bar').click(function () {
    // $('nav').toggle();

    if (contador == 1) {
      $('nav').animate({
        left: '0'
      })
      contador = 0
    } else {
      contador = 1
      $('nav').animate({
        left: '-100%'
      })
    }
  })
};
// Inicialización de la  aplicación web

function home () {
  // -------------------Crear Camiseta-----------------------
  document.getElementById('CrearCamiseta').style.display = 'none'
  // -------------------Crear Camiseta-----------------------

  // -------------------Modificar Camiseta-----------------------
  document.getElementById('ModificarCamiseta').style.display = 'none'
  // -------------------Modificar Camiseta-----------------------

  // -------------------Buscar Camiseta-----------------------
  document.getElementById('BuscarCamiseta').style.display = 'none'
  // -------------------Buscar Camiseta-----------------------

  // -------------------Eliminar Camiseta-----------------------
  document.getElementById('EliminarCamiseta').style.display = 'none'
  // -------------------Eliminar Camiseta-----------------------
}

// Función para mostrar formulario de creación de camisetas

function mostrarCrearCamisetas () {
  document.getElementById('CrearCamiseta').style.display = 'block'
  document.getElementById('ModificarCamiseta').style.display = 'none'
  document.getElementById('BuscarCamiseta').style.display = 'none'
  document.getElementById('EliminarCamiseta').style.display = 'none'
}

// Función para mostrar formulario de Modificación de camisetas

function mostrarModificarCamisetas () {
  document.getElementById('CrearCamiseta').style.display = 'none'
  document.getElementById('ModificarCamiseta').style.display = 'block'
  document.getElementById('BuscarCamiseta').style.display = 'none'
  document.getElementById('EliminarCamiseta').style.display = 'none'
}
// Función para mostrar formulario de busqueda de camisetas
function mostrarBuscarCamisetas () {
  document.getElementById('CrearCamiseta').style.display = 'none'
  document.getElementById('ModificarCamiseta').style.display = 'none'
  document.getElementById('BuscarCamiseta').style.display = 'block'
  document.getElementById('EliminarCamiseta').style.display = 'none'
}

// Función para mostrar formulario de Eliminación de camisetas

function mostrarEliminarCamisetas () {
  document.getElementById('CrearCamiseta').style.display = 'none'
  document.getElementById('ModificarCamiseta').style.display = 'none'
  document.getElementById('BuscarCamiseta').style.display = 'none'
  document.getElementById('EliminarCamiseta').style.display = 'Block'
}

// Función para Inicio

function mostrarNada () {
  document.getElementById('CrearCamiseta').style.display = 'none'
  document.getElementById('ModificarCamiseta').style.display = 'none'
  document.getElementById('BuscarCamiseta').style.display = 'none'
  document.getElementById('EliminarCamiseta').style.display = 'none'
}

// Función para retornar a inicio de sesión

function Salir () {
  location.replace('InicioSesion.html')
}

// Movimiento de interacción de Botones

$('#buttonSalir').click(function () {
  Salir()
  Home()
})

$('#buttonEspacios').click(function () {
  mostrarCrearCamisetas()
})

$('#buttonHabitos').click(function () {
  mostrarModificarCamisetas()
})

$('#buttonTutorias').click(function () {
  mostrarBuscarCamisetas()
})

$('#buttonHorarios').click(function () {
  mostrarEliminarCamisetas()
})

$('#buttonLogin').click(function () {
  mostrarNada()
})
