angular.module("angular-reserva").controller("controlador-reserva",function(reservaservice){
    this.novo = {};
    this.listar = () => reservaservice.buscarreserva().then((ret)=> {
        this.reservas = ret.data;
    });
    this.listar();
    this.salvarreserva = () => {
        reservaservice.salvarreserva(this.novo).then((ret) => {
            alert("reserva salva com o id" + ret.data.idreserva);
            this.listar();
            this.novo = {};
        });
    };
    this.excluirreserva = () => {
        console.log(this.novo.idreserva);
        reservaservice.excluirreserva(this.novo).then((ret) => {
            alert("reserva "+ ret.data.idreserva + " excluida");
            this.listar();
            this.novo={};
        });
    };
});

angular.module("angular-reserva").controller("espacoscontroller",function(espacosservice){
    this.novo = {};
    this.listar = () => espacosservice.buscarespacos().then((ret)=> {
        this.espacos = ret.data;
    });

    this.listar();

    this.salvarespacos = () => {
        espacosservice.salvarespacos(this.novo).then((ret) => {
            alert("Espaço adicionado com o id " + ret.data.idespaco);
            this.listar();
            this.novo = {};
        });
    };
});

angular.module("angular-reserva").controller("pessoascontroller",function(pessoasservice){
    this.novo = {};
    this.listar = () => pessoasservice.buscarpessoas().then((ret)=> {
        this.pessoas = ret.data;
    });

    this.listar();

    this.salvarpessoas = () => {
        pessoasservice.salvarpessoas(this.novo).then((ret) => {
            alert("Pessoa adicionada com o id " + ret.data.idpessoa);
            this.listar();
            this.novo = {};
        });
    };
});

angular.module("angular-reserva").config(($routeProvider) => {

  $routeProvider.when("/espacos", {
    controller:"espacoscontroller",
    templateUrl:"espacos.html",
    controllerAs:"ctl"
  });

  $routeProvider.when("/pessoas", {
    controller:"pessoascontroller",
    templateUrl:"pessoas.html",
    controllerAs:"ctl"
  });


  $routeProvider.when("/reservas", {
    controller:"controlador-reserva",
    templateUrl:"reservas.html",
    controllerAs:"ctl"
  });



  $routeProvider.otherwise("/reservas");

});
