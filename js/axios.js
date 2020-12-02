var url = 'http://ec2-3-93-172-222.compute-1.amazonaws.com:5000'
var axios
var combo
var selected
var app = new Vue({
  el: '#app',
  data: {
    datos: [],
    unC: [],
    nombreT: ' '
  },
  methods: {
    peticion: function () {
      axios.get(url + '/BuscarC')
        .then(response => {
          this.datos = response.data.data
          console.log(this.datos)
        })
        .catch(error => console.error(error))
    },
    p: function () {
      axios.get(url + '/BuscarCone')
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

  for (const x of app.datos) {
    if (x.nombre === selected) {
      console.log(x.nombre)
      document.getElementById('NombrecamisetaBusqueda').value = x.nombre
      document.getElementById('NumeroCamisetasDisponiblesBusqueda').value = x.cantidad
      document.getElementById('TallasDisponiblesBusqueda').value = x.tallas
      document.getElementById('PrecioCamisetaBusqueda').value = x.precio
      document.getElementById('ImagenCamisetaBusqueda').value = x.url
    }
  }
}

$('#btn Buscarcam').click(function () {
  x()
})

var pepe = new Vue({
  el: '#pepe',
  data: {
    datos: [],
    supC: ''
  },
  methods: {
    peticion: function () {
      axios.get(url + '/BuscarC')
        .then(response => {
          this.datos = response.data.data
          console.log(this.datos)
        })
        .catch(error => console.error(error))
    },
    eliminar: function () {
      console.log(this.supC)
      alert('La camiseta ' + this.supC + ' ha sido eliminada satisfactoriamente')
      axios.delete(url + '/BorrarC', { headers: {}, data: { supC: this.supC } })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.request)
          alert('No se pudo realizar la eliminación de la camiseta')
        })
    }
  },
  created: function () {
    this.peticion()
  }
})
