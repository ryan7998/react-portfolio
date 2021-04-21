import React, {useState} from "react";

function PortfolioItem({projects}){
    const[onHover, setOnHover] = useState(false);

    return(
        projects.map(project =>(
            <div className="card text-white col-md-4 my-5" key={project.id} onMouseEnter={()=>setOnHover(project.id)} onMouseLeave={()=>setOnHover(false)}>
                    <img 
                        src={require(`../assets/images/portfolio/Thumbnail/${project.image}`).default} 
                        className="card-img img-fluid img-thumbnail" 
                    />
                    {onHover===project.id && (
                        <div className="card-img-overlay opac text-center text-dark" >
                            <h3 className="text-dark mt-3"><b>{project.title}</b></h3>
                            <div className="row social-links">
                                {/* render only if links are available: */}
                                {project.link && (<div className="col-6"><a href={project.link} className="fas fa-link largeicon" target="_blank"/><div>Live Site</div></div>)}
                                {project.github && (<div className="col-6"><a href={project.github} className="fab fa-github largeicon" target="_blank"/><div>Git Repo</div></div>)}
                            </div>
                            <p className="custom-btn btn card-title text-center mx-3">Focus: <b>{project.category}</b></p>
                        </div>
                    )}
            </div>
        ))
    )
}
export default PortfolioItem;