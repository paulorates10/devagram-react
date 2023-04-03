import InputPublico from "../inputPublico";
import Image from "next/image";
import Botao from "../botao";

import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagenChave from "../../public/imagens/chave.svg";
import imagemLogo from "../../public/imagens/logo.svg";
import Link from "next/link";
import { useState } from "react";
import {validarEmail, validarSenha} from "../../utils/validadores"


export default function Login() {
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");

    const validarFormulario=()=>{
        return(
            validarEmail(email) 
            && validarSenha(senha)
        );
    }

    return (
        <section className="paginaLogin paginaPublica">
            <div className="logoContainer">
                <Image 
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />

            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="email"
                        tipo="email"
                        aoAlterarValor={e=>setEmail(e.target.value)}
                        valor={email}
                        menssaemValidacao="O email infomdo é invalido"
                        exibirMenssaemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagenChave}
                        texto="senha"
                        tipo="password"
                        aoAlterarValor={e=>setSenha(e.target.value)}
                        valor={senha}
                        menssaemValidacao="Precisa ter pelo menos 3 caracteres"
                        exibirMenssaemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao
                        texto="Login"
                        tipo="submit"
                        disabilitado={!validarFormulario()}
                    />

                </form>

                <div className="rodapePaginaPublica">
                        <p>Nao possui uma conta?</p>
                        <Link href="/cadastro"> Faca seu cadastro agora </Link>
                </div>

            </div>

        </section>
      );
  }
  