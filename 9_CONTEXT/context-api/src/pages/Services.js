import { useCounterContext } from '../hooks/useCounterContext'

function Services() {
    const { counter } = useCounterContext();
    return (
        <div>
            <h1>Services</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export default Services