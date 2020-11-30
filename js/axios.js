var axios
var combo
var selected
var app = new Vue({
  el: '#app',
  data: {
    datos: [],
    unC: []
  },
  methods: {
    peticion: function () {
      axios.get('http://ec2-3-92-45-110.compute-1.amazonaws.com:5000/BuscarC')
        .then(response => {
          this.datos = response.data.data
          console.log(this.datos)
        })
        .catch(error => console.error(error))
    },
    p: function () {
      axios.get('http://ec2-3-92-45-110.compute-1.amazonaws.com:5000/BuscarCone')
        .then(response => {
          this.unC = response.data.data
          console.log(app.unC)
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.peticion()
  }
})

document.getElementById('nomscam1').onchange = function () { x() }

function x () {
  combo = document.getElementById('nomscam1')
  selected = combo.options[combo.selectedIndex].text
  document.getElementById('nombreC').value = selected
  console.log(selected)
  console.log(app.datos)

  for (const z of app.datos) {
    if (z.nombre === selected) {
      console.log(z.nombre)
      document.getElementById('NombrecamisetaBusqueda').value = z.nombre
      document.getElementById('NumeroCamisetasDisponiblesBusqueda').value = z.cantidad
      document.getElementById('TallasDisponiblesBusqueda').value = z.tallas
      document.getElementById('PrecioCamisetaBusqueda').value = z.precio
      document.getElementById('ImagenCamisetaBusqueda').value = z.url
    }
  }
}

$('#btn Buscarcam').click(function () {
  x()
})
