import React from 'react';
import { makeStyles, Button, MenuItem, Fade, Menu, Link } from '@material-ui/core';

//ICONS
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  hambMenu: {
    color: theme.palette.common.black,
    fontSize: '2rem',
  },
  menuItem: {
    padding: '.5rem 1.5rem',
    fontSize: '1rem',
    lineHeight: '2rem',
    fontFamily: 'Roboto, sans-serif',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:focus, &:hover': {
      color: theme.palette.common.white,
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      color: 'rgba(0,0,0,0.7)',
      '&:focus, &:hover': {
        color: theme.palette.secondary.main,
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
}));


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.hambMenu} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className={classes.MenuMobile}
      >
        <MenuItem>
          <Link className={classes.menuItem} href='/'>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuItem} href='/veiculos'>Seminovos</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuItem} href='https://promo.brasilautomoveisrj.com.br/consignado'>Quero vender</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuItem} href='https://promo.brasilautomoveisrj.com.br/cacadores/'>Car Hunter</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuItem} href='/nosso-time'>Nosso time</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuItem} href='https://www.locafacilaluguel.com.br/' target='_blank'>Aluguel</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
