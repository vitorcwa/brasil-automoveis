import axios from 'axios';

const Api = axios.create({
   baseURL: 'https://api.github.com/users/',
   // baseURL: 'http://webapi.autocerto.com/api/IntegracaoSite/ObterVeiculo?token=qernF%2F0fB7xVR3iNqWeR9A%3D%3D&idVeiculo=',
});

export default Api;