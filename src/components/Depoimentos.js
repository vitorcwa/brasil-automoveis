import React from 'react';
import { makeStyles, Container, Typography, Grid, Box } from '@material-ui/core';

import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#2D2D2D',
   },
   bgGrey: {
      backgroundColor: '#F2F2F2 !important',
   },
   box: {
      minHeight: '185px',
      overflow: 'hidden',
      borderRadius: '25px',
      padding: '2.5rem',
      backgroundColor: theme.palette.secondary.light,
      [theme.breakpoints.down('sm')]: {
         padding: '2rem',
      }
   },
   icon: {
      width: '1.5rem !important',
      height: '1.5rem !important',
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
      color: theme.palette.secondary.contrastText,
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
   link: {
      textDecoration: 'none !important',
   },
}));

export default function Home() {
   const classes = useStyles();

   return (

      <Box pt={20} pb={20} px={{ xs: 4, md: 0 }}>
         <Container>

            <Grid container justifyContent='center' textAlign='center'>
               <Box justifyContent='center' textAlign='center'>
                  <Box mb={3} className={classes.rule} mx='auto' />
                  <Box mb={3}>
                     <Typography variant='h2' component='h2' className={classes.dark}>
                        Depoimentos
                     </Typography>
                  </Box>
                  <Typography variant='body2' component='p' className={classes.contrastText}>
                     Quem já realizou o sonho com a Brasil recomenda.
                  </Typography>
               </Box>
            </Grid>

            <Box mt={12} mb={8}>
               <Grid container justifyContent='space-between' spacing={8}>

                  {/* Depoimento 1 */}
                  <Grid item md={4}>
                     <a
                        href='https://g.co/kgs/K7GLMk'
                        target='_blank'
                        rel="noreferrer"
                        className={classes.link}
                     >
                        <Box className={`${classes.box}`}>
                           <Grid container justifyContent='space-between'>
                              <Grid item xs={2}>
                                 <img
                                    src='https://lh3.googleusercontent.com/a-/AOh14GgX37gUSq-slPrUuYF7wNkB1H-xDo1F9bFBhhOKVA=s40-c-c0x00000000-cc-rp-mo-br100'
                                    alt='Brasil Automoóveis'
                                 />
                              </Grid>
                              <Grid item xs={10}>
                                 <Box pl={{ xs: 2, md: 0 }}>
                                    <Typography variant='h4' component='h4' className={classes.dark}>
                                       Ótima avaliação do meu carro!
                                    </Typography>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Box my={2}>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       Ótima avaliação do meu carro, taxas baixas e parcela do jeito que eu queria...
                                       Estou satisfeita com a minha compra, sonho realizado!
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Typography variant='body2' component='p' className={classes.contrastText}>
                                    Célia Regina
                                 </Typography>
                              </Grid>
                           </Grid>
                        </Box>
                     </a>
                  </Grid>

                  {/* Depoimento 2 */}
                  <Grid item md={4}>
                     <a
                        href='https://g.co/kgs/eB3X4D'
                        target='_blank'
                        rel="noreferrer"
                        className={classes.link}
                     >
                        <Box className={`${classes.box}`}>
                           <Grid container justifyContent='space-between' spacing={2}>
                              <Grid item xs={2}>
                                 <img
                                    src='https://lh3.googleusercontent.com/a-/AOh14GiKw48A0NiuW2YFVzKZsOKDeNK81GfhjnBuCqiUgA=s40-c-c0x00000000-cc-rp-mo-br100'
                                    alt='Brasil Automoóveis'
                                 />
                              </Grid>
                              <Grid item xs={10}>
                                 <Box pl={{ xs: 2, md: 0 }}>
                                    <Typography variant='h4' component='h4' className={classes.dark}>
                                       Estoque diferenciado!
                                    </Typography>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Box my={2}>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       Estoque diferenciado e todos os profissionais são ótimos no atendimento
                                       e as condições para compra são ótimas.
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Typography variant='body2' component='p' className={classes.contrastText}>
                                    Ueslei de Oliveira
                                 </Typography>
                              </Grid>
                           </Grid>
                        </Box>
                     </a>
                  </Grid>

                  {/* Depoimento 3 */}
                  <Grid item md={4}>
                     <a
                        href='https://g.co/kgs/pCpLDf'
                        target='_blank'
                        rel="noreferrer"
                        className={classes.link}
                     >
                        <Box className={`${classes.box}`}>
                           <Grid container justifyContent='space-between' spacing={2}>
                              <Grid item xs={2}>
                                 <img
                                    src='https://lh3.googleusercontent.com/a-/AOh14GiNq6WdBdbS-wg8J9uEuMzbTKV6EQitrfzKlFdMlg=s40-c-c0x00000000-cc-rp-mo-br100'
                                    alt='Brasil Automoóveis'
                                 />
                              </Grid>
                              <Grid item xs={10}>
                                 <Box pl={{ xs: 2, md: 0 }}>
                                    <Typography variant='h4' component='h4' className={classes.dark}>
                                       O melhor atendimento!
                                    </Typography>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                       <StarIcon className={classes.icon} />
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Box my={2}>
                                    <Typography variant='body2' component='p' className={classes.contrastText}>
                                       Carros todos revisados, com laudo cautelar, garantia,
                                       e o melhor atendimento do Rio de Janeiro!
                                       Super indico essa empresa maravilhosa.
                                    </Typography>
                                 </Box>
                              </Grid>
                              <Grid item xs={12}>
                                 <Typography variant='body2' component='p' className={classes.contrastText}>
                                    Paola Moreno
                                 </Typography>
                              </Grid>
                           </Grid>
                        </Box>
                     </a>
                  </Grid>

               </Grid>
            </Box>

         </Container>
      </Box>

   );
}