import { useState } from 'react';

import PersonalComponent from './aside-components/Personal';
import EducationComponent from './aside-components/Education';
import ExperienceComponent from './aside-components/Experience';
import ProjectsComponent from './aside-components/Projects';
import SkillsComponent from './aside-components/Skills';

export default function Aside({
    personal,
    setPersonal,
    education,
    setEducation,
    experience,
    setExperience,
    projects,
    setProjects,
    skills,
    setSkills,
}) {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <aside>
            <ul>
                <PersonalComponent
                    isActive={activeIdx === 0}
                    onShow={() => setActiveIdx(0)}
                    data={personal}
                    setData={setPersonal}
                />
                <EducationComponent
                    isActive={activeIdx === 1}
                    onShow={() => setActiveIdx(1)}
                    data={education}
                    setData={setEducation}
                />
                <ExperienceComponent
                    isActive={activeIdx === 2}
                    onShow={() => setActiveIdx(2)}
                    data={experience}
                    setData={setExperience}
                />
                <ProjectsComponent
                    isActive={activeIdx === 3}
                    onShow={() => setActiveIdx(3)}
                    data={projects}
                    setData={setProjects}
                />
                <SkillsComponent
                    isActive={activeIdx === 4}
                    onShow={() => setActiveIdx(4)}
                    data={skills}
                    setData={setSkills}
                />
            </ul>
        </aside>
    );
}
