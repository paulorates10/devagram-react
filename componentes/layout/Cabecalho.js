
import Image from 'next/image';
import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg';
import Navegacao from '../layout/Navegacao';
import { useState } from 'react';
import ResultadoPesquisa from './resultadoPesquisa';


export default function Cabecalho(){
    const [resultadoPesquisa, setResultadoPesquisa]= useState([]);
    const [termoPesquisado, setTermoPesquisado]=useState([]);

    const aoPesquisar=(e)=>{
        setTermoPesquisado(e.target.value);
        setResultadoPesquisa([]);

        if(termoPesquisado.length<3){
            return;
        }

        setResultadoPesquisa([
            {   
                avatar: '',
                nome:'Paulo',
                email: 'paulo_rates@Hotmail.com',
                _id:'123456'
            },
            {   
                avatar: '',
                nome:'Daniel',
                email: 'daniel@Hotmail.com',
                _id:'1234567'
            },
            {   
                avatar: '',
                nome:'Rafael',
                email: 'rafael@Hotmail.com',
                _id:'1234568'
            }
        ])
    
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