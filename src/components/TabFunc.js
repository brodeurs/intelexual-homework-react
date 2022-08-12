import React  from 'react';
import PropTypes from 'prop-types';

function TabFunc(props) {


    const { label, onClick } = props;

    let className = 'tab-list-item';
    console.log(props)

    if (props.activeTab === label) {
        className += ' tab-list-active';
    }

    return (
        <li
            className={className}
            onClick={onClick}
        >
            {label}
        </li>
    )


}

TabFunc.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TabFunc