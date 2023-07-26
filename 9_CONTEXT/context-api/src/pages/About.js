import { useCounterContext } from '../hooks/useCounterContext'


function About() {
    const { counter } = useCounterContext();
    return (
        <div>
            <h1>About</h1>
            <p>Valor do contador: {counter}</p>

        </div>
    )
}

export default About