import React from 'react';
import { Button, makeStyles, Typography, Container, Grid, Box } from '@material-ui/core';

import ImgTypography from '../images/typography.webp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const useStyles = makeStyles((theme) => ({
   section: {
      height: '740px',
      maxHeight: '800px',
      position: 'relative',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]: {
         maxHeight: '100%',
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
      paddingTop: '96px',
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
      backgroundColor: theme.palette.common.white,
      '&:hover': {
         boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6) !important',
         backgroundColor: theme.palette.primary.dark,
      },
   },
   icon: {
      float: 'left',
      fontSize: '2rem',
      margin: '-7px 5px 0 0',
      color: theme.palette.common.black,
   }
}));

export default function HeaderContainer(props) {
   const classes = useStyles();
   return (
      <Grid className={classes.section}>
         <Container className={classes.container} maxWidth="lg" >
            <Box py={{ xs: 4, md: 4 }}>
               <Grid container direction='row' justifyContent='space-between' alignItems='center' alignContent='center'>
                  <Grid item md='4' className={props.classBoxText}>
                     <Box mt={{ xs: 6, md: -28 }} pl={{ xs: 4, md: 0 }} pr={{ xs: 4, md: 0 }}>
                        <Typography variant='body2' component='h2'>
                           <Box mb={2} className={props.classSubTitle}>
                              <LocalFireDepartmentIcon className={classes.icon} />
                              {props.subtitle}
                           </Box>
                        </Typography>
                        <Typography variant='h1'>
                           <Box mb={6} pr={{ xs: 12, md: 12 }} className={props.classTitle}>{props.title}</Box>
                        </Typography>
                        <Grid item xs={12} md={10}>
                           <Typography variant='body1'>
                              <Box mb={{ xs: 12 }} className={props.classDescription}>{props.description}</Box>
                           </Typography>
                        </Grid>
                        <Button color='secondary' variant='contained' href={props.linkButton}
                           classes={{
                              root: classes.button,
                              label: classes.buttonLabel,
                           }}>{props.buttonLabel}
                        </Button>
                     </Box>
                  </Grid>
                  <Grid item md='8' className={props.classBoxImage}>
                     <Box mt={{ xs: 16, md: 0 }} mb={{ xs: -10, md: 0 }} pr={{ xs: 8, md: 0 }}>
                        <img src={props.image} alt={props.imageAlt} className={props.classImage} width='100%' />
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </Container>
         <img className={classes.typography} src={ImgTypography} alt='Brasil Automóveis' width='100%' />
      </Grid>
   );
}