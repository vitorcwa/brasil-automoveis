import React from 'react';
import { makeStyles, Typography, Grid, Box, Container } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

// Images
import Raphael from '../images/raphael.webp';
import Gustavo from '../images/gustavo.webp';
import Wallace from '../images/wallace.webp';
import Felipe from '../images/felipe.webp';


// Icons
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      minHeight: '400px',
      overflow: 'hidden',
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.light,
   },
   imgBox: {
      maxHeight: '300px',
      overflow: 'hidden',
      maxWidth: '100%',
   },
   imgVeiculo: {
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      maxWidth: '100%',
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
      marginRight: '0.5rem',
      color: theme.palette.secondary.dark,
   },
   tag: {
      // backgroundColor: theme.palette.common.white,
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

export default function NossoTime() {
   const classes = useStyles();

   return (
      <div>
         <TopBar />
         <Box pt={40} pb={20} px={{ xs: 4, md: 8 }}>

            <Grid container justifyContent='center'>
               <Grid item>
                  <Box mb={16}>
                     <Typography variant='h2' component='h1' className={classes.dark}>
                        Conheça nosso time
                     </Typography>
                  </Box>
               </Grid>
            </Grid>

            <Container>
               <Grid container justifyContent='center' spacing={8}>

                  <Grid item xs={12} md={3}>
                     <Box className={classes.box}>
                        <Grid container className={classes.imgBox} justifyContent='center' alignContent='flex-start'>
                           <img src={Raphael} alt='Brasil Automóveis' width='100%' />
                        </Grid>
                        <Box p={6}>
                           <Box mb={0} textAlign='center'>
                              <Typography variant='h4' component='h4' className={classes.dark}>
                                 Raphael Lucas
                              </Typography>
                              <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                 Consultor
                              </Typography>
                           </Box>
                        </Box>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={3}>
                     <Box className={classes.box}>
                        <Grid container className={classes.imgBox} justifyContent='center' alignContent='flex-start'>
                           <img src={Gustavo} alt='Brasil Automóveis' width='100%' />
                        </Grid>
                        <Box p={6}>
                           <Box mb={0} textAlign='center'>
                              <Typography variant='h4' component='h4' className={classes.dark}>
                                 Gustavo Silva
                              </Typography>
                              <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                 Consultor
                              </Typography>
                           </Box>
                           {/* <Grid container justifyContent='center' spacing={1}> */}
                           {/* <Grid item xs={9}> */}
                           {/* <Grid container className={classes.tag} justifyContent='space-evenly' alignItems='center'> */}
                           {/* <a className={classes.link} href='https://api.whatsapp.com/send?phone=55219839079318&text=Ola!%20Eu%20quero%20comprar%20um%20carro%20com%20a%20Brasil%20Autom%C3%B3veis!' target='_blank' rel="noreferrer"> */}
                           {/* <WhatsAppIcon className={classes.iconSmall} /> */}
                           {/* <Typography variant='body2' component='span' className={`${classes.contrastText} ${classes.bold}`}> */}
                           {/* 21 98390-7931 */}
                           {/* </Typography> */}
                           {/* </a> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                        </Box>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={3}>
                     <Box className={classes.box}>
                        <Grid container className={classes.imgBox} justifyContent='center' alignContent='flex-start'>
                           <img src={Felipe} alt='Brasil Automóveis' width='100%' />
                        </Grid>
                        <Box p={6}>
                           <Box mb={0} textAlign='center'>
                              <Typography variant='h4' component='h4' className={classes.dark}>
                                 Felipe Moraes
                              </Typography>
                              <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                 Consultor
                              </Typography>
                           </Box>
                           {/* <Grid container justifyContent='center' spacing={1}> */}
                           {/* <Grid item xs={9}> */}
                           {/* <Grid container className={classes.tag} justifyContent='space-evenly' alignItems='center'> */}
                           {/* <a className={classes.link} href='https://api.whatsapp.com/send?phone=5521981356422&text=Ola!%20Eu%20quero%20comprar%20um%20carro%20com%20a%20Brasil%20Autom%C3%B3veis!' target='_blank' rel="noreferrer"> */}
                           {/* <WhatsAppIcon className={classes.iconSmall} /> */}
                           {/* <Typography variant='body2' component='span' className={`${classes.contrastText} ${classes.bold}`}> */}
                           {/* 21 98135-6422 */}
                           {/* </Typography> */}
                           {/* </a> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                        </Box>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={3}>
                     <Box className={classes.box}>
                        <Grid container className={classes.imgBox} justifyContent='center' alignContent='flex-start'>
                           <img src={Wallace} alt='Brasil Automóveis' width='100%' />
                        </Grid>
                        <Box p={6}>
                           <Box mb={0} textAlign='center'>
                              <Typography variant='h4' component='h4' className={classes.dark}>
                                 Wallace Santos
                              </Typography>
                              <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                 Consultor
                              </Typography>
                           </Box>
                           {/* <Grid container justifyContent='center' spacing={1}> */}
                           {/* <Grid item xs={9}> */}
                           {/* <Grid container className={classes.tag} justifyContent='space-evenly' alignItems='center'> */}
                           {/* <a className={classes.link} href='https://api.whatsapp.com/send?phone=5521964606925&text=Ola!%20Eu%20quero%20comprar%20um%20carro%20com%20a%20Brasil%20Autom%C3%B3veis!' target='_blank' rel="noreferrer"> */}
                           {/* <WhatsAppIcon className={classes.iconSmall} /> */}
                           {/* <Typography variant='body2' component='span' className={`${classes.contrastText} ${classes.bold}`}> */}
                           {/* 21 96460-6925 */}
                           {/* </Typography> */}
                           {/* </a> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                           {/* </Grid> */}
                        </Box>
                     </Box>
                  </Grid>

               </Grid>
            </Container>

         </Box >
         <Footer />
      </div>

   );
}