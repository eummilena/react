import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  // 1 - resgatando dados

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);// busca a resposta de requisição
      const data = await res.json();// vai receber a requisição no formato json

      setProducts(data);//vai receber os dados
    }
    fetchData();

  }, []);

  // 2- add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    const res = await fetch(url, {
      method: "POST",
      headers {
      "Content-type": "application/json"
    },
      body: JSON.stringify(product),
    });
}
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
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="preço">
          Preço:
          <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <input type="submit" value={Criar} />
      </form>
    </div>
  </div>
);
}

export default App;
