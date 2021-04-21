import React from 'react';

function Footer(){
    return(
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-12 text-center">
                        <ul className="social-links mt-2">
                            <li><a href="https://github.com/ryan7998" className="fab fa-github largeicon" target="_blank"></a>
                                <div className="col text-center text-dark">GitHub</div>
                            </li>
                            <li><a href="https://www.linkedin.com/in/fazle-ryan/" className="fab fa-linkedin largeicon" target="_blank"></a>
                                <div className="col text-center text-dark">LinkedIn</div>
                            </li>
                            <li><a href="https://www.upwork.com/fl/fazleryan" className="fas fa-project-diagram largeicon" target="_blank"></a>
                                <div className="col text-center text-dark">Freelance</div>
                            </li>
                        </ul>
                        <p className="text-dark">
                            <i className="fas fa-phone-alt mr-3" /><span className="mr-5">437-234-6677</span>
                            <i className="fas fa-envelope-open mr-3" /><span>mail@fazleryan.com</span>
                        </p>
                        <p className="copyright-text">Copyright &copy; 2021 Fazle Ryan Chowdhury</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;