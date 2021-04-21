import React from 'react';
import resumeDoc from '../assets/files/resume-fazle_ryan.docx';

function resume(){
    return(
        <section className="hero d-flex flex-column justify-content-center align-items-center section-padding" id="intro">
            <div className="container">
                <div className="row">
                    <h1 className="my-5 text-center">Technical Skills</h1>
                    <div className="col-md-12">
                        <p><b>Skills:</b> Nodejs, JavaScript , React.js, PHP, Drupal, MySql, sqlite, ORM (Sequelize), MongoDB, ODM (Mongoose), 
                        IndexedDB, HTML, CSS, jQuery, Bootstrap, Flex, Grid, Zurb Foundation, Wordpress, TDD(Jest).<br></br>
                        <b>Application /Technologies:</b> Git, Heroku, Slack, Confluence, Asana, Jira, Unfuddle STACK, 
                        cross-platform FTP application, composer, drush, Insomnia.<br></br>
                        <b>Other skills:</b> Server architecture(NGINX, Apache, MySQL database), SEO coding best practices.</p>
                    </div>
                    <div className="col-md-12 mt-5">
                        <a className="custom-btn" href={resumeDoc} target="_blank" download> Download My Resume (.docx)</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default resume;