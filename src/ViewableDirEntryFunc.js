import React from "react";

function ViewableDirEntryFunc(props) {
    return (
        <div className='ui centered card' id='ViewableDirEntry'>
            <div className='content'>
                <div className='header link'
                     id='fileName'
                     onClick={props.isDir ? props.onClick : undefined}
                     style={props.isDir ? {color: 'red'} : {color: 'black'}}>
                    {props.name}
                </div>
                <div className='center aligned description' id='entryType'>
                    {props.isDir ? "Directory" : "File"}
                </div>
                <div className='center aligned description' id='createDate'>
                    {props.createDate}
                </div>
            </div>
            <hr className='List-separator'/>
        </div>
    );
}

export default ViewableDirEntryFunc;
