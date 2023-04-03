import { useEffect, useState } from "react";
import Home from "../componentes/home";
import Login from "../componentes/login";
import UsuarioService from "../servives/UsuarioService"; 

const usuarioService= new UsuarioService();
export default function index() {
  
    const [estaAutenticado, setEstaAutenticado]= useState(false);

    useEffect(()=>{
        setEstaAutenticado(
            usuarioService.estaAutenticado()
        );
    }, []);

    if(estaAutenticado){
        return <Home />;
    }

    return <Login aposAutenticacao={()=> setEstaAutenticado(true)}/>
}