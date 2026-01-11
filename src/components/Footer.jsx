import React from 'react'

function Footer() {
    return (
        <div className="tmp-footer-area footer-style-4 tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-area text-center">

                            {/* <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/favicon.png"
                      alt="Subhrato Singh | Full Stack Developer Portfolio"
                    />
                  </a>
                </div> */}

                            <p className="description mt--30">
                                © {new Date().getFullYear()} {" "}
                                <a
                                    href="/"
                                >
                                    Subhrato Singh
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer