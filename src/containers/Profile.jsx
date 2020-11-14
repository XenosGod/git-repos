import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/GithubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    useEffect(() => {
        const name = match.params.name
        getUser(name)
        getRepos(name)
        // eslint-disable-next-line
    }, [])
    if (loading) {
        return <p>Loading...</p>
    }
    const {
        name, company, avatar_url,
        login, bio, blog, following,
        location, html_url, followers,
        public_repos, public_gists
    } = user
    return (
        <>
            <Link to={"/"} className="btn btn-outline-primary mb-4">To Home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row-cols-1">
                        <div className="col text-center">
                            <img src={avatar_url} alt={name}/>
                            <h1>{name || login}</h1>
                            { location && <p><strong>location: </strong>{location}</p>}
                        </div>
                        <div className="col mb-4">
                            { bio && <p><strong>BIO: </strong>{bio}</p>}
                            { company && <p><strong>company: </strong>{company}</p>}
                            { blog && <p><strong>blog: </strong><a href={blog}>{blog}</a></p>}

                            <div className="badge badge-success mr-1">Followers: {followers}</div>
                            <div className="badge badge-primary mr-1">Following: {following}</div>
                            <div className="badge badge-info mr-1">Public repositories: {public_repos}</div>
                            <div className="badge badge-dark mr-1">Public gists: {public_gists}</div>

                        </div>
                        <div className="col">
                            <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-outline-info">GitHub profile</a>
                        </div>
                        <div className="col">
                            <h2 className="font-weight-bold my-4">Repositories: </h2>
                        </div>
                        <Repos repos={repos} />
                    </div>
                </div>
            </div>
        </>
    )
}
