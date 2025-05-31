import './Resume.css';

export default function Resume({
    personal,
    education,
    experience,
    projects,
    skills,
}) {
    const personalDataAux = [
        personal.phone,
        personal.email,
        personal.linkedIn,
        personal.website,
        personal.address,
    ]
        .filter((field) => field !== '')
        .join(' | ');

    let majorLine = `${education.degree} in ${education.major}`;
    if (education.minor) {
        majorLine += `, Minor in ${education.minor}`;
    }

    return (
        <div id="resume">
            <div className="header">
                <h1>
                    {personal.firstName} {personal.lastName}
                </h1>
                <p>{personalDataAux}</p>
            </div>
            <div className="section">
                <div className="section-header">EDUCATION</div>
                <div className="subsection">
                    <div className="split-line">
                        <strong>{education.school}</strong>
                        <DateRange
                            startDate={education.startDate}
                            endDate={education.endDate}
                        />
                    </div>
                    <div className="split-line">
                        <i>{majorLine}</i>
                        <i>{`GPA: ${education.gpa}`}</i>
                    </div>
                    <strong>Relevant Coursework:</strong>
                    <br />
                    <i>{education.coursework.join(', ')}</i>
                </div>
            </div>
            <div className="section">
                <div className="section-header">EXPERIENCE</div>
                <div className="subsection">
                    {experience.map((exp, idx) => (
                        <Experience key={idx} exp={exp} />
                    ))}
                </div>
            </div>
            <div className="section">
                <div className="section-header">PROJECTS</div>
                <div className="subsection">
                    {projects.map((proj, idx) => (
                        <Project key={idx} proj={proj} />
                    ))}
                </div>
            </div>
            <div className="section">
                <div className="section-header">TECHNICAL SKILLS</div>
                <div className="subsection">
                    <Skills skills={skills}></Skills>
                </div>
            </div>
        </div>
    );
}

function Experience({ exp }) {
    return (
        <>
            <div className="split-line">
                <strong>{exp.title}</strong>
                <DateRange startDate={exp.startDate} endDate={exp.endDate} />
            </div>
            <div className="split-line">
                <div>{exp.company}</div>
                <i>{exp.location}</i>
            </div>
            <ul className="bullets">
                {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                ))}
            </ul>
        </>
    );
}

function Project({ proj }) {
    return (
        <>
            <div>
                <strong>{proj.name}</strong> | <i>{proj.tech}</i>
            </div>
            <ul className="bullets">
                <li>{proj.description}</li>
            </ul>
        </>
    );
}

function Skills({ skills }) {
    return (
        <>
            <div>
                <span style={{ fontWeight: 'bold' }}>Languages: </span>
                <span>{skills.languages.join(', ')}</span>
            </div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Frameworks: </span>
                <span>{skills.frameworks.join(', ')}</span>
            </div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Developer Tools: </span>
                <span>{skills.developerTools.join(', ')}</span>
            </div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Libraries: </span>
                <span>{skills.libraries.join(', ')}</span>
            </div>
        </>
    );
}

function DateRange({ startDate, endDate }) {
    console.log(startDate, endDate);
    const startStr = new Date(startDate + '-01').toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        timeZone: 'UTC',
    });
    const endStr = endDate
        ? new Date(endDate + '-01').toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              timeZone: 'UTC',
          })
        : 'now';
    return (
        <div>
            {startStr} - {endStr}
        </div>
    );
}
