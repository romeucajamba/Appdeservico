import { Axios } from "axios";

//Consumo de api
//É só passar onde você quiser
const api = Axios.create({
    //Essa url é de uma empresa brasileira que disponibilizou essa api para serviços.
    baseURL: "https://viacep.com.br/ws/01001000/json/", //Url que contém os dados que vamos consumir.
})

export default api;