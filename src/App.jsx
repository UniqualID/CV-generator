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
    const [experience, setExperience] = useState(Defaults.experience);
    const [projects, setProjects] = useState(Defaults.projects);
    const [skills, setSkills] = useState(Defaults.skills);

    console.log(education);
    const asideProps = {
        personal: personal,
        setPersonal: setPersonal,
        education: education,
        setEducation: setEducation,
        experience: experience,
        setExperience: setExperience,
        projects: projects,
        setProjects: setProjects,
        skills: skills,
        setSkills: setSkills,
    };

    return (
        <>
            <Nav btnClickHandler={() => setIsLightMode(!isLightMode)} />
            <main>
                <Aside {...asideProps} />
                <div id="resume-container">
                    <Resume
                        personal={personal}
                        education={education}
                        experience={experience}
                        projects={projects}
                        skills={skills}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
