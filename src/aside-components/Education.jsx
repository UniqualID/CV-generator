import TagsBox from './TagBox';

export default function EducationComponent({
    isActive,
    onShow,
    data,
    setData,
}) {
    console.log('Rendering Education');
    console.log(data);
    const onChange = (e) => {
        setData((prev) => {
            console.log(e);
            return {
                ...prev,
                [e.target.id]: e.target.value,
            };
        });
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
                    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                </svg>
                <span>Education</span>
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
                        <div className="input-unit whole-row">
                            <input
                                type="text"
                                id="school"
                                value={data.school}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="school">School</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="month"
                                id="startDate"
                                value={data.startDate}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="startDate">Start Month</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="month"
                                id="endDate"
                                value={data.endDate}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="endDate">End Month</label>
                        </div>
                        <div className="input-unit">
                            <TagsBox
                                tags={data.coursework}
                                setTags={(tags) => {
                                    setData({
                                        ...data,
                                        coursework: tags,
                                    });
                                }}
                            />
                            <label>Relevant Courses</label>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
