import { useState } from 'react';
import CabecalhoComAcoes from '../../componentes/cabecalhoComAcoes';
import comAutorizacao from '../../hoc/comAutorizacao';
import UploadImagem from '../../componentes/uploadImagem'

import imagemPublicacao from '../../public/imagens/imagemPublicacao.svg';
import Botao from '../../componentes/botao';

function Publicacao(){

    const [imagem,setImagem]=useState();
    const [inputImagem, setInputImagem]=useState();

    return(
        <div className='paginaPublicacao  largura30pctDesktop'>
            <CabecalhoComAcoes 
                textoEsquerda='Cancelar'
                elementoDireita={'Avancar'}
                titulo='Nova Publicacao'
            />

            <hr className='linhaDivisoria'/>

            <div className='conteudoPaginaPublicacao'>
                <div className='primeiraEtapa'>
                    <UploadImagem
                        setImagem={setImagem}
                        aoSetarAReferencia={setInputImagem}
                        imagemPreviewClassName={!imagem?'previewImagemPublicacao' : 'previewImagemSelecionada'}
                        imagemPreview={imagem?.Preview||imagemPublicacao.src}

                    />
                    <span className='desktop textoDragAnDrop'>Arrate a sua foto aqui</span>
                    <Botao
                        texto='Selecionar Imagem'
                        manipularClique={()=>console.log('teste ok')}

                    />
                </div>


            </div>

        </div>
        

    );
}

export default comAutorizacao(Publicacao);
