import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Projects from './Projects';

function App() {
    return (
        <div>
            <h1>Intelexual Assignment</h1>
            <Tabs>
                <div label="Projects">
                    <Router>
                        <Projects />
                    </Router>
                </div>
                <div label="Users">
                    User list goes <em>here</em>!
                </div>
                <div label="Files">
                    File list goes <em>here</em>!
                </div>
            </Tabs>
        </div>
    );
}
export default App;