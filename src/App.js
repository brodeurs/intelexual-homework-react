import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Projects from './Projects';

const App = () => {

    console.log("App loaded...");
    return (
        <div>
            <h1>Intelexual Assignment</h1>
            <div label="Projects">
                <Projects />
            </div>
        </div>
    );
}
export default App;