exports.up = function(knex, Promise) {
  return knex.schema.createTable("espaco",(table) => {
      table.increments("idespaco");
      table.string("nomeespaco").notNullable();
      table.string("descricaoespaco").notNullable();
  }).createTable("pessoas",(table) => {
      table.increments("idpessoa");
      table.string("nomepessoa").notNullable;
  }).createTable("reserva",(table) => {
      table.increments("idreserva");
      table.string("nomeespaco").notNullable();
      table.string("nomepessoa").notNullable();
      table.datetime("datacomeco").notNullable();
      table.datetime("datafim").notNullable();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("reserva");
};