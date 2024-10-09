import React, { useContext } from 'react';
import userContext from '../context/userContext';

function Profile() {
    const { user } = useContext(userContext);
    console.log(`User Object: ${user}, Type: ${typeof user}`);

    if (user) {
        console.log("USERNAME: ", user.username);
        console.log("PASSWORD: ", user.password);
        // Only log user.username if user is defined
    }


    if (!user) return <h2 className='text-center mx-auto bg-gray-900 py-5 px-2 font-medium w-[50%]'>Please Login</h2>

    return <h2 className='text-center mx-auto bg-gray-900 py-5 px-2 font-medium w-[50%]'>Welcome {user.username}</h2>
}

export default Profile;