import React from 'react';
import { makeStyles, Container, Grid, Box } from '@material-ui/core';

// import ImgTypography from '../images/typography.webp';
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BgHeader from '../images/header-banner.webp';
import BgHeaderMobile from '../images/header-mobile.webp';

// Slide para as fotos
import Slider from "react-slick";
import '../services/slick.css';
import '../services/slick-theme.css';

const useStyles = makeStyles((theme) => ({
   section: {
      marginTop: '96px',
      minHeight: '595px',
      height: 'auto',
      maxHeight: '750px',
      width: '100%',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundColor: theme.palette.secondary.light,
      backgroundImage: `url(${BgHeader})`,
      [theme.breakpoints.down('sm')]: {
         height: '480px',
         marginTop: '88px',
         backgroundImage: `url(${BgHeaderMobile})`,
      },
   },
   typography: {
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%',
      height: 'auto',
      zIndex: '0',
   },
   container: {
      paddingTop: '6rem',
      position: 'relative',
      zIndex: '1',
   },
   buttonLabel: {
      textTransform: 'none',
   },
   button: {
      color: theme.palette.primary.contrastText,
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
   }
}));

export default function HeaderBanner(props) {
   const classes = useStyles();

   // Slide na Header
   var settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 720,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 0,
               autoplay: true,
               autoplaySpeed: 3000,
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
      <Grid className={classes.section}>
         <Container className={classes.container}>
            <Box py={{ xs: 4, md: 4 }}>
               <Slider {...settings}>
                  <Box>
                     <Grid container direction='row' justifyContent='space-around' alignItems='center' alignContent='center'>
                        {/* <Grid item md='5' className={props.classBoxText}>
                           <Box mt={{ xs: 6, md: -28 }} pl={{ xs: 4, md: 0 }} pr={{ xs: 4, md: 0 }}>
                              <Typography variant='body2' component='h2'>
                                 <Box mb={2} className={props.classSubTitle}>
                                    <LocalFireDepartmentIcon className={classes.icon} />
                                    {props.subtitle}
                                 </Box>
                              </Typography>
                              <Typography variant='h1'>
                                 <Box mb={6} className={props.classTitle}>{props.title}</Box>
                              </Typography>
                              <Typography variant='body1'>
                                 <Box mb={{ xs: 12 }} className={props.classDescription}>{props.description}</Box>
                              </Typography>
                              <Button color='secondary' variant='contained' href={props.linkButton} target='_blank'
                                 classes={{
                                    root: classes.button,
                                    label: classes.buttonLabel,
                                 }}>{props.buttonLabel}
                              </Button>
                           </Box>
                        </Grid> */}
                        <Grid item md='12' className={props.classBoxImage}>
                           <Box mt={{ xs: 16, md: 0 }} mb={{ xs: -10, md: 0 }} pr={{ xs: 8, md: 0 }}>
                              <img src={props.image} alt={props.imageAlt} className={props.classImage} width='100%' />
                           </Box>
                        </Grid>
                     </Grid>
                  </Box>
               </Slider>
            </Box>
         </Container>
         {/* <img className={classes.typography} src={ImgTypography} alt='Brasil Automóveis' width='100%' /> */}
      </Grid>
   );
}