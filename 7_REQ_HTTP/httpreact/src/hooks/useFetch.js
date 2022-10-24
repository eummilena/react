import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        //requisicao assincrona
        const fetchData = async () => {

            const res = await fetch(url)//resquest da url
            const json = await res.json()// receber os dados no formato json

            setData(json)
        }
        fetchData(); //executar a função

    }, [url])//dependência

    return { data };
};