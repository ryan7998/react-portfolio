import React, {useState}from 'react';
import {validateEmail} from '../utils/helpers'

function Contact(){
    const [formState, setFormState] = useState({name:"", email:"", message:""});
    const [errorMessage, setErrorMessage] = useState();
    const {name, email, message} = formState;
    
    function handleChange(event){
        if(event.target.name === 'email'){
            !validateEmail(event.target.value) ? setErrorMessage('Your email is invalid') : setErrorMessage('')
        }else{
            !event.target.value.length ? setErrorMessage(`${event.target.name} is required`) : setErrorMessage('');
        }
        if(!errorMessage){
            setFormState({...formState, [event.target.name]:event.target.value});
        }
    }
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(formState);
    }

    return(
        <section className="hero d-flex flex-column justify-content-center align-items-center section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="my-5 text-center"><i className="far fa-envelope-open mr-5" />Contact Me</h1>

                        <form id="contact-form" onSubmit={handleSubmit} className="contact-form webform">
                            <div className="form-group d-flex flex-column-reverse">
                                <input type="text" className="form-control" name="name" id="cf-name" placeholder="Your Name" defaultValue={name} onBlur={handleChange}/>
                                <label htmlFor="cf-name" className="webform-label">Full Name</label>
                            </div>
                            <div className="form-group d-flex flex-column-reverse">
                                <input type="email" className="form-control" name="email" id="cf-email" placeholder="Your Email" defaultValue={email} onBlur={handleChange} />
                                <label htmlFor="cf-email" className="webform-label">Your Email</label>
                            </div>
                            <div className="form-group d-flex flex-column-reverse">
                                <textarea className="form-control" rows="5" name="message" id="cf-message" placeholder="Your Message" defaultValue={message} onBlur={handleChange} />
                                <label htmlFor="cf-message" className="webform-label">Message</label>
                            </div>
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            <button type="submit" className="form-control" id="submit-button" name="submit">Send</button>
                        </form>
                    </div>
                    <div className="row mt-5">
                        <p>Or please call me at: 437-234-667 or mail me at mail@fazleryan.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;