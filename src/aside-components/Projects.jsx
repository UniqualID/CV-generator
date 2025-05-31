export default function ProjectsComponent({ isActive, onShow, data, setData }) {
    const onChange = (projId, prop, value) => {
        setData(
            data.map((proj) => {
                if (proj.id !== projId) {
                    return proj;
                } else {
                    const newProj = {
                        ...proj,
                        [prop]: value,
                    };
                    return newProj;
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
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                </svg>
                <span>Projects</span>
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
                        {data.map((proj) => (
                            <div className="input-form list-item" key={proj.id}>
                                <div className="input-unit">
                                    <input
                                        type="text"
                                        id={`projName-${proj.id}`}
                                        value={proj.name}
                                        onChange={(e) =>
                                            onChange(
                                                proj.id,
                                                'name',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`projName-${proj.id}`}>
                                        Project Name
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <input
                                        type="text"
                                        id={`projTech-${proj.id}`}
                                        value={proj.tech}
                                        onChange={(e) =>
                                            onChange(
                                                proj.id,
                                                'tech',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`projTech-${proj.id}`}>
                                        Technology Used
                                    </label>
                                </div>
                                <div className="input-unit">
                                    <textarea
                                        id={`projDesc-${proj.id}`}
                                        value={proj.description}
                                        onChange={(e) =>
                                            onChange(
                                                proj.id,
                                                'description',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor={`projDesc-${proj.id}`}>
                                        Description
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
