import { services, stats } from "../data/about";

function About() {
    return (
        <div id="about" className="tmp-about-area">
            <div className="about-us-right-content-wrap">

                {/* Section Header */}
                <div className="section-head text-align-left mb--50">
                    <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        About Me{" "}
                        <span>
                            <img
                                src="assets/images/custom-line/custom-line.png"
                                alt="custom-line"
                            />
                        </span>
                    </h2>

                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                        Building Web Solutions<br />
                        That Work in the Real World
                    </h2>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 text-justify">
                        Full Stack Developer with 3 years of experience in designing, building, and deploying scalable web
                        applications. Strong expertise in <span className='primaryColor'>React.js, Node.js, Express.js, and MySQL</span> with hands-on experience in RESTful API development, CRUD operations, JWT-based authentication, and role-based access
                        control. Proven ability to create responsive user interfaces, integrate frontend and backend systems, optimize performance, and deliver production-ready solutions across <span className='primaryColor'> CRM, Education, Travel, and Payroll</span> domains.
                    </p>
                </div>

                {/* Services Section */}
                <div className="about-us-section-card row g-5">
                    <h3>What I Do?</h3>

                    {services.map((service, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className={`about-us-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-${service.order}`}>
                                <div className="card-head">
                                    <div className="logo-img">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3 className="card-title">{service.title}</h3>
                                </div>
                                <p className="card-para">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats/Counter Section */}
                <div className="pt--60">
                    <div className="row g-5">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-lg-3 col-sm-6 col-12">
                                <div className={`counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-${stat.order}`}>
                                    <h3 className="counter counter-title">
                                        <span className="odometer" data-count={stat.count}>00</span>
                                        {stat.suffix}
                                    </h3>
                                    <p className="counter-para">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About