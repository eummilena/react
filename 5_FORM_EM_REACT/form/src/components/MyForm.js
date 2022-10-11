import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {


    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value)
    };
    //console.log(name)
    // console.log(email)

    // 6 - controlled inputs
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("");
        setRole("");

    }
    return (
        <div>
            {/* 5 - envio de form */}
            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" value={name} placeholder="Digite seu nome" onChange={handleName} />

                </div>
                {/* 2 - label envolvendo input */}
                <label htmlFor="">
                    <span>E-mail</span>
                    {/* 4 - simplificação de manipulação de state  */}
                    <input type="text" name="email" value={email} placeholder="Digite o seu e-mail" onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                {/* 8  - textarea */}
                <label htmlFor="">
                    <span>Bio</span>
                    <textarea name="bio" id="" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* 9-select */}
                <span>Função no sistema</span>
                <select name="role" id="" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
                <button type="submit" value="enviar">Enviar</button>
            </form>

        </div>
    )
}

export default MyForm