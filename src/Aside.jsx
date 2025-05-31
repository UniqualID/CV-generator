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
    const [activeIdx, setActiveIdx] = useState(-1);
    const toggleIdx = (idx) => {
        if (activeIdx === idx) {
            setActiveIdx(-1);
        } else {
            setActiveIdx(idx);
        }
    };
    return (
        <aside>
            <ul>
                <PersonalComponent
                    isActive={activeIdx === 0}
                    onShow={() => toggleIdx(0)}
                    data={personal}
                    setData={setPersonal}
                />
                <EducationComponent
                    isActive={activeIdx === 1}
                    onShow={() => toggleIdx(1)}
                    data={education}
                    setData={setEducation}
                />
                <ExperienceComponent
                    isActive={activeIdx === 2}
                    onShow={() => toggleIdx(2)}
                    data={experience}
                    setData={setExperience}
                />
                <ProjectsComponent
                    isActive={activeIdx === 3}
                    onShow={() => toggleIdx(3)}
                    data={projects}
                    setData={setProjects}
                />
                <SkillsComponent
                    isActive={activeIdx === 4}
                    onShow={() => toggleIdx(4)}
                    data={skills}
                    setData={setSkills}
                />
            </ul>
        </aside>
    );
}
