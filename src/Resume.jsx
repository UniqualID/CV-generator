import './Resume.css';

export default function Resume({ personal, education, experience }) {
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
                        <div>{`${education.startDate} - ${education.endDate}`}</div>
                    </div>
                    <div className="split-line">
                        <i>{majorLine}</i>
                        <i>{`GPA: ${education.gpa}`}</i>
                    </div>
                    <strong>Relevant Coursework:</strong>
                    <br />
                    <i>{education.coursework.join(',')}</i>
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
        </div>
    );
}

function Experience({ exp }) {
    return (
        <>
            <div className="split-line">
                <strong>{exp.title}</strong>
                <div>{`${exp.startDate} - ${exp.endDate}`}</div>
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
