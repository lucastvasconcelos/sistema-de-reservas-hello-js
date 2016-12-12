const express    = require("express");
const bodyParser = require("body-parser");
const knex       = require("./db");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/espacos", (req,res) => {
  knex("espaco").select().then((ret) => res.send(ret));
});

app.get("/pessoas", (req,res) => {
  knex("pessoas").select().then((ret) => res.send(ret));
});

app.post("/espaco", (req,res) => {
  var novo = req.body;
  knex("espaco").insert(novo,"idespaco").then((ret) => {
    novo.idespaco=ret[0];
    res.send(novo);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.post("/pessoa", (req,res) => {
  var novo = req.body;
  knex("pessoas").insert(novo,"idpessoa").then((ret) => {
    novo.idpessoa=ret[0];
    res.send(novo);
  }).catch((err) => {
    res.status(500).send(err);
  });
});


app.post("/deletar_reserva",(req,res) => {
  var novo = req.body;
  console.log(req.body);
  knex("reserva").where('idreserva',novo.idreserva).del().then((ret) => {
    novo = [];
    res.send(novo);
  }).catch((err) => {
    res.status(500).send(err);
  });
});


app.get("/reservas",(req,res) => {
  knex("reserva").select().then((ret) => res.send(ret));
});



app.post("/reserva", (req,res) => {
  var novo = req.body;
  knex("reserva").insert(novo,"idreserva").then((ret) => {
    novo.idreserva=ret[0];
    res.send(novo);
  }).catch((err) => {
    res.status(500).send(err);
  });
});


knex.migrate.latest().then( () => {
  app.listen(3001);
  console.log("app online");
});
