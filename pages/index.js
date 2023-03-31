import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'
import {UploadImagem} from '../componentes/uploadImagem'


export default function Home() {
  const [imagem,setImagem]= useState(null);
  const referenciaInput= useRef(null);

  console.log(imagem);

  return (
      <>
        <h1>Ola mundo</h1>
        <button onClick={()=>referenciaInput?.current.click()}>abrir seletor de arquivo</button>

        <UploadImagem 
          setImagem={setImagem} 
          imagemPreview={imagem?.preview}
          aoSetarAReferencia={(ref)=>referenciaInput.current=ref}
        />

        <div style={{width:200}}>
          <Avatar/>
          <Botao texto={'Login'} cor='primario' manipularClique={()=>console.log('Botao clicado')}/>
        </div>
      </>
    )
}
