import React, { useState, useEffect } from 'react';
import { makeStyles, Container, Typography, Grid, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Images
import Thumb from '../images/thumb.png';

// Icons
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      minHeight: '460px',
      overflow: 'hidden',
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.light,
   },
   icon: {
      width: '1.5rem !important',
      height: '1.5rem !important',
      margin: '0 0 1rem 0',
      color: theme.palette.primary.dark,
   },
   iconBg: {
      width: '2.5rem !important',
      height: '2.5rem !important',
      borderRadius: '25px',
      padding: '0.5rem',
      backgroundColor: theme.palette.primary.light,
   },
   bold: {
      fontWeight: '800',
   },
   dark: {
      color: theme.palette.secondary.dark,
   },
   contrastText: {
      color: theme.palette.secondary.main,
   },
   rule: {
      width: '2rem !important',
      height: '0.35rem !important',
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.dark,
   },
   iconSmall: {
      width: '1.15rem !important',
      height: '1.15rem !important',
      marginRight: '1.5rem',
      color: theme.palette.secondary.dark,
   },
   tag: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '7px',
      padding: '0.35rem 0.75rem',

   },
   buttonOutlined: {
      width: '100%',
      color: theme.palette.primary.main,
      boxShadow: 'none',
      borderRadius: '25px',
      textTransform: 'none',
      padding: '0.5rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '700',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      backgroundColor: 'transparent',
      '&:hover': {
         color: theme.palette.common.black,
         backgroundColor: theme.palette.primary.main,
         boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6) !important',
      },
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
   imgBox: {
      minHeight: '262px',
      overflow: 'hidden',
      maxWidth: '100%',
   },
   imgVeiculo: {
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      maxWidth: '100%',
   },
   versao: {
      minHeight: '40px',
   },
   select: {
      width: '100%',
   },
   link: {
      textDecoration: 'none',
   }
}));

export default function VeiculosDestaque() {
   const classes = useStyles();
   const [veiculos, setVeiculos] = useState([]);
   const imagePath = 'https://www.autocerto.com/fotos/';

   useEffect(() => {
      fetch('https://webapi.autocerto.com/api/IntegracaoSite/ObterVeiculos?token=qernF%2F0fB7xVR3iNqWeR9A%3D%3D')
         .then(response => response.json())
         .then(data => setVeiculos(data))
   }, []);

   return (

      <Box pt={0} pb={20} px={{ xs: 4, md: 0 }}>
         <Container>

            <Grid container justifyContent='center' textAlign='center'>
               <Box justifyContent='center' textAlign='center'>
                  <Box mb={3} className={classes.rule} mx='auto' />
                  <Box mb={3}>
                     <Typography variant='h2' component='h2' className={classes.dark}>
                        Nosso estoque
                     </Typography>
                  </Box>
                  <Typography variant='body1' component='p' className={classes.contrastText}>
                     Confira o maior e melhor estoque de carros do Rio.
                  </Typography>
               </Box>
            </Grid>

            <Box mt={12} mb={8}>
               <Grid container justifyContent='flex-start' spacing={8}>

                  {/* eslint-disable-next-line */}
                  {veiculos.map(veiculo => {
                     if (`${veiculo.Destaque}` === 'true') {
                        return (
                           <Grid item xs={12} md={4} key={veiculo.Codigo}>
                              <Box className={classes.box}>
                                 <Link to={`/veiculo/${veiculo.Codigo}`} className={classes.link}>
                                    <Grid container className={classes.imgBox} justifyContent='center' alignContent='center'>
                                       {
                                          veiculo.FotoPrincipal ?
                                             <img src={`${imagePath}${veiculo.FotoPrincipal}`} className={classes.imgVeiculo} alt='Brasil Automóveis' />
                                             :
                                             <img src={Thumb} alt='Brasil Automóveis' width='200px' />
                                       }
                                    </Grid>
                                    <Box p={6}>
                                       <Box mb={6}>
                                          <Typography variant='h4' component='h4' className={classes.dark}>
                                             {veiculo.Marca} {veiculo.Modelo}
                                          </Typography>
                                          <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                             {veiculo.Versao}
                                          </Typography>
                                       </Box>
                                       <Grid container justifyContent='space-between' spacing={1}>
                                          <Grid item xs={6}>
                                             <Grid container className={classes.tag} alignItems='center'>
                                                <SpeedIcon className={classes.iconSmall} />
                                                <Typography variant='body2' component='span' className={`${classes.contrastText} ${classes.bold}`}>
                                                   {veiculo.kilometragem}KM
                                                </Typography>
                                             </Grid>
                                          </Grid>
                                          <Grid item xs={6}>
                                             <Grid container className={classes.tag} alignItems='center'>
                                                <CalendarTodayIcon className={classes.iconSmall} />
                                                <Typography variant='body2' component='span' className={`${classes.contrastText} ${classes.bold}`}>
                                                   {veiculo.AnoFabricacao}/{veiculo.AnoModelo}
                                                </Typography>
                                             </Grid>
                                          </Grid>
                                       </Grid>
                                       {/* <Box mt={4} width='100%'> */}
                                          {/* <Button className={classes.button} variant='contained'> */}
                                             {/* {veiculo.Preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} */}
                                          {/* </Button> */}
                                       {/* </Box> */}
                                    </Box>
                                 </Link>
                              </Box>
                           </Grid>
                        )
                     }
                  })}
               </Grid>
            </Box>
            <Grid container justifyContent='center' spacing={8}>
               <Grid item md={4}>
                  <Button className={classes.button} variant='contained' href='/veiculos'>Ver estoque completo</Button>
               </Grid>
            </Grid>
         </Container>
      </Box>

   );
}