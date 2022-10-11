

const UserDetails = ({ name, age, profession }) => {
    return (
        <div>
            <h2>Dados pessoas</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {profession}</li>
            </ul>
            {age >= 18 ? (<p>Pode tirar habilitação</p>) : (<p> Não pode tirar habilitação</p>)}

        </div>
    )
}

export default UserDetails