import React, { useState, useEffect }  from 'react';

const Files = (props) => {

    const [files, setFiles] = useState(props.props.files);

    return (
        <div>
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
