import React from 'react'

function Resume() {
    return (
        <div className="tmp-resume-area" id="resume">

            {/* ================= EDUCATION ================= */}
            <div className="inner">
                <div className="section-head text-align-left mb--50">
                    <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        Education{" "}
                        <span>
                            <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                        </span>
                    </h2>

                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                        Elevate your brand with a the
                    </h2>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                        ished fact that a reader will be distrol acted bioiiy desig ished fact
                        that a reader <br /> will acted ished fact that a reader will be distrol acted
                    </p>
                </div>

                <div className="row g-5">

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                            <h4 className="edu-sub-title">Trainer Marketing</h4>
                            <h2 className="edu-title">2005-2009</h2>
                            <p className="edu-para">
                                A personal portfolio is a curated collection of an individual's professional
                                work, showcasing their skills, experience A personal portfolio.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                            <h4 className="edu-sub-title">Assistant Director</h4>
                            <h2 className="edu-title">2010-2014</h2>
                            <p className="edu-para">
                                Each project here showcases my commitment to excellence and adaptability,
                                tailored to meet each client’s unique needs.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                            <h4 className="edu-sub-title">Design Assistant</h4>
                            <h2 className="edu-title">2008-2012</h2>
                            <p className="edu-para">
                                I’ve had the privilege of working with various clients, from startups to
                                established companies, helping bring their visions to life.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                            <h4 className="edu-sub-title">Design Assistant</h4>
                            <h2 className="edu-title">2008-2012</h2>
                            <p className="edu-para">
                                Each project here showcases my commitment to excellence and adaptability,
                                tailored to meet each client’s unique needs a personal.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= SKILLS ================= */}
            <div className="inner pt--60">
                <div className="row">

                    {/* DESIGN SKILLS */}
                    <div className="col-lg-6">
                        <div className="progress-wrapper">
                            <div className="content">
                                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    Design Skill{" "}
                                    <span>
                                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                                    </span>
                                </h2>

                                {[
                                    { name: "PHOTOSHOP", value: "100%", dur: "0.5s", delay: "0.3s" },
                                    { name: "FIGMA", value: "95%", dur: "0.6s", delay: "0.4s" },
                                    { name: "ADOBE XD", value: "60%", dur: "0.7s", delay: "0.5s" },
                                    { name: "ADOBE ILLUSTRATOR", value: "70%", dur: "0.8s", delay: "0.6s" },
                                ].map((skill, i) => (
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

                    {/* DEVELOPMENT SKILLS */}
                    <div className="col-lg-6">
                        <div className="progress-wrapper">
                            <div className="content">
                                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    Development Skill{" "}
                                    <span>
                                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                                    </span>
                                </h2>

                                {[
                                    { name: "PHOTOSHOP", value: "100%", dur: "0.5s", delay: "0.3s" },
                                    { name: "FIGMA", value: "95%", dur: "0.6s", delay: "0.4s" },
                                    { name: "ADOBE XD", value: "60%", dur: "0.7s", delay: "0.5s" },
                                    { name: "ADOBE ILLUSTRATOR", value: "70%", dur: "0.8s", delay: "0.6s" },
                                ].map((skill, i) => (
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

            {/* ================= EXPERIENCE ================= */}
            <div className="inner pt--60">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Experience{" "}
                    <span>
                        <img src="assets/images/custom-line/custom-line.png" alt="custom-line" />
                    </span>
                </h2>

                <div className="row g-5">

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                            <h4 className="edu-sub-title">Jr. Web Developer</h4>
                            <h2 className="edu-title">2005-2009</h2>
                            <p className="edu-para">
                                A personal portfolio is a curated collection of an individual's professional
                                work, showcasing their skills, experience A personal portfolio.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                            <h4 className="edu-sub-title">Sr. Web Developer</h4>
                            <h2 className="edu-title">2010-2014</h2>
                            <p className="edu-para">
                                Each project here showcases my commitment to excellence and adaptability,
                                tailored to meet each client’s unique needs.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                            <h4 className="edu-sub-title">Sr. Graphic Designer</h4>
                            <h2 className="edu-title">2008-2012</h2>
                            <p className="edu-para">
                                I’ve had the privilege of working with various clients, from startups to
                                established companies, helping bring their visions to life.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                            <h4 className="edu-sub-title">Design Assistant</h4>
                            <h2 className="edu-title">2008-2012</h2>
                            <p className="edu-para">
                                Each project here showcases my commitment to excellence and adaptability,
                                tailored to meet each client’s unique needs a personal.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resume