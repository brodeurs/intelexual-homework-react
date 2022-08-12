import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
    return (
        <div>
            <h1>Intelexual Assignment</h1>
            <Tabs>
                <div label="Projects">
                    Project list goes <em>here</em>!
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