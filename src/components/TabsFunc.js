import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

function TabsFunc(props) {

    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    console.log(JSON.stringify(activeTab))

    const onClickTabItem = (tab) => {

        console.log("tab object from onclick: " + JSON.stringify(tab))
        console.log("tab from onclick: " + tab)
        setActiveTab({ activeTab: tab });
    }

    return (

    <div className="tabs">
            <ol className="tab-list">
                {props.children.map((child) => {
                    const { label } = child.props;

                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    );
                })}
            </ol>
            <div className="tab-content">
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>

    )
}

TabsFunc.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
}

export default TabsFunc