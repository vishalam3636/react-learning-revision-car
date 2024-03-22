import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData();
    
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('http://api.github.com/users/vishalam3636')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data, ">>>> data");
    //         setData(data);
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data?.followers}
            <img className="text-center" src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export const githubInfoLoader = async() => {
    const response = await fetch('http://api.github.com/users/vishalam3636');

    return response.json();
}