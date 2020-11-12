import React from 'react';
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => {
    const profiles = [1,23,23,23,2,32,3,2,3]
    return (
        <>
            <Search />
            <div className="row">
                {profiles.map(profile => {
                    return (
                        <div className="col-md-4 mb-4">
                            <Card />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
