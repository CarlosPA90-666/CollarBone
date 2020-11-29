var axios
var datos
var app = new Vue({
  el: '#app',
  data: {
    user: [],
    onlyUser: [],
    supp: []
  },
  methods: {
    peticion: function () {
      axios.get('http://ec2-3-93-6-146.compute-1.amazonaws.com:5000/BuscarC')
        .then(response => {
          this.data = response.data.data
          console.log(this.data)
        })
        .catch(error => console.error(error))
    },
    p: function (id) {
      axios.get('http://ec2-3-93-6-146.compute-1.amazonaws.com:5000/BuscarC')
        .then(response => {
          datos = response.data
          this.supp = datos.support
          this.onlyUser = datos.data
          console.log(this.supp)
          $('#exampleModal').modal('show')
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.peticion()
  }
})
