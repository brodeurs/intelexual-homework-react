import React, { useState, useEffect }  from 'react';
const Files = (props) => {

    let {project} = props.props;

    return (
        <div>
            <h1>Files Details</h1>
            <ul>
                {project.files.map(file => (
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
