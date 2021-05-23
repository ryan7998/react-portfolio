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
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about section-padding pt-0" id="about">
        <div className="container">
                <div className="row">
                    <div className="mx-auto col-12 text-center">
                        <p>
                            With a bachelor's degree in computer science and 3 years experience on web development with PHP, <br />
                            I am looking for a junior level position as a JS (MERN stack) developer. <br />
                            I have recently completed bootcamp course focusing on JS from University of Toronto, <br />
                            and I am also a Zend Certified Engineer. I also have 5 years experience managing my own business.<br />
                            <a href = "https://www.upwork.com/fl/fazleryan" target="_blank">Click here</a> to checkout my freelancing profile.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default AboutMe;