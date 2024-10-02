import React from "react"

function Card({channel="Channel Name", des, source}) {

    
    return (
        <>
            <a href="#" className="block mb-10">
                <img
                    alt=""
                    src={source}
                    className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{channel}</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    {des}
                </p>
            </a>
        </>
    )
}

export default Card
