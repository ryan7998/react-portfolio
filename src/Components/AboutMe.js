import React from 'react';
import profileImg from '../assets/images/fazle.jpg'

function AboutMe(){
    return(
    <React.Fragment> 
        <section className="hero d-flex flex-column justify-content-center align-items-center mt-5 pt-5" id="intro">
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
                        <h3 className="mb-4 text-center">About Fazle Ryan</h3>
                        <p>
                            A full stack web developer with a strong background in PHP, HTML/CSS, Javascript, Jquery, Node. 
                            Ryan has much experience of creating logical and innovative solutions to complex problems. 
                            He is a Zend Certified PHP programmer. He is committed to having an impact on the future of the industry, 
                            and possesses the enthusiasm and commitment to learn and develop his career within a fast paced and growing business. 
                            He has experience of working in a leading global internet technology company and of completing challenging client projects.
                        </p>

                        <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                            <li><strong>Full Name :</strong> Ben Wilson </li>
                            <li><strong>Date of Birth:</strong> 26 September 1999</li>
                            <li><strong>Website :</strong> company.co</li>
                            <li><strong>Email :</strong> hello@company.co</li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-5 mx-auto col-md-6 col-12">
                        <img src="images/true-agency.jpg" className="about-image img-fluid" alt="Ben's Resume HTML Template" />
                    </div> */}
                </div>
                <div className="row about-third">
                    <div className="col-lg-4 col-md-4 col-12">
                    <h3>Integer volutpat</h3>
                    <p>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <h3>Mauris semper</h3>
                    <p>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <h3>Integer id neque</h3>
                    <p>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default AboutMe;