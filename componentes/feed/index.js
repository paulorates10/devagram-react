import { useState, useEffect } from "react";
//import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

export function Feed({usuarioLogado}){
    const [listaDePostagens,setListaDePostagens]=useState();

    useEffect(() => {
        console.log('carregar o feed');
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'Paulo',
                    avatar: null
                },
                fotoDoPost: '',
                descricao: '',
                curtidas:[],
                comentarios:[
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal'
                    }
                ]
            }
        ])
    },[usuarioLogado]);

    return(
        <div className="feedContainer">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem} />
            ))}
        </div>
    );
}