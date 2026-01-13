function LeftSection() {
    function downloadFile() {
        const link = document.createElement('a');
        link.href = 'resume/Subhrato_Singh.pdf';
        link.download = 'Subhrato_Singh.pdf';
        link.click();
    }
    return (
        <div className="col-xxl-3 col-lg-12">
            <div
                className="d-flex flex-wrap align-content-start h-100 w-100 tab-content-overlay-to-top"
                id="home"
            >
                <div className="position-sticky sticky-top tmp-sticky-top w-100">
                    <div className="tmp-contact-about-inner">

                        <div className="thumbnail" style={{ background: 'linear-gradient(180deg, #380C19 0%, rgba(255, 73, 74, 0) 100%)' }}>
                            {/* <div className="thumbnail" style={{ background: 'linear-gradient(to top, #ff6a00, #ee0979)' }}> */}
                            <img
                                src="/assets/images/profile-photo.png"
                                alt="contact-img"
                            />
                        </div>

                        <div className="content">
                            <div className="title-area text-center">
                                <h4 className="title">Subhrato Singh</h4>
                                <span className="subtitle">Full Stack Developer</span>
                            </div>

                            <div className="description">
                                <div className="info-box text-center">
                                    <span className="phone">
                                        Phone: <a href="tel:01941043264">+91 81988 50602</a>
                                    </span>

                                    <span className="mail">
                                        Email: <a href="mailto:subhratosingh@gmail.com">subhratosingh@gmail.com</a>
                                    </span>
                                </div>
                            </div>

                            <div className="social-area mb--30 mt-3">
                                <div className="custom-social-link d-flex justify-content-center">
                                    <a href="https://www.linkedin.com/in/subhrato-singh/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="https://github.com/subhrato-vss" target="_blank"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>

                            <div className="button-area-banner-one d-flex justify-content-center">
                                <button
                                    className="tmp-btn hover-icon-reverse radius-round download-btn"
                                    onClick={downloadFile}
                                >
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Download My CV</span>
                                        <span className="btn-icon">
                                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </span>
                                        <span className="btn-icon">
                                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </span>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection