import { projects } from "../data/work";

function Wrok() {
    return (
        <div className="tmp-portfolio-area" id="portfolio">
            <div className="inner">

                <div className="section-head text-align-left mb--50">
                    <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        My Completed Work{" "}
                        <span>
                            <img
                                src="assets/images/custom-line/custom-line.png"
                                alt="custom-line"
                            />
                        </span>
                    </h2>

                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                        Real-World Solutions Across<br />
                        Multiple Industries
                    </h2>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                        Over 3 years, I've designed and developed production-ready web applications across diverse domains including
                        <span className='primaryColor'> CRM System, Education Management, Travel Technology, and Payslip Management System</span>.
                        Each project showcases my ability to translate complex business requirements into scalable, user-friendly applications
                        using modern web technologies.
                    </p>
                </div>

                <div className="row">
                    {projects.map((item, i) => (
                        <div className="col-lg-12 col-md-12 col-sm-12" key={i}>
                            <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <img src={item.img} alt={item.title} />

                                <div className="portfolio-card-content-wrap">
                                    <div className="content-left">
                                        <p className="portfoli-card-para">{item.category}</p>
                                        <h3 className="portfolio-card-title animated fadeIn">
                                            <a href={item.link}>{item.title}</a>
                                        </h3>
                                        <p className="portfolio-description">{item.description}</p>
                                        <div className="portfolio-tech">
                                            <small className="primaryColor">{item.tech}</small>
                                        </div>
                                    </div>

                                    <div className="portfolio-btn">
                                        {/* <a href={item.link} className="tmp-arrow-icon-btn">
                                            <div className="btn-inner">
                                                <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                                                <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                                            </div>
                                        </a> */}
                                    </div>
                                </div>

                                <a href={item.link} className="over_link"></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wrok