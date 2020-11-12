import React, {useContext} from 'react'
import {AlertContext} from "../context/alert/AlertContext";
export const Search = () => {
    const {show} = useContext(AlertContext)
    const onSubmit = (event) => {
       if (event.key === 'Enter') {
           show('Fuck off')
       }
    }
    return (
        <div className={"form-group"}>
            <input type="text" className="form-control" placeholder={"Type GitHub nickname"} onKeyPress={onSubmit}/>
        </div>
    )
}
