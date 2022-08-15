import React, { useState, useEffect, useMemo }  from 'react';
import ProjectsTable from "./ProjectsTable";
import {Link} from "react-router-dom";

const Users = (props) => {

    console.log("Users props: " + JSON.stringify(props));
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Email Address",
                accessor: "emailAddress",
            },
         ],
        []
    )

    useEffect(() => {
        fetch("http://localhost:8080/usersByProjectId/?projectId=" + props.props.id)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ProjectsTable  columns={columns} data={users}/>
        );
    }
}

export default Users;
