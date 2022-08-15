import React, { useState, useEffect, useMemo }  from 'react';
import ProjectsTable from "./ProjectsTable";

const Files = (props) => {

    console.log("Files props: " + JSON.stringify(props));
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [files, setFiles] = useState([]);

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "File Type",
                accessor: "fileType",
            },
        ],
        []
    )

    useEffect(() => {
        fetch("http://localhost:8080/filesByProjectId/?projectId=" + props.props.id)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setFiles(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    console.log("Files: " + JSON.stringify(files));

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ProjectsTable  columns={columns} data={files}/>
        );
    }
}

export default Files;
