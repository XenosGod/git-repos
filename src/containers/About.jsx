import React from 'react';
import {Link} from "react-router-dom";
export const About = () => {
    return (
        <div className={"jumbotron jumbotron-fluid"}>
            <div className="container">
                <h1 className={"display-4"}>Git Repo Search</h1>
                <p className="lead">This is simple app, where you can search git repositories by name</p>
                <Link to={"/"} className={"btn btn-primary"}>Go Home and search!</Link>
            </div>
        </div>
    )
}

