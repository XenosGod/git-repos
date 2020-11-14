import React, {useContext} from 'react'
import {AlertContext} from "../context/alert/AlertContext";
import {GithubContext} from "../context/github/GithubContext";
export const Search = () => {
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
       if (event.key === 'Enter') {
           if (event.target.value.trim()) {
               github.search(event.target.value)
               if (alert) {
                   alert.hide()
               }
           } else {
                github.clearUsers()
               alert.show('Type GitHub username')
           }
       }
    }
    return (
        <div className={"form-group"}>
            <input
                type="text"
                className="form-control"
                placeholder={"Type GitHub nickname"}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
