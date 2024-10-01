import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Container, Grid, Box } from '@material-ui/core';
import TopBarMobile from './TopBarMobile';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

//IMAGES
import Logo from '../images/logo.webp';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
    padding: '1rem 0',
  },
  appBarColor: {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: '0px -2px 13px #CCC',
  },
  grow: {
    flexGrow: 1,
  },
  buttonOutline: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '25px',
    padding: '0.5rem 2.5rem',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    }
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'none',
    fontWeight: 'bold',
  },
  slide: {
    backgroundColor: '#000',
  },
  menuItem: {
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '2rem',
    color: theme.palette.common.black,
    transitionDuration: '400ms',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro',
    '&:focus, &:hover': {
      color: theme.palette.common.white,
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      color: 'rgba(0,0,0,0.7)',
      '&:focus, &:hover': {
        color: theme.palette.common.white,
        textDecoration: 'none',
      },
    },
  },
  icons: {
    //paddingRight: theme.spacing(0),
    color: 'white',
    fontSize: '1rem',
    paddingLeft: '.6rem',
    paddingRight: '.6rem',
    [theme.breakpoints.down('sm')]: {
      color: 'rgba(0,0,0,0.6)',
    },
  },
  button: {
    color: 'white',
    boxShadow: 'none !important',
    borderRadius: '25px',
    textTransform: 'none',
    padding: '0.5rem 2.5rem',
    fontSize: '1rem',
    fontWeight: '700',
    backgroundColor: theme.palette.primary.main,
    '&hover': {
      opacity: '0.9',
      backgroundColor: 'linear-gradient(90deg, rgba(0,74,172,1) 0%, rgba(0,52,120,1) 100%);',
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {

  const classes = useStyles();
  const [appbar, setAppbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 175) {
      setAppbar(true);
    } else {
      setAppbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (

    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color='inherit' className={`${classes.appBar} ${appbar ? classes.appBarColor : ''}`}>
          <Toolbar>
            <Container>
              <Grid container justifyContent='space-between' alignItems='flex-start' >

                {/* Menu de navegação esquerda */}
                <Grid item xs={0} md={3} className={classes.menuItem}>
                  <Box display={{ xs: 'none', sm: 'none', md: 'flex' }} justifyContent='center' flexWrap='nowrap'>
                    {/* <Box component="Box" display="flex" flexDirection="row" justifyContent="center" flexWrap="nowrap"> */}
                    <Grid container justifyContent='space-between'>
                      <Grid item><a className={classes.menuItem} href='/'>Home</a></Grid>
                      <Grid item><a className={classes.menuItem} href='/veiculos'>Seminovos</a></Grid>
                      <Grid item><a className={classes.menuItem} href='https://promo.brasilautomoveisrj.com.br/consignado'>Quero vender</a></Grid>
                    </Grid>
                    {/* </Box> */}
                  </Box>
                </Grid>

                {/* Logo */}
                <Grid item xs={10} md={6}>
                  <Box textAlign={{ xs:'left', md:'center' }}>
                    <a href='/'><img src={Logo} alt='Logo' /></a>
                  </Box>
                </Grid>

                {/* Menu de navegação direita */}
                <Grid item xs={0} md={3}>
                  <Box display={{ xs: 'none', sm: 'none', md: 'flex' }} justifyContent='center' flexWrap='nowrap'>
                    {/* <Box component="Box" display="flex" flexDirection="row" justifyContent="center" flexWrap="nowrap"> */}
                    <Grid container justifyContent='space-between'>
                      <Grid item><a className={classes.menuItem} href='https://promo.brasilautomoveisrj.com.br/cacadores/'>Car Hunter</a></Grid>
                      {/* <Grid item><a className={classes.menuItem} href='/nosso-time'>Nosso time</a></Grid> */}
                      <Grid item><a
                        className={classes.menuItem}
                        href='https://www.locafacilaluguel.com.br/'
                        target='_blank'
                        rel="noreferrer">
                        Aluguel
                      </a></Grid>
                    </Grid>
                    {/* </Box> */}
                  </Box>
                </Grid>

                {/* Mobile */}
                <Grid item xs={2} md={0}>
                  <Box display={{ xs: 'flex', sm: 'flex', md: 'none' }}>
                    <TopBarMobile />
                  </Box>
                </Grid>

              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>

  );
}