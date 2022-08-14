import React, { useState, useEffect }  from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Projects = () => {
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <span>{project.name}</span><br/>
                        <span>{project.startDate}</span><br/>
                        <Link to="/projectDetails" state={{ project: project }}>Project Details</Link>
                    </li>
                ))}
            </ul>
        );
    }
}
export default Projects;
