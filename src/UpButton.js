import React from 'react';

class UpButton extends React.Component {

    render() {
        return (
            <div>
                <button
                    name='button-1'
                    value='up'
                    onClick={this.props.onClick}
                >
                    Up
                </button>
            </div>
        );
    }
}
export default UpButton;
