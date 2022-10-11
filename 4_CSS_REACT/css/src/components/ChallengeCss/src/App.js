import './App.css';
import CarDetail from './CarDetail';

function App() {
  const cars = [
    { name: "Gol", km: 0, color: "Prata" },
    { name: "KIA", km: 1000, color: "Preto" },
    { name: "Honda", km: 0, color: "Branco" },
  ]
  return (
    <div>
      <h1>Carros</h1>
      {cars.map((car) => (
        <CarDetail
          name={car.name}
          km={car.km}
          color={car.color}
        />
      ))}

    </div>
  );
}

export default App;
