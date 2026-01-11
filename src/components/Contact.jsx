import React from 'react'

function Contact() {
    return (
        <div className="tmp-contact-area" id="contacts">
            <div className="inner">
                <div className="contact-get-in-touch-wrap">

                    <div className="section-head text-align-left mb--50">
                        <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                            GET IN TOUCH{" "}
                            <span>
                                <img
                                    src="assets/images/custom-line/custom-line.png"
                                    alt="custom-line"
                                />
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

                    <div className="contact-inner">
                        <div className="contact-form">

                            <div id="form-messages" className="error"></div>

                            <form
                                className="tmp-dynamic-form"
                                id="contact-form"
                                method="POST"
                                action="https://inversweb.com/product/html/reeni/mailer.php"
                            >
                                <div className="contact-form-wrapper row">

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="input-field"
                                                name="name"
                                                id="contact-name"
                                                placeholder="Your Name"
                                                type="text"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="input-field"
                                                name="phone"
                                                id="contact-phone"
                                                placeholder="Phone Number"
                                                type="number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="input-field"
                                                id="contact-email"
                                                name="email"
                                                placeholder="Your Email"
                                                type="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="input-field"
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea
                                                className="input-field"
                                                placeholder="Your Message"
                                                name="message"
                                                id="contact-message"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="tmp-button-here">
                                            <button
                                                className="tmp-btn hover-icon-reverse radius-round w-100"
                                                name="submit"
                                                type="submit"
                                                id="submit"
                                            >
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Appointment Now</span>
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
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact