import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles, Typography, Grid, Box, Container } from '@material-ui/core'
import TopBar from '../components/TopBar'
import PreencherFicha from '../components/PreencherFicha'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

// Images
import Thumb from '../images/thumb.png'

// Icons
import SpeedIcon from '@mui/icons-material/Speed'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      minHeight: '430px',
      overflow: 'hidden',
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.light,
   },
   imgBox: {
      minHeight: '262px',
      overflow: 'hidden',
      maxWidth: '100%',
      position: 'relative',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
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
      marginRight: '1rem',
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
   versao: {
      minHeight: '40px',
   },
   select: {
      width: '100%',
   },
   link: {
      textDecoration: 'none',
   },
   line: {
      borderRight: '1px solid #ECEFF6',
      [theme.breakpoints.down('sm')]: {
         border: 'none',
      }
   },
}));

export default function Veiculos() {

   const classes = useStyles();
   const imagePath = 'https://www.autocerto.com/fotos/'; // Link das imagens da Autocerto

   const [data, setData] = useState([]);
   const [filterRecords, setFilterRecords] = useState([]);

   useEffect(()=>{
      axios.get(`https://webapi.autocerto.com/api/IntegracaoSite/ObterVeiculos?token=qernF/0fB7xVR3iNqWeR9A==`)
      .then(res=>{
         setData(res.data)
         setFilterRecords(res.data.filter(d=>d.Observacao.includes('SUV')))
      })
      .catch(err=>console.log(err));
   },[]);

   // Filtro de Modelos
   const filterModelo = (event) => {
      setFilterRecords(data.filter(d=>d.Observacao.includes('SUV')).filter(d=>d.Modelo.toLowerCase().includes(event.target.value)));
   }

   // Filtro de Marcas
   const filterMarca = (event) => {
      setFilterRecords(data.filter(d=>d.Observacao.includes('SUV')).filter(d=>d.Marca.includes(event.target.value)));
   }

   // Filtro de Ano do modelo
   const filterAno = (event) => {
      setFilterRecords(data.filter(d=>d.Observacao.includes('SUV')).filter(d=>d.AnoModelo.toString().includes(event.target.value)));
   }

   return (
      <div>
         <TopBar />
         <Box pt={40} pb={20} px={{ xs: 6, md: 8 }}>

            <Grid container justifyContent='center'>
               <Grid item>
                  <Box mb={16}>
                     <Typography variant='h2' component='h1' className={classes.dark}>
                        Os melhores carros SUV você encontra na Brasil Automóveis
                     </Typography>
                  </Box>
               </Grid>
            </Grid>

            <Container maxWidth='xl'>
               <Grid container justifyContent='space-between'>

                  <Grid item xs={12} md={3} className={classes.line}>
                     <Box mb={8} pr={{ xs: 0, md: 8 }}>
                        <Box mb={8}>
                           <Typography variant='h5' component='h4' className={classes.dark}>
                              Pesquise por aqui:
                           </Typography>
                        </Box>
                        <Box mb={8}>
                           <FormControl fullWidth>
                              {/*<InputLabel id="modelos-select-label">Informe o modelo</InputLabel>*/}
                              <TextField id="modelos-select-label" label="Informe o modelo" variant="outlined" onChange={filterModelo} />
                           </FormControl>
                        </Box>
                        <Box mb={8}>
                           <FormControl fullWidth>
                              <InputLabel id="marcas-select-label">Marca</InputLabel>
                              <Select 
                                 labelId="marcas-select-label"
                                 id="marcas-select"
                                 label="Marcas"
                                 onChange={filterMarca}
                              >
                                 <MenuItem value="">TODOS</MenuItem>
                                 <MenuItem value="CHEVROLET">CHEVROLET</MenuItem>
                                 <MenuItem value="CITROEN">CITROEN</MenuItem>
                                 <MenuItem value="FIAT">FIAT</MenuItem>
                                 <MenuItem value="FORD">FORD</MenuItem>
                                 <MenuItem value="HONDA">HONDA</MenuItem>
                                 <MenuItem value="HYUNDAI">HYUNDAI</MenuItem>
                                 <MenuItem value="JEEP">JEEP</MenuItem>
                                 <MenuItem value="KIA">KIA</MenuItem>
                                 <MenuItem value="NISSAN">NISSAN</MenuItem>
                                 <MenuItem value="PEUGEOT">PEUGEOT</MenuItem>
                                 <MenuItem value="RENAULT">RENAULT</MenuItem>
                                 <MenuItem value="TOYOTA">TOYOTA</MenuItem>
                                 <MenuItem value="VOLKSWAGEN">VOLKSWAGEN</MenuItem>
                              </Select>
                           </FormControl>
                        </Box>
                        <Box mb={8}>
                           <FormControl fullWidth>
                              <InputLabel id="ano-select-label">Ano</InputLabel>
                              <Select 
                                 labelId="ano-select-label"
                                 id="ano-select"
                                 label="Ano"
                                 onChange={filterAno}
                              >
                                 <MenuItem value="">TODOS</MenuItem>
                                 <MenuItem value="2015">2015</MenuItem>
                                 <MenuItem value="2016">2016</MenuItem>
                                 <MenuItem value="2017">2017</MenuItem>
                                 <MenuItem value="2018">2018</MenuItem>
                                 <MenuItem value="2019">2019</MenuItem>
                                 <MenuItem value="2020">2020</MenuItem>
                                 <MenuItem value="2021">2021</MenuItem>
                                 <MenuItem value="2022">2022</MenuItem>
                                 <MenuItem value="2023">2023</MenuItem>
                                 <MenuItem value="2024">2024</MenuItem>
                                 <MenuItem value="2025">2025</MenuItem>
                              </Select>
                           </FormControl>
                        </Box>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={9}>
                     <Box pl={{ xs: 0, md: 8 }}>
                        <Grid container justifyContent='flex-start' spacing={8}>
                           {/* eslint-disable-next-line */}
                           {filterRecords.map((veiculo, ind)=>(
                              <Grid item xs={12} md={4} key={ind}>
                                 <Box className={classes.box} key={veiculo.Codigo}>
                                    <Link to={`/veiculo/${veiculo.Codigo}`} className={classes.link}>
                                       {
                                          veiculo.FotoPrincipal ?

                                          <Grid
                                             container
                                             className={classes.imgBox}
                                             justifyContent='center'
                                             alignContent='center'
                                             style={{  
                                                backgroundImage: `url(${imagePath}${veiculo.FotoPrincipal})`,
                                                backgroundSize: 'cover',
                                             }}
                                          ></Grid>
                                          :
                                          <Grid
                                             container
                                             className={classes.imgBox}
                                             justifyContent='center'
                                             alignContent='center'
                                             style={{  
                                                backgroundImage: `url(${Thumb})`,
                                                backgroundSize: 'contain',
                                             }}
                                          ></Grid>
                                       }                                      
                                       <Box p={6}>
                                          <Box mb={6}>
                                             <Typography variant='h4' component='h4' className={classes.dark}>
                                                {veiculo.Marca} {veiculo.Modelo}
                                             </Typography>
                                             <Typography variant='body1' component='p' className={`${classes.versao} ${classes.contrastText}`}>
                                                {veiculo.Versao}
                                             </Typography>
                                          </Box>
                                          <Grid container alignSelf='flex-end' justifyContent='space-between' spacing={1}>
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
                                                {/* {veiculo.Preco > 0 ? veiculo.Preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "Sob consulta"} */}
                                             {/* </Button> */}
                                          {/* </Box> */}
                                       </Box>
                                    </Link>
                                 </Box>
                              </Grid>
                           ))}
                        </Grid>
                     </Box>
                  </Grid>

               </Grid>
            </Container>

         </Box>

         <PreencherFicha />
         <Footer />
      </div >

   );
}