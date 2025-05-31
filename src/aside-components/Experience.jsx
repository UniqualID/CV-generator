import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function ExperienceComponent({
    isActive,
    onShow,
    data,
    setData,
}) {
    const [currentJob, setCurrentJob] = useState('');
    const onChange = (expId, prop, value) => {
        setData(
            data.map((exp) => {
                if (exp.id !== expId) {
                    return exp;
                } else {
                    const newExp = {
                        ...exp,
                        [prop]: value,
                    };
                    return newExp;
                }
            })
        );
    };

    const handleDelete = (expId) => {
        setData(data.filter((exp) => exp.id !== expId));
    };

    const setJob = (e, expId) => {
        if (currentJob === expId) {
            setCurrentJob('');
            e.target.checked = false;
        } else {
            setCurrentJob(expId);
            e.target.checked = true;
        }
        setData(
            data.map((exp) => {
                if (exp.id === expId) {
                    return {
                        ...exp,
                        endDate: '',
                    };
                }
                return exp;
            })
        );
    };

    const handleAdd = () => {
        setData([
            ...data,
            {
                id: uuidv4(),
                title: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                bullets: [],
            },
        ]);
    };
    return (
        <li>
            <button
                className={`dropdown${isActive ? ' rotate active' : ''}`}
                onClick={onShow}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                </svg>
                <span>Experience</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                >
                    <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"></path>
                </svg>
            </button>
            <div className={`submenu${isActive ? ' show' : ''}`}>
                <div className="submenu-container">
                    <ul className="section-list">
                        {data.map((exp) => (
                            <div className="input-form list-item" key={exp.id}>
                                <div className="input-unit">
                                    <input
                                        type="text"
                                        id={`expCompany-${exp.id}`}
                                        value={exp.company}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'company',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`expCompany-${exp.id}`}>
                                        Company
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        type="text"
                                        id={`expTitle-${exp.id}`}
                                        value={exp.title}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'title',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`expTitle-${exp.id}`}>
                                        Title
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        type="month"
                                        id={`expStartDate-${exp.id}`}
                                        value={exp.startDate}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'startDate',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`expStartDate-${exp.id}`}>
                                        Start Month
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        type="month"
                                        id={`expEndDate-${exp.id}`}
                                        value={exp.endDate}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'endDate',
                                                e.target.value
                                            )
                                        }
                                        disabled={currentJob === exp.id}
                                    />
                                    <label htmlFor={`expEndDate-${exp.id}`}>
                                        End Month
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        type="text"
                                        id={`expLocation-${exp.id}`}
                                        value={exp.location}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'location',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`expLocation-${exp.id}`}>
                                        Location
                                    </label>
                                </div>
                                <div className="input-unit whole-row">
                                    <textarea
                                        id={`expBullets-${exp.id}`}
                                        value={exp.bullets.join('|')}
                                        onChange={(e) =>
                                            onChange(
                                                exp.id,
                                                'bullets',
                                                e.target.value.split('|')
                                            )
                                        }
                                    />
                                    <label htmlFor={`expBullets-${exp.id}`}>
                                        Job Description (| delimited)
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        id={`expCurrent-${exp.id}`}
                                        checked={currentJob === exp.id}
                                        onClick={(e) => setJob(e, exp.id)}
                                    />
                                    <label htmlFor={`expCurrent-${exp.id}`}>
                                        Current Job?
                                    </label>
                                </div>
                                <div className="input-unit whole-row">
                                    <button
                                        className="deleteBtn"
                                        onClick={() => handleDelete(exp.id)}
                                    >
                                        Delete Experience
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className="input-form">
                        <button className="addBtn" onClick={handleAdd}>
                            Add Experience
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
