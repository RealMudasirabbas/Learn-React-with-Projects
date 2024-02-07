import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github () {
    const data = useLoaderData()
    // const [data, setData] = useState("")
    //     useEffect(() => {
        
    //     fetch("https://api.github.com/users/RealMudasirabbas")
    //     .then( response => response.json())
    //     .then( data => setData(data))
    // }, [])

    return (
    <div className='text-center m-4 text-white bg-gray-600 p-4 text-3xl'>
        Github following: {data.following}
        <img src={data.avatar_url} alt="Mudasir Abbas" width={300}/>
        </div>
)
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/RealMudasirabbas")
    return response.json();
}