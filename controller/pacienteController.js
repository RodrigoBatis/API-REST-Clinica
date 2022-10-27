
const express = require('express');

const pacienteModel = require("../model/pacienteModel")

const router = express.Router();

router.post('/cadastrarPaciente', (req, res)=>{

   let {nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel } = req.body;

   if(nome_paciente !== null && telefone_paciente !== null && celular_paciente !== null && email_paciente !== null)
   {
      if(Number(telefone_paciente) && Number(celular_paciente)){
         try {
            pacienteModel.create({
               nome_paciente,
               telefone_paciente,
               celular_paciente,
               email_paciente,
               nome_responsavel,
               telefone_responsavel,
            })
            .then(
            ()=>{
               res.status(201).json({message:"Paciente cadastrado com sucesso."});
            })
            .catch(
            ()=>{
               res.status(500).json({error:"Não foi possível cadastrar o paciente."});
            });
         } catch (error) {
            return res.status(400).json({
            error:"Ocorreu um erro no insert dos dados."
         })
         }
      }else{
         res.status(400).json({ error: "Só permetido inserir numeros"});
      }
   }else{
      res.status(400).json({ error: "Existem campos obrigatórios que devem ser preenchidos" });
   }
});

router.get('/listarPacientes', async (req, res) => {
   pacienteModel
   .findAll()
   .then((paciente) => {
     res.status(200).send(paciente);
   })
   .catch(() => {
     res.status(500).json({ error : "Não foi possível listar os pacientes cadastrados." });
   });
});



module.exports = router;