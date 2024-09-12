import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Veiculos() {
   // Filtros de Marcas e Modelos
   const [marca, setMarca] = React.useState('');
   const handleChange = (event) => {
      setMarca(event.target.value);
   };
   
   useEffect(() => {
      fetch('https://webapi.autocerto.com/api/IntegracaoSite/ObterVeiculos?token=qernF%2F0fB7xVR3iNqWeR9A%3D%3D')
         .then(response => response.json())
         .then(data => setMarca(data))
   }, []);

   return (

      <Box>
         <FormControl fullWidth>
            <InputLabel id="marcas-select-label">Marcas</InputLabel>
            <Select
               labelId="marcas-select-label"
               id="marcas-select"
               value={marca}
               label="Marcas"
               onChange={handleChange}
            >
               <MenuItem value=''>TODOS</MenuItem>
               <MenuItem value={5}>CHEVROLET</MenuItem>
               <MenuItem value={7}>CITROEN</MenuItem>
               <MenuItem value={13}>FIAT</MenuItem>
               <MenuItem value={14}>FORD</MenuItem>
               <MenuItem value={16}>HONDA</MenuItem>
               <MenuItem value={18}>HYUNDAI</MenuItem>
               <MenuItem value={21}>JEEP</MenuItem>
               <MenuItem value={33}>NISSAN</MenuItem>
               <MenuItem value={36}>RENAULT</MenuItem>
               <MenuItem value={42}>TOYOTA</MenuItem>
               <MenuItem value={44}>VOLKSWAGEN</MenuItem>
            </Select>
         </FormControl>
      </Box>

   );
}