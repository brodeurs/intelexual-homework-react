import React from 'react';

function UpButtonFunc(props) {

    return (
        <div>
            <button
                name='button-1'
                value='up'
                onClick={props.onClick}
            >
                Up
            </button>
        </div>
    );
}
export default UpButtonFunc;
