const Sequelize = require('sequelize');

const connection = require('../database/database');

const pacienteModel = connection.define(
   'tbl_paciente',
   {
      cod_paciente:{
         type: Sequelize.INTEGER(10),
         primaryKey:true,
         autoIncrement:true
      },
      nome_paciente:{
         type: Sequelize.STRING(500),
         allowNull:false
      },
      telefone_paciente:{
         type: Sequelize.STRING(10),
         allowNull:false
      },
      celular_paciente:{
         type: Sequelize.STRING(11),
         allowNull:false
      },
      email_paciente:{
         type: Sequelize.STRING(100),
         allowNull:false
      },
      nome_responsavel:{
         type: Sequelize.STRING(500),
         allowNull:true
      },
      telefone_responsavel:{
         type: Sequelize.STRING(10),
         allowNull:true
      }
   }
);

// pacienteModel.sync({force:true});

module.exports = pacienteModel;