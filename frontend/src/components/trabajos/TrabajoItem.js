const TrabajoItem = (props) =>{

    return(
        <article className={'item col-6 col-md-3 col-lg-2 destacado-'+props.destacado} onClick={()=>props.onPress(props.id)}>
            <figure>
                <img src={props.imagen_principal} alt={props.titulo} className='img-fluid'/>
                <figcaption>
                    <h1>{props.titulo}</h1>
                    <h2>{props.subtitulo}</h2>
                </figcaption>
            </figure>
        </article>
    );
}

export default TrabajoItem;