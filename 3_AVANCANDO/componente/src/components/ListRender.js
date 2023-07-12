import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Milena", "Michele", "Nicole"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Milena", age: 24 },
        { id: 2, name: "Michele", age: 29 },
        { id: 3, name: "Nicole", age: 10 }
    ])

    const deleteRandom = () => {
        // Math.floor = arrendonda os numeros
        // Math.random = entrega numeros aleatorios de 0 a 1
        const randomNumber = Math.floor(Math.random() * 3);


        //
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>{users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender