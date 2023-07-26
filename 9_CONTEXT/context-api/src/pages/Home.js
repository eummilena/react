// import { useContext } from 'react'

import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando o hook
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    // 5 - contexto mais complexo
    const { color, dispatch } = useTitleColorContext();
    console.log(color)

    // 6 - alterando state complexo
    const setTitleColor = (color) => {
        dispatch({ type: color });
    }

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* 3 - alterando o valor do contexto */}
            <ChangeCounter />
            {/** alterando state complexo */}
            <button onClick={() => setTitleColor("RED")}>Vermelho</button>
            <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    )
}

export default Home;