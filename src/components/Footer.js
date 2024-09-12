import React from 'react';
import {
  makeStyles, Container, Typography, Grid, Box, Link
} from '@material-ui/core';
import FloatingWhatsApp from 'react-floating-whatsapp';
import '../services/floating-whatsapp.css';


// Icons
import { WhatsApp, Phone } from '@material-ui/icons';
import { Icon } from '@iconify/react';

// Images
import Logo from '../images/logo-white.webp';
import Avatar from '../images/roster.webp';

const useStyles = makeStyles((theme) => ({
  bg: {
    background: theme.palette.primary.contrastText,
  },
  white: {
    color: theme.palette.common.white,
  },
  hr: {
    height: '0',
    border: '1px solid rgba(236, 239, 246, 0.1)',
    margin: '2rem 0 1rem 0',
  },
  icon: {
    fontSize: '1.25rem',
    margin: '0 0.3rem',
    color: theme.palette.common.grey,
    // width: '1.25rem !important',
    // height: '1.25rem !important',
    // margin: '0 0.5rem 0 0',
  },
  link: {
    color: theme.palette.common.white,
    display: 'block',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    fontWeight: '400',
    marginBottom: '0.5rem',
    fontFamily: 'Inter, sans-serif',
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
}));

export default function Footer() {
  const classes = useStyles();
  return (

    <Box className={classes.bg} pt={20} pb={10} px={6}>
      <Container>

        <Grid container justifyContent='flex-start'>

          {/* Logo */}
          <Grid item xs={12} md={3}>
            <Box mb={8}>
              <a href='/'><img src={Logo} alt='Logo' /></a>
            </Box>
          </Grid>

          <Grid item md={3}>
            <Box mb={4}>
              <Typography variant='h5' component='h5' className={classes.white}>Endereço</Typography>
            </Box>
            <Box className={classes.white} mb={8}>
              <Typography variant='body2' component='p'>
                Av. Automóvel Clube, nº 1951<br />
                Vilar dos Teles - RJ
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant='h5' component='h5' className={classes.white}>Nossos horários</Typography>
            </Box>
            <Box mb={8}>
              <Grid container justifyContent='flex-start' direction='column' alignItems='flex-start' alignContent='flex-start'>
                <Grid item>
                  <Typography variant='body2' component='p' className={classes.white}>
                    De segunda a sexta das 8h às 18:30h
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2' component='p' className={classes.white}>
                    Sábado de 8h às 16h
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Central de atendimento */}
          <Grid item md={4}>
            <Typography variant='h5' component='h5' className={classes.white}>Central de atendimento</Typography>
            <Box mt={4} mb={0}>
              <Grid container justifyContent='flex-start' alignItems='center' alignContent='center'>
                <Grid item>
                  <Phone className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant='body2' component='p' className={classes.white}>
                    (21) 2662-6926
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mb={8}>
              <Grid container justifyContent='flex-start' alignItems='center' alignContent='center'>
                <Grid item>
                  <WhatsApp className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant='body2' component='p' className={classes.white}>
                    <Link className={classes.white} href='https://api.whatsapp.com/send?phone=5521986900206&text=Oi,%20eu%20quero%20falar%20com%20um%20consultor!'>(21) 98690-0206</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mb={4}>
              <Typography variant='h5' component='h5' className={classes.white}>Nos acompanhe nas redes sociais</Typography>
            </Box>
            <Box mb={8}>
              <Link className={classes.white} href='https://www.instagram.com/brasilautomoveis/' target="_blank">
                <Icon icon="fa-brands:instagram" className={classes.icon} />
              </Link>
              <Link className={classes.white} href='https://www.facebook.com/brasilautomoveissjm' target="_blank">
                <Icon icon="fa-brands:facebook" className={classes.icon} />
              </Link>
              <Link className={classes.white} href='https://www.youtube.com/channel/UCPSrCEsbwamNonL5dzLhWWg' target="_blank">
                <Icon icon="fa-brands:youtube" className={classes.icon} />
              </Link>
              <Link className={classes.white} href='https://www.tiktok.com/@brasilautomoveis01' target="_blank">
                <Icon icon="fa-brands:tiktok" className={classes.icon} />
              </Link>
            </Box>
          </Grid>

          {/* Navegue nas páginas */}
          <Grid item md={2}>
            <Box mb={4}>
              <Typography variant='h5' component='h5' className={classes.white}>Navegue nas páginas</Typography>
            </Box>
            <Link className={classes.link} href='/' >Home</Link>
            <Link className={classes.link} href='/seminovos'>Seminovos</Link>
            <Link className={classes.link} href='https://promo.brasilautomoveisrj.com.br/consignado/'>Quero Vender</Link>
            <Link className={classes.link} href='https://promo.brasilautomoveisrj.com.br/cacadores/'>Car Hunter</Link>
            <Link className={classes.link} href='/nosso-time'>Nosso Time</Link>
            <Link className={classes.link} href='/aluguel'>Aluguel</Link>
          </Grid>

        </Grid>

        <hr className={classes.hr} />

        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography variant='body2' component='span' className={classes.white}>
              Copyright © Brasil Automóveis - Todos os direitos reservados
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' component='span' className={classes.white}>
              <Box mr={1} component='span'>Desenvolvido por</Box>
            </Typography>
            <Link href='https://www.cwa.digital/' target='_blank' className={`${classes.white} ${classes.fontBold}`}>
              <Typography variant='body2' component='span'>
                Cwa Digital
              </Typography>
            </Link>
          </Grid>
        </Grid>

      </Container>

      <FloatingWhatsApp
        className='whats'
        phoneNumber='5521986900206'
        accountName='Raquel da Brasil'
        avatar={Avatar}
        statusMessage='Responde rápido em horário comercial'
        chatMessage='Olá! 😊 
        Como podemos ajudar?'
        placeholder='Escreva sua mensagem...'
      />

    </Box>
  );
}