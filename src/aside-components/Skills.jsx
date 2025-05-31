import TagsBox from './TagBox';

export default function SkillsComponent({ isActive, onShow, data, setData }) {
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
                    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
                </svg>
                <span>Skills</span>
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
                    <div className="input-form">
                        <div className="input-unit">
                            <TagsBox
                                tags={data.languages}
                                setTags={(tags) => {
                                    setData({
                                        ...data,
                                        languages: tags,
                                    });
                                }}
                            />
                            <label>Languages</label>
                        </div>
                    </div>
                    <div className="input-form">
                        <div className="input-unit">
                            <TagsBox
                                tags={data.frameworks}
                                setTags={(tags) => {
                                    setData({
                                        ...data,
                                        frameworks: tags,
                                    });
                                }}
                            />
                            <label>Frameworks</label>
                        </div>
                    </div>
                    <div className="input-form">
                        <div className="input-unit">
                            <TagsBox
                                tags={data.developerTools}
                                setTags={(tags) => {
                                    setData({
                                        ...data,
                                        developerTools: tags,
                                    });
                                }}
                            />
                            <label>Developer Tools</label>
                        </div>
                    </div>
                    <div className="input-form">
                        <div className="input-unit">
                            <TagsBox
                                tags={data.libraries}
                                setTags={(tags) => {
                                    setData({
                                        ...data,
                                        libraries: tags,
                                    });
                                }}
                            />
                            <label>Libraries</label>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
