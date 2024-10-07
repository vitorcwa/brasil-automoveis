import React from 'react';
import {
   makeStyles, Grid
} from '@material-ui/core';
import TopBar from '../components/TopBar';
import HeaderContainer from '../components/HeaderContainer';
// import HeaderBanner from '../components/HeaderBanner';
import Footer from '../components/Footer';
import Vantagens from '../components/Vantagens';
import VeiculosDestaque from '../components/VeiculosDestaque';
import FaleConsultor from '../components/FaleConsultor';
import Cacador from '../components/Cacador';
import Depoimentos from '../components/Depoimentos';
import Experimente from '../components/Experimente';

// Images
// import ImageHeader from '../images/header.webp';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#FFFFFF',
   },
   classSubTitle: {
      color: theme.palette.common.black,
      fontWeight: '600',
      textTransform: 'uppercase',
   },
   classTitle: {
      fontSize: '3.5rem',
      lineHeight: '4rem',
   },
   classDescription: {
      fontWeight: '600',
      color: theme.palette.common.black,
      fontSize: '1.5rem',
      lineHeight: '2rem',
   },
   classImage: {
      marginLeft: '10px',
      [theme.breakpoints.down('sm')]: {
         marginLeft: '0',
      }
   },
}));

export default function Home() {
   const classes = useStyles();

   return (
      <Grid className={classes.root}>

         <TopBar />
         <HeaderContainer 
            classTitle={classes.classTitle}
            classSubTitle={classes.classSubTitle}
            subtitle='Vem pra maior, vem pra brasil!'
            title='Acelere com a Brasil'
            classDescription={classes.classDescription}
            description='Realize o sonho do seu carro agora e comece a pagar em até 120 dias.'
            image={ImageHeader}
            imageAlt='Brasil Automóveis'
            classBoxImage={classes.classBoxImage}
            classImage={classes.classImage}
            buttonLabel='Fale com um consultor'
            linkButton='https://api.whatsapp.com/send?phone=5521986900206&text=Oi,%20eu%20quero%20falar%20com%20um%20consultor!'
         />
         // <HeaderBanner />
         <Vantagens />
         <Experimente />
         <VeiculosDestaque />
         <Cacador />
         <Depoimentos />
         <FaleConsultor />
         <Footer />

      </Grid>
   );
}