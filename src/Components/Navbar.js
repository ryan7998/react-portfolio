import React, {useState, useEffect} from 'react';
import profileImg from '../assets/images/fazle.jpg'


function Navbar(props){
    
    const{
        menuItemSelected,
        setMenuItemSelected
    } = props;
    const [scroll, setScroll] = useState(false);
    const [collapse, setCollapse] = useState(true);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    useEffect(()=>{
     document.title = menuItemSelected;   
    },[menuItemSelected]);

    return(
        <nav className={`navbar navbar-expand-lg ${scroll && 'scroll'}`}>
            <div className="container">
                <a className="navbar-brand" href="">
                    {
                        menuItemSelected !== 'About Me' && (
                            <img src={profileImg} className="img-fluid rounded-circle border border-2 mr-3" alt="Fazle Resume" style={{ maxWidth: 50 }} />
                        )
                    }
                    Fazle Ryan
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!collapse} aria-label="Toggle navigation" onClick={()=>setCollapse(!collapse)} >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${!collapse && 'show'}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        
                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='About Me' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('About Me'); setCollapse(!collapse)}}><i className="fas fa-user-alt mr-2" />About Me</span>
                        </li>

                        <li className="nav-item"><span></span>
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Portfolio' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('Portfolio'); setCollapse(!collapse)}}><i className="far fa-file-code mr-2" />Portfolio</span>
                        </li>

                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Contact' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('Contact'); setCollapse(!collapse)}}><i className="far fa-envelope-open mr-2" />Contact</span>
                        </li>
                    </ul>

                    <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                        <a href="#" className="custom-btn" onClick={()=>{setMenuItemSelected('Resume'); setCollapse(!collapse)}}><i className="far fa-file mr-2" />Resume</a>
                    </div>
                </div>

            </div>
        </nav>        
    )
}
export default Navbar;