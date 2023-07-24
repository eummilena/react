//navegar nas páginas
import { useNavigate } from "react-router-dom"
//pegar o estado do input
import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState(); //busca
    const handleSubmit = (e) => {
        e.preventDefault(); //previne que a pg seja recarregada ao enviar a busca

        navigate("/search?q=" + query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm