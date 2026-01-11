import React from 'react'

function Blog() {
    return (
        <div className="tmp-blog-area" id="blog">
            <div className="inner">

                <div className="section-head text-align-left mb--50">
                    <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        My Recent Post{" "}
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

                <div className="row g-5">

                    {[
                        {
                            img: "assets/images/blog/blog-img-7.jpg",
                            title: "Inspiring the World, One Project at a Time for the man",
                        },
                        {
                            img: "assets/images/blog/blog-img-8.jpg",
                            title: "Let’s bring your ideas to life! Contact me, and let’s",
                        },
                        {
                            img: "assets/images/blog/blog-img-9.jpg",
                            title: "Each one showcases my approach and dedication man",
                        },
                        {
                            img: "assets/images/blog/blog-img-4.jpg",
                            title: "Each one showcases my approach and dedication man",
                        },
                    ].map((blog, i) => (
                        <div className="col-lg-6 col-md-6 col-12" key={i}>
                            <div className={`blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${i + 1}`}>

                                <div className="blog-card-img">
                                    <div className="img-box">
                                        <a href="blog-details.html">
                                            <img
                                                className="img-primary hidden-on-mobile"
                                                src={blog.img}
                                                alt="Blog Thumbnail"
                                            />
                                            <img
                                                className="img-secondary"
                                                src={blog.img}
                                                alt="Blog Thumbnail"
                                            />
                                        </a>
                                    </div>
                                    <span>12 Feb</span>
                                </div>

                                <div className="blog-content-wrap">
                                    <div className="blog-tags">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa-regular fa-user"></i> Mesbah</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa-regular fa-comments"></i> Comments (05)</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="blog-title">
                                        <a href="blog-details.html">{blog.title}</a>
                                    </h3>

                                    <div className="tmp-button-here">
                                        <a
                                            className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                                            href="blog-details.html"
                                        >
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Read More</span>
                                                <span className="btn-icon">
                                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Blog