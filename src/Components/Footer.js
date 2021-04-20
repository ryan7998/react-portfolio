import React from 'react';

function Footer(){
    return(
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-12 text-center">
                        <ul className="social-links mt-2">
                            <li><a href="#" className="fab fa-github"></a></li>
                            <li><a href="#" className="fab fa-linkedin"></a></li>
                            <li><a href="#" className="fas fa-project-diagram"></a></li>
                        </ul>
                        <p className="text-dark ">
                            <i className="fas fa-phone-alt mr-3" /><span className="mr-5">437-234-6677</span>
                            <i className="fas fa-envelope-open mr-3" /> <span>mail@fazleryan.com</span>
                        </p>
                        <p className="copyright-text">Copyright &copy; 2021 Fazle Ryan</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;