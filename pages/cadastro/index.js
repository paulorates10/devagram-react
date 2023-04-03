
import Image from "next/image";
import Link from "next/link";
import Botao from "../../componentes/botao";
import InputPublico from "../../componentes/inputPublico";
import { useState } from "react";
import UploadImagem from "../../componentes/uploadImagem";
import {validarNome,validarEmail, validarSenha, validarConfirmacaoSenha} from "../../utils/validadores"
import UsuarioService from "../../servives/UsuarioServices";

const usuariarioService= new UsuarioService();

import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemAvatar from "../../public/imagens/avatar.svg";



export default function Cadastro(){

    const [imagem,setImagem]= useState(null);
    const [nome,setNome]= useState("");
    const [email,setEmail]= useState("");
    const [senha,setSenha]= useState("");
    const [confirmacaoSenha,setConfirmacaoSenha]= useState("");

    const validarFormulario=()=>{
        return(
            validarNome(nome) &&
            validarSenha(senha)&&
            validarConfirmacaoSenha(senha,confirmacaoSenha)&&
            validarEmail(email)
        );
    }


    

    return(
        <section className="paginaCadastro paginaPublica">  
                <div className="logoContainer desktop">
                    <Image 
                        src={imagemLogo}
                        alt="logotipo"
                        layout="fill"
                        className="logo"
                    />

                </div>

                <div className="conteudoPaginaPublica">

                    <form>

                        <UploadImagem
                            imagemPreviewClassName="avatar avatarPreview"
                            imagemPreview={imagem?.preview || imagemAvatar.src}
                            setImagem={setImagem}

                        /> 

                        <InputPublico
                            imagem={imagemUsuarioAtivo}
                            texto="Nome Completo"
                            tipo="text"
                            aoAlterarValor={e=>setNome(e.target.value)}
                            valor={nome}
                            menssaemValidacao="O nome precisa ter pelo menos 2 caracteres"
                            exibirMenssaemValidacao={nome && !validarNome(nome)}
                        />
                        
                        <InputPublico
                            imagem={imagemEnvelope}
                            texto="email"
                            tipo="email"
                            aoAlterarValor={e=>setEmail (e.target.value)}
                            valor={email}
                            menssaemValidacao="O email informado nao é valido"
                            exibirMenssaemValidacao={email && !validarEmail(email)}
                        />        

                        <InputPublico
                            imagem={imagemChave}
                            texto="Senha"
                            tipo="password"
                            aoAlterarValor={e=>setSenha(e.target.value)}
                            valor={senha}
                            menssaemValidacao="Precisa ter pelo menos 3 caracteres"
                            exibirMenssaemValidacao={senha && !validarSenha(senha)}
                         />  

                        <InputPublico
                            imagem={imagemChave}
                            texto="Confirmar Senha"
                            tipo="password"
                            aoAlterarValor={e=>setConfirmacaoSenha(e.target.value)}
                            valor={confirmacaoSenha}
                            menssaemValidacao="As senhas tem que ter igual"
                            exibirMenssaemValidacao={confirmacaoSenha && !validarConfirmacaoSenha(senha,confirmacaoSenha)}

                         />     


                        <Botao
                            texto="Cadastrar"
                            tipo="submit"
                            disabilitado={!validarFormulario()}
                        />

                    </form>


                    <div className="rodapePaginaPublica">
                            <p>Já possui uma conta?</p>
                            <Link href="/"> Faca seu login agora </Link> 
                    </div>
                </div>

        </section>

 );
}