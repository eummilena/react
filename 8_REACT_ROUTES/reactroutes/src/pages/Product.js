import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);


    return (
        <div>ID do Produto:{id}
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando...</p>}
            {product && (<div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais detalhes</Link>
            </div>)}
        </div>

    )
}

export default Product