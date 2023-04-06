import { useState, useEffect } from "react";
//import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

export function Feed({usuarioLogado}){
    const [listaDePostagens,setListaDePostagens]=useState([]);

    useEffect(() => {
        console.log('carregar o feed');
        setListaDePostagens([
            {
                id: '234',
                usuario: {
                    id: '123',
                    nome: 'Paulo',
                    avatar: null
                },
                fotoDoPost: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
                descricao: 'ajdf asdijfaodjfoadjfadjf adfad fajf asf apfj asjf apsjf pasjf pajfpájsdfa j adfadsfa adfadfadfasdfas afsf asdfa dfasdfa fa sadfas fasdfadfasdfa sfdfad FINAL',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal'
                    },
                    {
                        nome: 'Beltrano',
                        mensagem: 'Otimo'
                    },
                    {
                        nome: 'Ciclano',
                        mensagem: 'Exxcelente'
                    }
                ]
            }
        ])  
    },[usuarioLogado]);

    return ( 
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem} />
            ))}
        </div> 
      
    );
}