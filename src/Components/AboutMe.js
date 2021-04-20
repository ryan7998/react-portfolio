import React from 'react';
import profileImg from '../assets/images/fazle.jpg'

function AboutMe(){
    return(
    <React.Fragment> 
        <section className="hero d-flex flex-column justify-content-center align-items-center section-padding" id="intro">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-5 col-md-5 col-10">
                        <img src={profileImg} className="img-fluid rounded-circle" alt="Fazle Resume" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                        <div className="hero-text">
                            <h1 className="hero-title">👋 Fazle, a full stack developer</h1>
                            <a href="#" className="email-link">
                                mail@fazleryan.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about section-padding" id="about">
        <div className="container">
                <div className="row">
                    <div className="mx-auto col-12">
                        <h3 className="my-5 text-center">About Fazle Ryan</h3>
                        <p>
                            A full stack web developer with a strong background in PHP, HTML/CSS, Javascript, Jquery, Node. 
                            Ryan has much experience of creating logical and innovative solutions to complex problems. 
                            He is a Zend Certified PHP programmer. He is committed to having an impact on the future of the industry, 
                            and possesses the enthusiasm and commitment to learn and develop his career within a fast paced and growing business. 
                            He has experience of working in a leading global internet technology company and of completing challenging client projects.
                        </p>
                    </div>
                    {/* <div className="col-lg-5 mx-auto col-md-6 col-12">
                        <img src="images/true-agency.jpg" className="about-image img-fluid" alt="Ben's Resume HTML Template" />
                    </div> */}
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default AboutMe;