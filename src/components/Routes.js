import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Veiculos from '../pages/Veiculos';
import Veiculo from '../pages/Veiculo';
import VeiculosHatch from '../pages/VeiculosHatch';
import VeiculosSedan from '../pages/VeiculosSedan';
import VeiculosSUV from '../pages/VeiculosSUV';
import NossoTime from '../pages/NossoTime';
import AproveCredito from '../pages/AproveCredito';

function Rotas() {
   return (
      <Router>
         <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/veiculos" element={<Veiculos/>} />
            <Route path="/veiculos/hatch" element={<VeiculosHatch/>} />
            <Route path="/veiculos/sedan" element={<VeiculosSedan/>} />
            <Route path="/veiculos/suv" element={<VeiculosSUV/>} />
            <Route path="/veiculo/:id" element={<Veiculo/>} />
            <Route path="/nosso-time" element={<NossoTime/>} />
            <Route path="/aprove-seu-credito/" element={<AproveCredito/>} />
         </Routes>
      </Router>
   );
}

export default Rotas;