import CabecalhoComAcoes from '../cabecalhoComAcoes';
import Botao from '../botao';
import Avatar from '../avatar';

import imgSetaEsquerda from '../../public/imagens/setaEsquerda.svg';


export default function CabecalhoPerfil(
    usuario
){
    return(
        <div className='cabecalhoPerfil'>
            <CabecalhoComAcoes
                iconeEsquerda={imgSetaEsquerda}
                titulo={usuario.nome}
            />
            <div className='StatusPerfil'>
                <Avatar src={usuario.avatar}/>
                <div className='informacoesPerfil'>
                    <div className='statusContainer'>
                        <strong>15</strong>
                        <span>Publicacoes</span>

                    </div>
                    <div className='statusContainer'>
                        <strong>120</strong>
                        <span>seguidores</span>

                    </div>
                    <div className='statusContainer'>
                        <strong>135</strong>
                        <span>Seguindo</span>

                    </div>
                    <Botao
                        texto={'seguir'}
                        cor='primaria'
                    />
                </div>

            </div>
        </div>
        
    );
}