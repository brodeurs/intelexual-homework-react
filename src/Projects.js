import React, { useState, useEffect, useMemo }  from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import ProjectsTable from "./ProjectsTable";
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Projects = () => {

    // For router link, parameter passing may be this:
    // Cell: ({ project }) => (<Link to="/projectDetails" state={{ project: project }}>Project Details</Link>),
    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                disableSortBy: false,
            },
            {
                Header: "Start Date",
                accessor: "startDate",
                disableSortBy: false,
            },
            {
                Header: "Details",
                accessor: "id",
                Cell: ({row}) => (<Link to="/projectDetails" state={{id : row.values.id}}>{row.values.id}</Link>),
                disableSortBy: true,
            },
        ],
        []
    )

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/projects/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setProjects(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log(JSON.stringify(projects));

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ProjectsTable  columns={columns} data={projects}/>
        );
    }
}
export default Projects;
