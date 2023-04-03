import HttpService from "./HttpService";

export default class UsuarioService extends HttpService{
    async login(){

    }

    async cadastro(){
        return this.post('/cadastro',dados)
    }

}