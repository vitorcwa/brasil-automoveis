import React from 'react';
import { Button, makeStyles, Typography, Container, Grid, Box } from '@material-ui/core';

import Guy from '../images/guy.webp';
import IconBg from '../images/icon-bg.webp';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
   },
   boxContainer: {
      position: 'relative',
   },
   container: {
      zIndex: '1',
      minHeight: '448px',
      position: 'relative',
      borderRadius: '35px',
      overflow: 'hidden',
      padding: '0',
      marginBottom: '5rem',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]: {
         maxHeight: '100%',
         minHeight: '750px',
      },
   },
   buttonLabel: {
      textTransform: 'none',
   },
   button: {
      color: theme.palette.common.black,
      boxShadow: 'none',
      borderRadius: '8px',
      textTransform: 'none',
      padding: '0.5rem 2rem',
      fontSize: '1rem',
      fontWeight: '700',
      backgroundColor: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
         padding: '0.5rem 1.2rem',
         fontSize: '0.85rem',
      },
      '&:hover': {
         boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6) !important',
         backgroundColor: theme.palette.secondary.main,
         color: theme.palette.common.white,
      },
   },
   icon: {
      float: 'left',
      fontSize: '2rem',
      margin: '-7px 5px 0 0',
      color: theme.palette.secondary.main,
   },
   secondaryDark: {
      color: theme.palette.common.black,
   },
   typography: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: 'auto',
      height: '100%',
      zIndex: '-1',
      opacity: '1',
      [theme.breakpoints.down('sm')]: {
         width: '100%',
         height: 'auto',
      }
   },
   guy: {
      position: 'absolute',
      left: '11rem',
      bottom: '-2rem',
      zIndex: '9',
      [theme.breakpoints.down('sm')]: {
         left: '4rem',
         top: '-3rem',
         width: '70%',
      }
   },
   vetor2: {
      position: 'absolute',
      top: '-34rem',
      right: '0',
   },
}));

function Experimente() {
   const classes = useStyles();
   return (
      <Box className={classes.root} px={{ xs: 6, md: 0 }} mt={{ xs: 4, md: 12 }}>
         <Container className={classes.boxContainer}>
            <Grid container justifyContent='flex-end' alignItems='center' alignContent='center' className={classes.container}>
               <Grid item md='6' className={classes.classBoxText}>
                  <Box mt={{ xs: 75, md: 0 }} pl={{ xs: 6, md: 6 }} pr={{ xs: 6, md: 36 }}>
                     <Box mb={2} className={classes.secondaryDark}>
                        <Typography variant='h2' component='h4'>
                           Conheça o
                        </Typography>
                     </Box>
                     <Box mb={2} className={classes.secondaryDark}>
                        <Typography variant='h2' component='h4'>
                           Consórcio da Brasil
                        </Typography>
                     </Box>
                     <Grid item md={12}>
                        <Box py={{ xs: 4, md: 4 }}>
                           <Typography component='p' variant='body1' className={classes.secondaryDark}>
                              O Consórcio é a linha de crédito mais barata do mercado e
                              com o Consórcio da Brasil você pode contar com uma super consultoria
                              para desenvolver o plano perfeito para você.
                           </Typography>
                        </Box>
                        <Box mb={{ xs: 4, md: 6 }}>
                           <Typography component='p' variant='body1' className={classes.secondaryDark}>
                              Buscaremos entre os melhores bancos, o melhor crédito, as menores
                              taxas de administração e as melhores possibilidades para sua contemplação.
                           </Typography>
                        </Box>
                     </Grid>
                     <Button className={classes.button} variant='contained' href='https://api.whatsapp.com/send?phone=5521980609128&text=Oi,%20eu%20quero%uma%20consultoria%20grátis!'>
                        Eu quero uma consultoria gratuita
                     </Button>
                  </Box>
               </Grid>
               <img className={classes.typography} src={IconBg} alt='Consórcio da Brasil' />
            </Grid>
            <img src={Guy} className={classes.guy} alt='Consórcio da Brasil' />
         </Container>
      </Box>
   );
}

export default Experimente;