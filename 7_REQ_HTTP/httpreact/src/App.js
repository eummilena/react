import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  // 1 - resgatando dados

  useEffect(async () => {
    const res = await fetch(url);// busca a resposta de requisição
    const data = await res.json();// vai receber a requisição no formato json

    setProducts(data);//vai receber os dados
  }, []);

  console.log(products);
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>{product.name} - R${product.price}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
