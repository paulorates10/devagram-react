
import comAutorizacao from '../../../hoc/comAutorizacao'; 
import Feed from '../../../componentes/feed';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil';

 

function Perfil ({usuarioLogado}){

    const [usuario,setUsuario]= useState({});
    const router=useRouter();

    useEffect(()=>{
        async function pegarRepos(){
            setUsuario({
                nome: 'Nome Teste'
            });
            
        }
        pegarRepos();
        console.log('passando aqui 1');
    },[router.query.id]);

    return(
        <div className='paginaPerfil'>
            <CabecalhoPerfil 
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            />
            <Feed usuarioLogado={usuarioLogado}/>
        </div>
    );
}

export default comAutorizacao(Perfil);