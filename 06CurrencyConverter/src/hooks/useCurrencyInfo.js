import {useEffect, useState} from "react";

function useCurrencyInfo(currency){

    let [data, setData] = useState({});

    useEffect(() => {
        

            fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(data = res.rates);
                
            });
    
    }, [currency]);

    return data;
}

export default useCurrencyInfo