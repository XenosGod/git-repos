import React from 'react'
export const Repos = ({repos}) => (
    <div className="col d-flex flex-wrap">
        {repos.map(rep => (
            <div className="card m-1" key={rep.id}>
                <div className="card-body">
                    <h4>
                        <a
                            href={rep.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-info"
                        >{rep.name}</a>
                    </h4>
                </div>
            </div>
            )
        )}
    </div>
)
