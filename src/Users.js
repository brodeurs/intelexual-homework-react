import React, { useState, useEffect }  from 'react';
import Projects from "./Projects";
import {BrowserRouter as Router} from "react-router-dom";

const Users = (props) => {

    let {project} = props.props;

    return (

        <div>
            <h1>User Details</h1>
            <ul>
                {project.users.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span><br/>
                        <span>{user.emailAddress}</span><br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users;
