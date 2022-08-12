import React from "react";

class ViewableDirEntry extends React.Component {
    render() {
        return (
            <div className='ui centered card' id='ViewableDirEntry'>
                <div className='content'>
                    <div className='header link'
                         id='fileName'
                         onClick={this.props.isDir ? this.props.onClick : undefined}
                         style={this.props.isDir ? {color : 'red'} : {color : 'black'}}>
                        {this.props.name}
                    </div>
                    <div className='center aligned description' id='entryType'>
                        {this.props.isDir ? "Directory" : "File"}
                    </div>
                    <div className='center aligned description' id='createDate'>
                            {this.props.createDate}
                    </div>
                </div>
                <hr className='List-separator'/>
            </div>
        );
    }
}

export default ViewableDirEntry;
