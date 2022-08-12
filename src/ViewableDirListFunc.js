import React from 'react';
import ViewableDirEntryFunc from "./ViewableDirEntryFunc";

function ViewableDirListFunc(props) {

    if (props.dirList === null) return (<div><p>empty</p></div>);

    let _data = props.dirList;

    return (
        <div>
            {
                props.dirList.map(dirEntry => (
                        <div className='ui three column centered grid' id='viewableDirList'>
                            <div className='column'>
                                <ViewableDirEntryFunc
                                    name={dirEntry.name}
                                    isDir={dirEntry.isDir}
                                    createDate={dirEntry.createDate}
                                    onClick={props.onClick}
                                />
                            </div>
                        </div>


                    )
                )


                // <div>
                //     {_data.map(function(object, i){
                //     return <div className={"row"} key={i}>
                //         {[ object.name ,
                //             // remove the key
                //             <b className="fosfo" key={i}> {object.city} </b> ,
                //             object.isDir,
                //             object.createDate,
                //             object.onClick
                //         ]}
                //     </div>;
                // })}
                // </div>

            }
        </div>
    );
}

export default ViewableDirListFunc;
