import React from 'react';
import ViewableDirEntry from "./ViewableDirEntry";

class ViewableDirList extends React.Component {

    render() {
        if (this.props.dirList === null) return ( <div><p>empty</p></div>);

        return (
            <div>
                {
                    this.props.dirList.map(dirEntry => (
                            <div className='ui three column centered grid' id='viewableDirList'>
                                <div className='column'>
                                    <ViewableDirEntry
                                        name={dirEntry.name}
                                        isDir={dirEntry.isDir}
                                        createDate={dirEntry.createDate}
                                        onClick={this.props.onClick}
                                    />
                                </div>
                            </div>


                        )
                    )
                }
            </div>
        );
    }
}

export default ViewableDirList;
