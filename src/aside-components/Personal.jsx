export default function PersonalComponent({ isActive, onShow, data, setData }) {
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-pen"
                    aria-hidden="true"
                >
                    <path d="M11.5 15H7a4 4 0 0 0-4 4v2"></path>
                    <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                    <circle cx="10" cy="7" r="4"></circle>
                </svg>
                <span>Personal</span>
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
                            <input
                                type="text"
                                id="firstName"
                                value={data.firstName}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="text"
                                id="lastName"
                                required
                                value={data.lastName}
                                onChange={onChange}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="tel"
                                id="phone"
                                required
                                value={data.phone}
                                onChange={onChange}
                            />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="email"
                                id="email"
                                pattern="^[a-zA-Z]+@[a-zA-Z]+$"
                                value={data.email}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="email">e-mail</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="text"
                                id="linkedIn"
                                onChange={onChange}
                                value={data.linkedIn}
                            />
                            <label htmlFor="linkedIn">linkedIn</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="text"
                                id="website"
                                onChange={onChange}
                                value={data.website}
                            />
                            <label htmlFor="website">Website</label>
                        </div>
                        <div className="input-unit">
                            <input
                                type="text"
                                id="address"
                                onChange={onChange}
                                value={data.address}
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
