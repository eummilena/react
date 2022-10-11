const Events = () => {
    const handleyMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleyMyEvent}>Clique aqui!</button>
            </div>
            <div>
                {/* evento inline */}
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir");
                    }
                }}>Clique aqui também, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};


export default Events;