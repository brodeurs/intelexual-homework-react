import React from 'react';

const ProjectDetailsButton = (props) => {

    return (
        <div>
            <button
                name='button-1'
                value='Project Details'
                onClick={props.onClick}
            >
               Project Details
            </button>
        </div>
    );
}

export default ProjectDetailsButton;
