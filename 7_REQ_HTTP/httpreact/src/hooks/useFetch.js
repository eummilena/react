import { useState, useEffect } from "react";



// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);


    // 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false)
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }


    useEffect(() => {
        //requisicao assincrona
        const fetchData = async () => {

            const res = await fetch(url);//resquest da url
            const json = await res.json();// receber os dados no formato json

            setData(json);
        }
        fetchData(); //executar a função

    }, [url, callFetch]/* tras dados atualizados no sistema */])//dependências

    // 5 refatorando POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }


        }
        httpRequest();
    }, [config, method, url])

    return { data, httpConfig };
};