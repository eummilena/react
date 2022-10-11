import './App.css';
import { useState } from 'react';
import Monumento from "./assets/congresso-nacional.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuterFunction from './components/ExecuterFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';





function App() {
  //const name = "Milena";
  const [userName] = useState("Josefa");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 1000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ]
  const users = [
    { name: "John", age: 30, profession: "Officer" },
    { name: "Adam", age: 15, profession: "Student" },
    { name: "Lucy", age: 35, profession: "Nurse" },
  ]
  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h3>Avançando em React</h3>
      <div>
        {/* imagem em public */}
        <img src="/congresso.jpg" alt="congresso nacional" srcset="" />
      </div>
      {/* imagem em asset */}
      <div>
        <img src={Monumento} alt="congresso nacional" />
      </div>
      <ManageData />
      <ListRender />

      <ConditionalRender />
      {/* props */}
      <ShowUsername name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
        <h5>Testando container</h5>
      </Container>
      {/* executar função */}
      <ExecuterFunction myFunction={showMessage}>

      </ExecuterFunction>

      {/* state lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {users.map((user) => (
        <UserDetails
          name={user.name}
          age={user.age}
          profession={user.profession}
        />
      ))}


    </div>

  );
}

export default App;
