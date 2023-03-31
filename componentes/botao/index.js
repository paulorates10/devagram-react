export default function Botao({
    tipo= 'button',
    texto,
    cor= 'primaria', 
    disabilitado= false,
    manipularClique
}){

    return(
        <button
            type= {tipo}
            className= {`btn ${cor}`}
            disabled= {disabilitado}
            onClick= {manipularClique}
        >
            {texto}
        </button>
    );
}