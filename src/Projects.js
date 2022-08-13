import React, { useState, useEffect }  from 'react';
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
                        <span>{project.startDate}</span>
                    </li>
                ))}
            </ul>
        );
    }
}
export default Projects;
