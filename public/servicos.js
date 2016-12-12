angular.module("angular-reserva").service("reservaservice", function ($http){

  this.buscarreserva = () => $http.get("reservas");

  this.salvarreserva= (rs) => $http.post("reserva",rs);

  this.excluirreserva = (rs) => $http.post("deletar_reserva",rs);
});


angular.module("angular-reserva").service("espacosservice",function($http){
    this.buscarespacos = () => $http.get("espacos");
    
    this.salvarespacos = (es) => $http.post("espaco",es);
});

angular.module("angular-reserva").service("pessoasservice",function($http){
    this.buscarpessoas = () => $http.get("pessoas");

    this.salvarpessoas = (ps) => $http.post("pessoa",ps);
})