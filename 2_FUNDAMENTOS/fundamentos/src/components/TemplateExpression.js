const TemplateExpression = () => {
    const name = "Milena";
    const data = {
        age: 23,
        job: "Programmer",
    };

    return (
        <div>
            <h1> Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{5 + 4 + 4 + 3}</p>
            <p>{console.log('React JSX')}</p>
        </div>
    );

};

export default TemplateExpression;