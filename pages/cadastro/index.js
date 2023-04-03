
import Image from "next/image";
import Link from "next/link";
import Botao from "../../componentes/botao";
import InputPublico from "../../componentes/inputPublico";
import { useState } from "react";
import UploadImagem from "../../componentes/uploadImagem";
import {validarNome,validarEmail, validarSenha, validarConfirmacaoSenha} from "../../utils/validadores"
import UsuarioService from "../../servives/UsuarioService";


import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemAvatar from "../../public/imagens/avatar.svg";
import Router, { useRouter } from "next/router";


const usuarioService= new UsuarioService();

export default function Cadastro(){

    const [imagem,setImagem]= useState(null);
    const [nome,setNome]= useState("");
    const [email,setEmail]= useState("");
    const [senha,setSenha]= useState("");
    const [confirmacaoSenha,setConfirmacaoSenha]= useState("");
    const [estaSubmetendo, setEstaSubmetendo]= useState(false);

    const router= useRouter();

    const validarFormulario=()=>{
        return(
            validarNome(nome) &&
            validarSenha(senha)&&
            validarConfirmacaoSenha(senha,confirmacaoSenha)&&
            validarEmail(email)
        );
    }

    const aoSubmeter= async(e)=>{
        
        e.preventDefault();
        if(!validarFormulario()){
            return;
        }

        setEstaSubmetendo(true);

        try{
            const corpoReqCadastro= new FormData();
            corpoReqCadastro.append("nome",nome);
            corpoReqCadastro.append("email",email);
            corpoReqCadastro.append("senha",senha);
            if (imagem?.arquivo){
                corpoReqCadastro.append("file", imagem.arquivo);
            }

            await usuarioService.cadastro(corpoReqCadastro);
            await usuarioService.login({
                login: email,
                senha
            });
            //TODO: autenticar o usuario diretamente apos o cadastro
            router.push('/');

        }catch(error){
            alert("Erro ao cadastrar usuario: "+ error?.response?.data?.erro);
        }

        setEstaSubmetendo(false);

    }
    

    return(
        <section className="paginaCadastro paginaPublica">  
                <div className="logoContainer desktop">
                    <Image 
                        src={imagemLogo}
                        alt="logotipo"
                        className="logo"
                    />

                </div>

                <div className="conteudoPaginaPublica">

                    <form onSubmit={aoSubmeter}>

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
                            disabilitado={!validarFormulario() || estaSubmetendo}
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