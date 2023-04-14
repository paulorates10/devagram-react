import Botao from '../botao';
import Avatar from '../avatar';

import imgSetaEsquerda from '../../public/imagens/setaEsquerda.svg';
import CabecalhoComAcoes from '../cabecalhoComAcoes';


export default function CabecalhoPerfil({
    usuario
}){
    return(
        <div className='cabecalhoPerfil'>
            <CabecalhoComAcoes
                iconeEsquerda={imgSetaEsquerda}
                titulo={usuario.nome}
            />
            <div className='statusPerfil largura30pctDesktop'>
                <Avatar src={usuario.avatar}/>
                <div className='informacoesPerfil'>
                    <div className='statusContainer'>
                        <div className='status'>
                            <strong>15</strong>
                            <span>Publicacoes</span>

                        </div>
                        <div className='status'>
                            <strong>120</strong>
                            <span>seguidores</span>

                        </div>
                        <div className='status'>
                            <strong>135</strong>
                            <span>Seguindo</span>

                        </div>
                       
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