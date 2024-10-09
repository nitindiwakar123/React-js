import { useState, useContext } from "react";
import userContext from "../contexts/UserContext";

function Child1() {

    const {user} = useContext(userContext);

    if(user){
        console.log(user);
        console.log(user.nitin);
        console.log(user.sachin);
    }

    return ( 
        <h1>I am Child Component</h1>
     );
}

export default Child1;