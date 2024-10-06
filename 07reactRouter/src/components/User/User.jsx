import { useParams } from "react-router-dom"

function User(){

    const {userid} = useParams();

    return (
        <h1 className="w-full text-3xl bg-gray-900 font-semibold p-5 text-white text-center">User: {userid}</h1>
    )
}

export default User