import { useState, useEffect } from 'react';

import Nav from './Nav.jsx';
import Aside from './Aside.jsx';
import Resume from './Resume.jsx';
import Defaults from './defaults.js';

import './reset.css';
import './App.css';

function App() {
    // Setup light mode
    const [isLightMode, setIsLightMode] = useState(
        () => (localStorage.getItem('theme') || 'light') === 'light'
    );
    useEffect(() => {
        document.body.classList.toggle('darkmode', !isLightMode);
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }, [isLightMode]);

    // Setup states with default values
    const [personal, setPersonal] = useState(Defaults.personal);
    const [education, setEducation] = useState(Defaults.education);
    const [experience, setexperience] = useState(Defaults.experience);

    console.log(education);

    return (
        <>
            <Nav btnClickHandler={() => setIsLightMode(!isLightMode)} />
            <main>
                <Aside personalData={personal} setPersonalData={setPersonal} />
                <div id="resume-container">
                    <Resume
                        personal={personal}
                        education={education}
                        experience={experience}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
