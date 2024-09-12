import React, { useState } from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

// Importar parâmetros da url (IdVeiculo)
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   input: {
      width: '100%',
   },
   button: {
      width: '100%',
      color: theme.palette.common.black,
      boxShadow: 'none',
      borderRadius: '25px',
      textTransform: 'none',
      padding: '0.5rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '700',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
         backgroundColor: theme.palette.primary.main,
         boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6) !important',
      },
   },
}));

export default function SalvarLead() {
   
   const classes = useStyles();
   const { id } = useParams(); // Importar parâmetro 'IdVeiculo' da url
   // console.log(`${id}`);

   const [lead, setLead] = useState({
      token: 'qernF/0fB7xVR3iNqWeR9A==',
      idMidia: '1',
      interesse: '2',
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      idVeiculo: `${id}`,
   });

   const [status, setStatus] = useState({
      type: '',
      mensagem: '',
   });

   const valorInput = e => setLead({ ...lead, [e.target.name]: e.target.value});

   const salvarLead = async e => {
      e.preventDefault();
      // console.log({ lead });
      await fetch('https://webapi.autocerto.com/api/IntegracaoCliente/SalvarLead', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(lead)
      })
      .then((response) => response.json())
      .then((responseJson) => {
         // console.log(responseJson)
         if (responseJson.erro) {
            setStatus({
               type: 'erro',
               mensagem: 'Houve um erro, por favor tente novamente.'
            });
         } else {
            setStatus({
               type: 'success',
               mensagem: 'Seu cadastro foi salvo com sucesso! Em breve um de nossos consultores entrará em contato.'
            });
         }
      })
      .catch(() => {
         setStatus({
            type: 'erro',
            mensagem: 'Houve um erro, por favor tente novamente.'
         });
      });
   }

   return (
      <Box>

         {status.type === 'erro' ? <Alert severity="error">{status.mensagem}</Alert> : ""}
         {status.type === 'success' ? <Alert severity="success">{status.mensagem}</Alert> : ""}

         <Box component="form" onSubmit={salvarLead} sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off" >
            <Box mt={6}>
               <TextField className={classes.input} label="Informe seu nome" variant="outlined" name="nome" onChange={valorInput} />
            </Box>
            <Box mt={2}>
               <TextField className={classes.input} label="Informe seu melhor email" variant="outlined" name="email" onChange={valorInput} />
            </Box>
            <Box mt={2}>
               <TextField className={classes.input} label="Informe seu telefone" variant="outlined" name="telefone" onChange={valorInput} />
            </Box>
            <Box my={2}>
               <TextField className={classes.input} label="Informe seu CPF (opcional)" variant="outlined" name="cpf" onChange={valorInput} />
            </Box>
            <Button variant='contained' className={classes.button}  endIcon={<SendIcon />} type='submit'>Enviar</Button>
         </Box>

      </Box>

   );
}
