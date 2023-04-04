import Image from 'next/image';


import imgHomeCinza from '../../public/imagens/homeCinza.svg';
import imgHomeAtivo from '../../public/imagens/homeAtivo.svg';
import imgPublicacaoCinza from '../../public/imagens/publicacaoCinza.svg';
import imgPubliacaoAtivo from '../../public/imagens/publicacaoAtivo.svg';
import imgUsuarioCinza from '../../public/imagens/usuarioCinza.svg';
import imgUsuarioAtivo from '../../public/imagens/usuarioAtivo.svg';

export default function Navegacao({className}){
    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li>
                    <Image
                        src={imgHomeAtivo}
                        alt='icone home'
                        width={20}
                        height={20}
                    />
                </li>
                <li>
                    <Image
                        src={imgPublicacaoCinza}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>
                <li>
                    <Image
                        src={imgUsuarioCinza}
                        alt='icone usuario'
                        width={20}
                        height={20}
                    />
                </li>
                
            </ul>
        </nav>
    );
}
