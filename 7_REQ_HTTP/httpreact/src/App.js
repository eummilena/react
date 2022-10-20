import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
    </div>
  );
}

export default App;
