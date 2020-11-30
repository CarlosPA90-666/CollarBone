var axios
var datos
var app = new Vue({
  el: '#app',
  data: {
    datos: []
  },
  methods: {
    peticion: function () {
      axios.get('http://ec2-3-93-6-146.compute-1.amazonaws.com:5000/BuscarC')
        .then(response => {
          this.datos = response.data.data
          console.log(this.datos)
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.peticion()
  }
})
