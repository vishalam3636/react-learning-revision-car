import React from "react";

import { useParams } from "react-router-dom";

export default function User() {
    const {userid} = useParams();

    return(
        <>
        <div className="bg-red-500">
            <h1>USER PROFILE</h1>
            <h3>User: {userid}</h3>
        </div>
        </>
    )
}