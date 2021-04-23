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
                            <h1 className="hero-title">Hi! I am Fazle Ryan Chowdhury</h1>
                            <a href="#" className="email-link">
                                A full stack developer
                            </a>
                            {/* <h1 className="hero-title">Ryan, a full stack developer</h1>
                            <a href="#" className="email-link">
                                mail@fazleryan.com
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about section-padding pt-0" id="about">
        <div className="container">
                <div className="row">
                    <div className="mx-auto col-12">
                        <h1 className="mb-5 text-center"><i className="far fa-user mr-5"/>About Me</h1>
                        <p>
                            I am a full stack web developer with a background in JS (MERN Stack) and also a Zend Certified PHP Engineer.<br />
                            I love creating logical and innovative solutions to complex problems.
                            I am committed to having an impact on the future of the industry, 
                            and possess the enthusiasm and commitment to learn and develop within a fast paced and growing organization. <br />
                            I am experienced working in a global IT company and also as a freelancer.
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