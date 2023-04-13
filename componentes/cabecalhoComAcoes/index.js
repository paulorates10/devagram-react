import Image from 'next/image';

export default function CabecalhoComAcoes({
    className,
    iconeEsquerda,
    textoEsquerda=null,
    aoClicarAcaoEsquerda,
    titulo,
    elementoDireita
}){
    return(
        <div className={`cabecalhoComAcoes ${className}`}>
            {iconeEsquerda ? (
                <Image
                    src={iconeEsquerda}
                    alt='icone esquerda cabecalho com acoes'
                    onClick={aoClicarAcaoEsquerda}
                    width={20}
                    height={20}
                />
            ):(
                textoEsquerda!== null && (
                    <span className="cabecalhoComAcoesTextoEsquerda" onClick={aoClicarAcaoEsquerda}>
                        {textoEsquerda}
                    </span>
                )
            )}

            <h3>{titulo}</h3>
           
            {elementoDireita && (
                <button 
                    type='button'
                >
                    {elementoDireita}                    
                </button>
            )}
        </div>
    )
}