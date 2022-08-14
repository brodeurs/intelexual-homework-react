import React, { useState, useEffect }  from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Tabs from './components/Tabs';
import Users from './Users';
import Files from './Files';

const ProjectDetails = () => {

    let {state} = useLocation()
    let navigate = useNavigate()

    let {users} = state.project;
    let {files} = state.project;

    let userList = {users : users}
    let fileList = {files : files}

    return (
        <div>
            <h1>Project Details</h1>
            <div>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
            <Tabs>
                <div label="Users" >
                        <Users props={userList}/>
                </div>
                <h2>File Details</h2>
                <div label="Files" >
                        <Files props={fileList}/>
                </div>
            </Tabs>
        </div>
    );
}
export default ProjectDetails;