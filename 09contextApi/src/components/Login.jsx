import React, {useState, useContext} from 'react';
import userContext from '../context/userContext';


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const {setUser} = useContext(userContext);
    

    const handleClick = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (  
        <div className='bg-gray-800 mx-auto my-10 shadow-md flex flex-col justify-center gap-2 py-5 px-5 w-[50%] rounded'>
            <h2>Login</h2>
            <input className='outline-none bg-transparent border-2 border-white font-medium p-2' type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username' />
            <input className='outline-none bg-transparent border-2 border-white font-medium p-2' type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
            <button className='bg-blue-600 outline-none border-none' onClick={handleClick}>Submit</button>
        </div>
    );
}

export default Login;