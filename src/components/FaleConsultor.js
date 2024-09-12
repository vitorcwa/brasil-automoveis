import React from 'react';
import { Button, makeStyles, Typography, Container, Grid, Box } from '@material-ui/core';

import ImgTypography from '../images/typography-white.webp';
import Emojis from '../images/emojis.webp';

const useStyles = makeStyles((theme) => ({
   container: {
      zIndex: '1',
      maxHeight: '430px',
      position: 'relative',
      borderRadius: '35px',
      overflow: 'hidden',
      padding: '0',
      marginBottom: '5rem',
      backgroundColor: theme.palette.secondary.main,
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
   classBoxImage: {
      backgroundImage: `url(${Emojis})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '100%',
      height: '400px',
      [theme.breakpoints.down('sm')]: {
         height: '300px',
      }
   }
}));

export default function Consultor(props) {
   const classes = useStyles();
   return (
      <Box px={{ xs: 6, md: 0 }}>
         <Container className={classes.container} maxWidth="lg" >
            <Grid container direction='row' justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center' alignContent='center'>
               <Grid item md='6' className={props.classBoxText}>
                  <Box mt={{ xs: 8, md: 0 }} py={{ xs: 4, md: 8 }} pl={{ xs: 6, md: 36 }} pr={{ xs: 6, md: 12 }}>
                     <Typography variant='h1' component='h4'>
                        <Box mb={6} className={classes.white}>
                           Fale agora com um consultor
                        </Box>
                     </Typography>
                     <Grid item md={8}>
                        <Typography variant='body1'>
                           <Box mb={{ xs: 8 }} className={classes.classDescription}>
                              Garantimos as melhores condições para você realizar o seu sonho.
                           </Box>
                        </Typography>
                     </Grid>
                     <Button className={classes.button} variant='contained' href='https://api.whatsapp.com/send?phone=5521986900206&text=Oi,%20eu%20quero%20falar%20com%20um%20consultor!'>
                        Fale agora
                     </Button>
                  </Box>
               </Grid>
               <Grid item md='6' className={classes.classBoxImage}>
                  {/* <img src={Emojis} alt='Brasil Automóveis' width='100%' /> */}
               </Grid>
            </Grid>
            <img className={classes.typography} src={ImgTypography} alt='Brasil Automóveis' width='100%' />
         </Container>
      </Box>
   );
}