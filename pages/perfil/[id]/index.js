
import comAutorizacao from '../../../hoc/comAutorizacao'; 
import Feed from '../../../componentes/feed';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil';
import UsuarioService from '../../../services/UsuarioService';

const usuarioService= new UsuarioService();

function Perfil ({usuarioLogado}){

    const [usuario,setUsuario]= useState({});
    const router=useRouter();

    const obterPerfil=async(idUsuario)=>{
        try{
            const {data}= await usuarioService.obterPerfil(idUsuario);
            return data;
        }catch(error){
            alert('Erro ao obter o perfil do usuario!');
        }
    }

    useEffect(()=>{      
        async function pegarRepos(){
                        
            if (!router.query.id){
                return;
            }

            const dadosPerfil=await obterPerfil(router.query.id);
            setUsuario(dadosPerfil);
            
        }
        pegarRepos();
        console.log(dadosPerfil);
    },[router.query.id]);

    return(
        <div className='paginaPerfil'>
            <CabecalhoPerfil 
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            />
            <Feed 
                usuarioLogado={usuarioLogado}
                idUsuario={usuario?._id}
            />
        </div>
    );
}

export default comAutorizacao(Perfil);