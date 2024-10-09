import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

function GitHub() {

    const data = useLoaderData();
    const username = useParams();
    console.log(username);



    return (
        <div className="w-full bg-gray-600 flex flex-col justify-center items-center gap-4 p-5">
            <div className="text-center m-4 text-white p-4 text-3xl">Github followers: {data.followers}</div>

            <img className="w-40 mx-auto" src={data.avatar_url} alt="" />

        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ({ params }) => {

    const username = params.nitindiwakar01;
    const res = await fetch(`https://api.github.com/users/${username}`);

    return res.json();
}
