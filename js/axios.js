var axios
var datos
var unC
var app = new Vue({
  el: '#app',
  data: {
    datos: [],
    unC: []
  },
  methods: {
    peticion: function () {
      axios.get('http://ec2-3-93-6-146.compute-1.amazonaws.com:5000/BuscarC')
        .then(response => {
          this.datos = response.data.data
          console.log(this.datos)
        })
        .catch(error => console.error(error))
    },
    p: function (id) {
      axios.get('http://ec2-3-93-6-146.compute-1.amazonaws.com:5000/BuscarC' + id)
        .then(response => {
          this.unC = datos.data
          console.log(this.unC)
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.peticion()
  }
})
