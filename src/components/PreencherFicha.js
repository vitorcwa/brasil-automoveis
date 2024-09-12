import React from 'react';
import { Button, makeStyles, Typography, Container, Grid, Box } from '@material-ui/core';

import PreencherFicha from '../images/preencher-ficha.webp';

const useStyles = makeStyles((theme) => ({
   section: {
      maxHeight: '650px',
      padding: '3rem 0',
      width: '100%',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${PreencherFicha})`,
      [theme.breakpoints.down('sm')]: {
         width: 'auto',
         maxHeight: '100%',
         padding: '0 1rem 3rem 1rem',
         backgroundPosition: 'left center',
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
}));

export default function Header(props) {
   const classes = useStyles();
   return (
      <Box>
         <Grid className={classes.section}>
            <Container className={classes.container} maxWidth="lg" >
               <Grid container justifyContent={{ xs: 'center', md: 'flex-end' }}>
                  <Grid item md='5'></Grid>
                  <Grid item md='7'>
                     <Box mt={{ xs: 12, md: 0 }} py={{ xs: 4, md: 8 }} pl={{ xs: 4, md: 36 }} pr={{ xs: 4, md: 12 }}>
                        <Box mb={6} className={classes.white}>
                           <Typography variant='h1' component='h4'>
                              Aprove seu crédito
                              agora mesmo e acelere seu sonho na Brasil.
                           </Typography>
                        </Box>
                        <Box mb={{ xs: 12 }} className={classes.classDescription}>
                           <Typography variant='h4' component='p'>
                              Quer realizar seu sonho sem ter dor de cabeça e perda de tempo?
                              Só tem um caminho, vem pra Brasil Automóveis.
                           </Typography>
                        </Box>
                        <Button className={classes.button} variant='contained' href='/aprove-seu-credito'>
                           Preencher ficha
                        </Button>
                     </Box>
                  </Grid>
               </Grid>
            </Container>
         </Grid>
      </Box>
   );
}