import Head from 'next/head'
import Image from 'next/image'
import Botao from '../componentes/botao'
import Avatar from '../componentes/avatar'

export default function Home() {
  return (
      <>
        <h1>Ola mundo</h1>
        <div style={{width:200}}>
          <Avatar/>
          <Botao texto={'Login'} cor='primario' manipularClique={()=>console.log('Botao clicado')}/>
        </div>
      </>
    )
}
