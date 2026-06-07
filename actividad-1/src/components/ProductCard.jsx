
const ProductCard = ({ nombre, precio, imagen, stock, onAgregar, onQuitar }) => {
    const claseArticulo = `card ${stock ? '' : 'sin-stock'}`;
    const precioFormateado = precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

    return(
        <article className={claseArticulo}>
            {!stock && <span className="badge-agotado">Agotado</span>}
            <div className="card-image">
                { imagen ? <img src={imagen} alt={nombre} /> : <span>[SIN IMAGEN DEL PRODUCTO]</span> }
            </div>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-price">{precioFormateado}</p>

                <div className="card-actions">
                    {stock ? (
                        <>
                            <button className="btn btn-add" onClick={onAgregar}>Agregar</button>
                            <button className="btn btn-remove" onClick={onQuitar}>Quitar</button>
                        </>
                    ) : (
                        <span className="badge-agotado-texto">Temporalmente agotado</span>
                    )
                    }
                </div>
            </div>
        </article>
    )
}

export default ProductCard;