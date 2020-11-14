import React, {useContext} from 'react';
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/GithubContext";

export const Home = () => {
    const github = useContext(GithubContext)
    const {users, loading} = github
    return (
        <>
            <Search />
            <div className="row">
                {loading
                    ? <p className="text-center">Loading...</p>
                    : users.map(user => (
                        <div className="col-md-4 mb-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
