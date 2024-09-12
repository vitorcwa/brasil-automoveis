import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Grid, Box, Container } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import SalvarLead from '../components/SalvarLead';
import Vantagens from '../components/Vantagens';
import FaleConsultor from '../components/FaleConsultor';

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

// Slide para as fotos
import Slider from "react-slick";
import '../services/slick.css';
import '../services/slick-theme.css';

// Importar parâmetros da url (IdVeiculo)
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      minHeight: '497px',
      overflow: 'hidden',
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.light,
      // boxShadow: '0 8px 40px rgb(127 134 140 / 24%)',
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
   image: {
      padding: '0 2px',
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
   primary: {
      color: theme.palette.primary.main,
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
   observacao: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '7px',
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
}));

export default function Veiculo() {
   const classes = useStyles();
   const imagePath = 'https://www.autocerto.com/fotos/';

   const { id } = useParams();
   const [veiculo, setVeiculo] = useState({});

   // Rolar página para o topo quando clicar em um veículo
   function ScrollToTopOnMount() {
      useEffect(() => {
         window.scrollTo(0, 0);
      }, []);
      return null;
   }

   useEffect(() => {
      fetch(`https://webapi.autocerto.com/api/IntegracaoSite/ObterVeiculo?token=qernF%2F0fB7xVR3iNqWeR9A%3D%3D&idVeiculo=${id}`)
         .then(response => response.json())
         .then(data => setVeiculo(data))
         .catch(err => console.log('Erro de solicitação', err));
   }, [id]);

   // Slide das fotos
   var settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      dots: false,
      responsive: [
         {
            breakpoint: 720,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
               autoplay: true,
               autoplaySpeed: 1500,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <Box>
         {/* Rolar página para o topo */}
         <ScrollToTopOnMount />

         <TopBar />
         <Box pt={24} pb={20}>

            {/* Box de fotos */}
            <Gallery>
               <Slider {...settings}>
                  {/* {(veiculo.Fotos || []).map(foto => { */}
                  {veiculo.Fotos?.map(foto => {
                     return (
                        <Item
                           original={`${imagePath}${foto.Nome}`}
                           thumbnail={`${imagePath}${foto.Nome}`}
                           width="800"
                           height="600"
                           key={foto.Posicao}
                        >
                           {({ ref, open }) => (
                              <Box mr={1}>
                                 <img
                                    ref={ref} onClick={open}
                                    src={`${imagePath}${foto.Nome}`}
                                    alt='Brasil Automóveis'
                                    width='100%' />
                              </Box>
                           )}
                        </Item>
                     );
                  })}
               </Slider>
            </Gallery>

            <Box mt={-12} position='relative' zIndex={9}>
               <Container>
                  <Grid container justifyContent='center' spacing={8}>

                     <Grid item xs={12} md={8}>
                        <Box className={classes.box} px={{ xs: 4, md: 0 }}>
                           <Box py={{ xs: 6, md: 12 }} px={{ xs: 2, md: 12 }}>
                              <Box mb={6}>
                                 <Typography variant='h3' component='h4' className={classes.dark}>
                                    {veiculo.Marca} {veiculo.Modelo}
                                 </Typography>
                                 <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                    {veiculo.Versao}
                                 </Typography>
                              </Box>
                              <Box textAlign='center'>
                                 <Grid container justifyContent='space-between' spacing={4}>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Kilometragem
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.kilometragem}KM
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Ano
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.AnoFabricacao}/{veiculo.AnoModelo}
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Cor
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.Cor}
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Combustível
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.Combustivel}
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Câmbio
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.Cambio}
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Portas
                                       </Typography>
                                       <Box className={classes.tag} mt={2} mb={6}>
                                          <Typography variant='body2' component='p' className={`${classes.contrastText} ${classes.bold}`}>
                                             {veiculo.Portas}
                                          </Typography>
                                       </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                       {veiculo.Opcionais && (veiculo.Opcionais.length > 0) ? (
                                          <Box>
                                             <Typography variant='body2' component='p' className={classes.contrastText}>
                                                Opcionais
                                             </Typography>
                                             <Box className={classes.observacao} mt={2} mb={6} p={6} textAlign='left'>
                                                <Grid container>
                                                   {veiculo.Opcionais.map(opcional => {
                                                      return (
                                                         <Grid item xs={6} key={opcional.Codigo}>
                                                            <Box px={2}>
                                                               <Typography variant='body2' component='span' className={classes.contrastText}>
                                                                  {opcional.Descricao}
                                                               </Typography>
                                                            </Box>
                                                         </Grid>
                                                      )
                                                   })}
                                                </Grid>
                                             </Box>
                                          </Box>
                                       ) : null}
                                    </Grid>
                                    {/*<Grid item xs={12}>
                                       <Typography variant='body2' component='p' className={classes.contrastText}>
                                          Sobre esse veículo
                                       </Typography>
                                       <Box className={classes.observacao} mt={2} mb={6} p={6} textAlign='left'>
                                          <Typography variant='body2' component='p' className={classes.contrastText}>
                                             {veiculo.Observacao}
                                          </Typography>
                                       </Box>
                                    </Grid>*/}
                                 </Grid>
                              </Box>
                           </Box>
                        </Box>
                     </Grid>

                     <Grid item xs={12} md={4}>
                        <Box className={classes.box}>
                           <Box p={12}>
                              {/* <Box mb={10}> */}
                                 {/* <Typography variant='h2' component='p' className={classes.primary}> */}
                                    {/* {veiculo.Preco > 0 ? veiculo.Preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "Sob consulta"} */}
                                 {/* </Typography> */}
                              {/* </Box> */}
                              <Typography variant='body1' component='p'>
                                 Tem interesse nesse veículo? Envie uma mensagem pra gente.
                              </Typography>

                              <Box mt={8}>
                                 <SalvarLead />
                              </Box>
                           </Box>
                        </Box>
                     </Grid>

                  </Grid>
               </Container>
            </Box>

            <Vantagens />
            <FaleConsultor />

         </Box>
         <Footer />
      </Box >

   );
}