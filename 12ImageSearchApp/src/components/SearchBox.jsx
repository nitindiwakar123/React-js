import { useState } from "react";

function SearchBox() {
    const [page, setPage] = useState(1);
    const [input, setInput] = useState("");
    const [data, setData] = useState([]); 
    

    useEffect(() => {
      fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=$RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`)
      .then((res) => res.json())
      .then((res) => setData(res.result));
    }, [page, input]);

    return ( 

     );
}

export default SearchBox;