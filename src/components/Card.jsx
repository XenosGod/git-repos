import React from 'react'
import {Link} from "react-router-dom";

export const Card = () => {
    const id = 'id'
    return (
        <div className="card">
            <img src="" alt="" className={"card-img-top"}/>
            <div className="card-body">
                <h5 className="card-title">React JS</h5>
                <Link to={`/profile/${id}`} className={"btn btn-primary"}>Open</Link>
            </div>
        </div>
    )
}
