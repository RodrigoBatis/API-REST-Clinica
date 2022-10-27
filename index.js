const express = require('express');

const app = express();

app.use(express.json());

const pacienteController = require('./controller/pacienteController');
// const pacienteModel = require('./model/pacienteModel')


// app.use('/', pacienteModel);
app.use('/', pacienteController);

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});