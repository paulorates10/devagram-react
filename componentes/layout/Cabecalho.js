
import Image from 'next/image';
import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg';
import Navegacao from '../layout/Navegacao';
import { useState } from 'react';
import ResultadoPesquisa from './resultadoPesquisa';
import UsuarioService from '@/services/UsuarioService';

const usuarioService= new UsuarioService();


export default function Cabecalho(){
    const [resultadoPesquisa, setResultadoPesquisa]= useState([]);
    const [termoPesquisado, setTermoPesquisado]=useState('');

    const aoPesquisar=async(e)=>{
        setTermoPesquisado(e.target.value);
        setResultadoPesquisa([]);

        if(termoPesquisado.length<2){
            return;
        }

        try{
            const {data}= await usuarioService.pesquisar(termoPesquisado);
            setResultadoPesquisa(data);

        }catch(error){
            alert('Erro ao pesquisar usuario: ' + error?.response?.data?.erro);
        }
    
    
    }

    const aoClicarResultadoPesquisa=(id)=>{
        console.log('aoClicarResultadoPesquisa',{id})          
    }

    return(
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}
                        alt='logo devagram'                       
                    />

                </div>
                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image
                            src={imagemLupa}
                            alt='logo devagram'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={termoPesquisado}
                        onChange={aoPesquisar}
                    />
                </div>

                <Navegacao className='desktop'/>

            </div>
            
            {resultadoPesquisa.length>0 && (                
                <div className='resultadoPesquisaContainer'>
                    {resultadoPesquisa.map(r=>(
                        <ResultadoPesquisa
                            avatar={r.avatar}
                            nome={r.nome}
                            email={r.email}
                            key={r._id}
                            id={r.id}
                            onClik={aoClicarResultadoPesquisa}
                        />
                    ))}
                </div>
            )}
        </header>

    );
}