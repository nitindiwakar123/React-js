import { useState, useContext } from "react";
import userContext from "../contexts/UserContext";

function Parent() {

    const [nitin, setNitin] = useState("Nitin");
    const [sachin, setSachin] = useState("Sachin");

    const {setUser} = useContext(userContext);
    

    console.log(setUser);

    return (  
        <div>
            <h1>I am Parent Component</h1>
           <button onClick={(e) => setUser({nitin, sachin})}>Click here to set</button>
            <h1>End of Parent Component</h1>
        </div>
    );
}

export default Parent;