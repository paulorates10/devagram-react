import { useState, useEffect } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

const feedService =new FeedService();

export function Feed({usuarioLogado}){
    const [listaDePostagens,setListaDePostagens]=useState([]);

    useEffect( async  () => {        

        setListaDePostagens([]);
       const { data } = await feedService.carregarPostagens();
       console.log(data);

       const postagensFormatadas= data.map((postagem)=>(
            {
                id:postagem._id,
                usuario:{
                    id: postagem.userId,
                    nome: postagem.usuario.nome,
                    avatar: postagem.usuario.avatar
                },
                fotoDoPost: postagem.foto,
                descricao: postagem.descricao,
                curtidas: postagem.likes,
                comentarios: postagem.comentarios.map(c=> ({
                    nome: c.nome,
                    mensagem: c.comentario

                }))
            }
        ));

        setListaDePostagens(postagensFormatadas);


        // setListaDePostagens([
        //     {
        //         id: '234',
        //         usuario: {
        //             id: '123',
        //             nome: 'Paulo',
        //             avatar: null
        //         },
        //         fotoDoPost: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
        //         descricao: 'ajdf asdijfaodjfoadjfadjf adfad fajf asf apfj asjf apsjf pasjf pajfpájsdfa j adfadsfa adfadfadfasdfas afsf asdfa dfasdfa fa sadfas fasdfadfasdfa sfdfad FINAL',
        //         curtidas: [],
        //         comentarios: [
        //             {
        //                 nome: 'Fulano',
        //                 mensagem: 'Muito legal'
        //             },
        //             {
        //                 nome: 'Beltrano',
        //                 mensagem: 'Otimo'
        //             },
        //             {
        //                 nome: 'Ciclano',
        //                 mensagem: 'Exxcelente'
        //             }
        //         ]
        //     }
        // ])  
    },[usuarioLogado]);



    if (!listaDePostagens.length) {
        return null;
    }

    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                    <Postagem
                        key={dadosPostagem.id}
                        {...dadosPostagem}
                        usuarioLogado={usuarioLogado}
                    />
                ))
            }
        </div>
    )
}