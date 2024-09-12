import React from 'react';
import { makeStyles, Container, Typography, Grid, Box } from '@material-ui/core';

// Icons
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      padding: '2rem',
      minHeight: '230px',
      borderRadius: '25px',
      borderWidth: '1px',
      borderColor: theme.palette.secondary.light,
      borderStyle: 'solid',
      backgroundColor: '#FFF !important',
   },
   icon: {
      width: '1.5rem !important',
      height: '1.5rem !important',
      margin: '0',
      color: theme.palette.primary.dark,
   },
   iconBg: {
      width: '1.5rem !important',
      height: '1.5rem !important',
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
}));

export default function Home() {
   const classes = useStyles();

   return (

      <Box pt={20} pb={20} px={4}>
         <Container>

            <Grid container justifyContent='space-between' alignItems='center'>
               <Grid md={7}>
                  <Box mb={3} className={classes.rule} />
                  <Typography variant='h2' component='h2' className={classes.dark}>
                     Super vantagens da Brasil
                  </Typography>
               </Grid>
            </Grid>

            <Box mt={12} mb={4}>
               <Grid container justifyContent='space-between' spacing={8}>

                  <Grid item md={3}>
                     <Box className={`${classes.box}`}>
                        <Box className={classes.iconBg} mb={4}>
                           <StarIcon className={classes.icon} />
                        </Box>
                        <Typography variant='h4' component='h3' className={classes.dark}>
                           O melhor estoque do Rio de Janeiro
                        </Typography>
                        <Box mt={4}>
                           <Typography variant='body1' component='p' className={classes.contrastText}>
                              Somos cuidadosos e criteriosos, nossos carros possuem aprovação
                              <span className={classes.bold}> por laudo cautelar e são 100% revisados.</span>
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item md={3}>
                     <Box className={`${classes.box}`}>
                        <Box className={classes.iconBg} mb={4}>
                           <AttachMoneyIcon className={classes.icon} />
                        </Box>
                        <Typography variant='h4' component='h3' className={classes.dark}>Lucro na Troca</Typography>
                        <Box mt={4}>
                           <Typography variant='body1' component='p' className={classes.contrastText}>
                              Aqui na Brasil garantimos a melhor avaliação do seu usado.
                              <span className={classes.bold}> Quem compara não perde tempo e fecha negócio com a Brasil.</span>
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item md={3}>
                     <Box className={`${classes.box}`}>
                        <Box className={classes.iconBg} mb={4}>
                           <TrendingDownIcon className={classes.icon} />
                        </Box>
                        <Typography variant='h4' component='h3' className={classes.dark}>As menores taxas</Typography>
                        <Box mt={4}>
                           <Typography variant='body1' component='p' className={classes.contrastText}>
                              Negociamos com os principais bancos e financeiras
                              <span className={classes.bold}> os menores juros do Rio.</span>
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item md={3}>
                     <Box className={`${classes.box}`}>
                        <Box className={classes.iconBg} mb={4}>
                           <AccountBalanceWalletIcon className={classes.icon} />
                        </Box>
                        <Typography variant='h4' component='h3' className={classes.dark}>Financiamento flexível</Typography>
                        <Box mt={4}>
                           <Typography variant='body1' component='p' className={classes.contrastText}>
                              Entrada parcelada em até
                              <span className={classes.bold}> 21x</span> e primeira parcela para
                              <span className={classes.bold}> até 120 dias.</span>
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>

               </Grid>
            </Box>

         </Container>
      </Box>

   );
}