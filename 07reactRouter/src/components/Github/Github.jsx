import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub() {

    const data = useLoaderData();

    return (
        <div className="w-full flex flex-col justify-center p-5">
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}</div>

            <img className="w-40 mx-auto" src={data.avatar_url} alt="" />
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/nitindiwakar123`);

    return res.json();
}