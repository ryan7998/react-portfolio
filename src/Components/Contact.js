import React from 'react';
function Contact(){
    return(
        <section className="hero d-flex flex-column justify-content-center align-items-center section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#" method="get" className="contact-form webform"  role="form">
                            
                            <div className="form-group d-flex flex-column-reverse">
                                <input type="text" className="form-control" name="cf-name" id="cf-name" placeholder="Your Name" />

                                <label htmlFor="cf-name" className="webform-label">Full Name</label>
                            </div>

                            <div className="form-group d-flex flex-column-reverse">
                                <input type="email" className="form-control" name="cf-email" id="cf-email" placeholder="Your Email" />

                                <label htmlFor="cf-email" className="webform-label">Your Email</label>
                            </div>

                            <div className="form-group d-flex flex-column-reverse">
                                <textarea className="form-control" rows="5" name="cf-message" id="cf-message" placeholder="Your Message"></textarea>

                                <label htmlFor="cf-message" className="webform-label">Message</label>
                            </div>

                            <button type="submit" className="form-control" id="submit-button" name="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;