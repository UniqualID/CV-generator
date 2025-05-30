export default function ExperienceComponent({
    isActive,
    onShow,
    data,
    setData,
}) {
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
                            <div className="input-form list-item">
                                <div className="input-unit" key={exp.id}>
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
                                <div className="input-unit" key={exp.id}>
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
                                <div className="input-unit" key={exp.id}>
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
                                <div className="input-unit" key={exp.id}>
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
                                    />
                                    <label htmlFor={`expEndDate-${exp.id}`}>
                                        End Month
                                    </label>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}
