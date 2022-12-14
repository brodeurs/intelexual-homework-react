import React, { useState, useEffect }  from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import Tabs from './components/Tabs';
import Users from './Users';
import Files from './Files';

const ProjectDetails = () => {

    const {id} = useParams();

    let {state} = useLocation()
    console.log("ProjectDetails state: " + JSON.stringify(state));

    let navigate = useNavigate()

    return (
        <div>
            <h1>Project Details</h1>
            <div>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
            <Tabs>
                <div label="Users" >
                        <Users props={state}/>
                </div>
                <h2>File Details</h2>
                <div label="Files" >
                        <Files props={state}/>
                </div>
            </Tabs>
        </div>
    );
}
export default ProjectDetails;