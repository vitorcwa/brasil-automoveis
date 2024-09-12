import React from 'react';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Routes from './components/Routes';

const useStyles = makeStyles((theme) => ({
  body: {
    margin: '0',
  },
  bgColor: {
    backgroundColor: '#2D2D2D',
  },
  button: {
    color: 'white',
    boxShadow: 'none',
    borderRadius: '25px',
    textTransform: 'none',
    padding: '0.5rem 2.5rem',
    fontSize: '1rem',
    fontWeight: '700',
    backgroundColor: theme.palette.primary.main,
    '&hover': {
      boxShadow: '0px 6px 30px rgba(240, 201, 0, 0.6)',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const theme = createTheme({
  root: {
    height: '100vh',
    backgroundColor: '#2D2D2D',
  },
  spacing: 4,
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      grey: '#7F868C',
    },
    primary: {
      //Amarelo
      // '#E1A938',
      main: '#F0C900',
      dark: '#E0B600',
      light: '#F6EDBB',
      contrastText: '#181D21',
    },
    secondary: {
      // Azul petrólro
      main: '#557490',
      dark: '#3E5A70',
      light: '#ECEFF6',
      contrastText: '#7F868C',
    },
  },
  typography: {
    fontFamily: [
      'Inter, sans-serif'
    ].join(','),
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'none',
    fontWeight: 'bold',
  },
});

theme.typography.h1 = {
  fontSize: '2.5rem',
  lineHeight: '3rem',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontWeight: '800',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },
};
theme.typography.h2 = {
  fontSize: '2rem',
  lineHeight: '2rem',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
  },
};
theme.typography.h3 = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
};
theme.typography.h4 = {
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.4rem',
  },
};
theme.typography.h5 = {
  fontSize: '1rem',
  lineHeight: '1.25rem',
  fontWeight: '600',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.down('sm')]: {

  },
};
theme.typography.body1 = {
  fontSize: '1rem',
  lineHeight: '1.35rem',
  fontWeight: '400',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.down('sm')]: {

  },
};
theme.typography.body2 = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '400',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.down('sm')]: {

  }
};

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
