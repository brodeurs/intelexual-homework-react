import React, { useState, useEffect }  from 'react';
const Files = (props) => {

    let files = props.props.project.files;
    console.log("Users: " + JSON.stringify(files))

    return (
        <div>
            <h1>Files Details</h1>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <span>{file.name}</span><br/>
                        <span>{file.fileType}</span><br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Files;
