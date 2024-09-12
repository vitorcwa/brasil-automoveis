import React from 'react';
import { makeStyles, Typography, Grid, Box, Container } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import SalvarLead from '../components/SalvarLead';

import PreencherFicha from '../images/preencher-ficha.webp';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   section: {
      maxHeight: '650px',
      width: '100%',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${PreencherFicha})`,
      [theme.breakpoints.down('sm')]: {
         maxHeight: '100%',
      },
   },
   container: {
      overflow: 'hidden',
      padding: '0',
      [theme.breakpoints.down('sm')]: {
         maxHeight: '100%',
      },
   },
   typography: {
      position: 'absolute',
      left: '0',
      bottom: '-90px',
      width: '120%',
      height: 'auto',
      zIndex: '-1',
      opacity: '0.25',
   },
   buttonLabel: {
      textTransform: 'none',
   },
   button: {
      color: theme.palette.common.dark,
      boxShadow: 'none',
      borderRadius: '25px',
      textTransform: 'none',
      padding: '0.5rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '700',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
         boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6) !important',
         backgroundColor: theme.palette.primary.main,
      },
   },
   icon: {
      float: 'left',
      fontSize: '2rem',
      margin: '-7px 5px 0 0',
      color: theme.palette.secondary.main,
   },
   classDescription: {
      fontWeight: '600',
      color: theme.palette.common.white,
   },
   white: {
      color: theme.palette.common.white,
   },
   contrastText: {
      color: theme.palette.secondary.main,
   },
}));

export default function AproveCredito() {
   const classes = useStyles();

   return (
      <Box>
         <TopBar />
         <Box pt={24} pb={20}>
            <Grid className={classes.section}>
               <Container className={classes.container} maxWidth="lg" >
                  <Grid container justifyContent={{ xs: 'center', md: 'flex-end' }}>
                     <Grid item lg='5'></Grid>
                     <Grid item lg='7'>
                        <Box mt={{ xs: 12, md: 0 }} py={{ xs: 4, md: 16 }} pl={{ xs: 4, md: 36 }} pr={{ xs: 4, md: 12 }}>
                           <Typography variant='h1' component='h4'>
                              <Box mb={6} className={classes.white}>
                                 Aprove seu crédito
                                 agora mesmo e acelere seu sonho na Brasil.
                              </Box>
                           </Typography>
                        </Box>
                     </Grid>
                  </Grid>
               </Container>
            </Grid>
            <Box mt={12} mx={4}>
               <Container>
                  <Grid container justifyContent='center'>
                     <Grid item md={4}>
                        <Typography variant='h4' component='p'>
                           <Box mb={{ xs: 10 }} className={classes.contrastText}>
                              Quer realizar seu sonho sem ter dor de cabeça e perda de tempo?
                              Só tem um caminho, vem pra Brasil Automóveis.
                           </Box>
                        </Typography>
                        <SalvarLead />
                     </Grid>
                  </Grid>
               </Container>
            </Box>
         </Box>
         <Footer />
      </Box >
   );
}