import React from 'react';

function Footer(){
    return(
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-12 text-center">
                        <ul className="social-links mt-2">
                            <li><a href="#" rel="noopener" className="fab fa-github"></a></li>
                            <li><a href="#" rel="noopener" className="fab fa-linkedin"></a></li>
                            <li><a href="#" rel="noopener" className="fas fa-project-diagram"></a></li>
                        </ul>
                        
                        <p className="text-dark"><i className="fas fa-phone-alt mr-1" />437-234-6677</p>
                        <p className="text-dark">
                            <i className="fas fa-envelope-open mr-1" />
                            <a href="/">mail@fazleryan.com</a>
                        </p>
                        <p className="copyright-text mt-5 pt-3">Copyright &copy; 2021 Fazle Ryan</p>
                    </div>
                </div>
            </div>
        </section>
     
    )
}

export default Footer;