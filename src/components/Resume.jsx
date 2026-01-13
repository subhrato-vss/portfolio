import { frontend, backend } from "../data/resume";

function Resume() {
    return (
        <div className="tmp-resume-area" id="resume">

            {/* ================= EXPERIENCE ================= */}
            <div className="inner">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Experience{" "}
                    <span>
                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                    </span>
                </h2>

                <div className="row g-5">

                    {/* Software Engineer */}
                    <div className="col-sm-12">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                            <h4 className="edu-sub-title">Software Engineer</h4>
                            <h2 className="edu-title">Jun 2024 - Present</h2>
                            <p className="edu-para">
                                Veenus Software Solutions, Amritsar.
                            </p>
                            <ul className="mb-0 custom-list">
                                <li><span className='text-white fw-bold'>Full Stack Development:</span> Engineered web applications using React.js, Node.js, Express.js, and
                                    MySQL.</li>
                                <li><span className='text-white fw-bold'>Frontend Integration:</span> Developed responsive UI components and connected them with RESTful
                                    APIs.</li>
                                <li><span className='text-white fw-bold'>Security Implementation:</span> Applied JWT and RBAC for secure authentication and authorization.</li>
                                <li><span className='text-white fw-bold'>Performance Optimization:</span> Optimized backend logic and database queries to improve scalability.</li>
                                <li><span className='text-white fw-bold'>Collaboration:</span> Worked with cross-functional teams to deliver production-ready applications.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Assistant Software Developer */}
                    <div className="col-sm-12">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                            <h4 className="edu-sub-title">Assistant Software Developer</h4>
                            <h2 className="edu-title">Jul 2021 - Jul 2022</h2>
                            <p className="edu-para">
                                Veenus Software Solutions, Amritsar.
                            </p>
                            <ul className="mb-0 custom-list">
                                <li><span className='text-white fw-bold'>Full Stack Support:</span> Contributed to Node.js, Express.js, React.js, and MySQL applications.</li>
                                <li><span className='text-white fw-bold'>UI/Backend Assistance:</span> Assisted in creating frontend components and integrating backend APIs.</li>
                                <li><span className='text-white fw-bold'>Debugging & Testing:</span> Performed code debugging, testing, and performance enhancements.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Intern */}
                    <div className="col-sm-12">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                            <h4 className="edu-sub-title">Full Stack Developer Intern</h4>
                            <h2 className="edu-title">Jan 2021 - Jun 2021</h2>
                            <p className="edu-para">
                                VMM Education, Amritsar.
                            </p>
                            <ul className="mb-0 custom-list">
                                <li><span className='text-white fw-bold'>Hands-On Training:</span> Acquired experience in Node.js, Express.js, and MySQL full stack
                                    development.</li>
                                <li><span className='text-white fw-bold'>API Support:</span> Supported creation of RESTful APIs and database-driven applications.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= EDUCATION ================= */}
            <div className="inner pt--60">
                <div className="section-head text-align-left mb--50">
                    <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        Education{" "}
                        <span>
                            <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                        </span>
                    </h2>

                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                        Academic Background
                    </h2>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                        My academic journey has built a strong foundation in computer science, software
                        development, and modern web technologies.
                    </p>
                </div>

                <div className="row g-5">

                    {/* MCA */}
                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                            <h4 className="edu-sub-title">Master of Computer Applications (MCA)</h4>
                            <h2 className="edu-title">2022 – 2024</h2>
                            <p className="edu-para">
                                Amritsar Group of Colleges, Amritsar, Punjab.
                            </p>
                        </div>
                    </div>

                    {/* BCA */}
                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                            <h4 className="edu-sub-title">Bachelor of Computer Applications (BCA)</h4>
                            <h2 className="edu-title">2015 – 2018</h2>
                            <p className="edu-para">
                                DAV College, Amritsar, Punjab.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= SKILLS ================= */}
            <div className="inner pt--60">
                <div className="row">

                    {/* FRONTEND & STATE MANAGEMENT */}
                    <div className="col-lg-6">
                        <div className="progress-wrapper">
                            <div className="content">
                                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    Frontend & State Skills{" "}
                                    <span>
                                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                                    </span>
                                </h2>

                                {frontend.map((skill, i) => (
                                    <div className="progress-charts" key={i}>
                                        <h6 className="heading heading-h6">{skill.name}</h6>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft"
                                                role="progressbar"
                                                style={{
                                                    width: skill.value,
                                                    visibility: "visible",
                                                    animationDuration: skill.dur,
                                                    animationDelay: skill.delay,
                                                }}
                                            >
                                                <span className="percent-label">{skill.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BACKEND, DATABASE & DEVOPS */}
                    <div className="col-lg-6">
                        <div className="progress-wrapper">
                            <div className="content">
                                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    Backend & System Skills{" "}
                                    <span>
                                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                                    </span>
                                </h2>

                                {backend.map((skill, i) => (
                                    <div className="progress-charts" key={i}>
                                        <h6 className="heading heading-h6">{skill.name}</h6>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft"
                                                role="progressbar"
                                                style={{
                                                    width: skill.value,
                                                    visibility: "visible",
                                                    animationDuration: skill.dur,
                                                    animationDelay: skill.delay,
                                                }}
                                            >
                                                <span className="percent-label">{skill.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resume