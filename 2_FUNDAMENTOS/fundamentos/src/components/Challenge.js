const Challenge = () => {

    const x1 = 10;
    const x2 = 105
    const sum = (x1, x2) => {
        return <h3>{x1} + {x2} = {x1 + x2}</h3>

    }

    return (
        <div>
            {sum(x1, x2)}
            <button onClick={console.log(x1 + x2)}>Somar</button>
        </div>

    );

}

export default Challenge;