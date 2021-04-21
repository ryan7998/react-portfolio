import React, {useState, useEffect} from 'react';

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
                <a className="navbar-brand" href="">Fazle Ryan</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!collapse} aria-label="Toggle navigation" onClick={()=>setCollapse(!collapse)} >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${!collapse && 'show'}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        
                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='About Me' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('About Me'); setCollapse(!collapse)}}>About Me</span>
                        </li>

                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Portfolio' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('Portfolio'); setCollapse(!collapse)}}>Portfolio</span>
                        </li>

                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Contact' && 'active text-white'}`} onClick={()=>{setMenuItemSelected('Contact'); setCollapse(!collapse)}}>Contact</span>
                        </li>
                    </ul>

                    <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                        <a href="#" className="custom-btn" onClick={()=>{setMenuItemSelected('Resume'); setCollapse(!collapse)}}>Resume</a>
                    </div>
                </div>

            </div>
        </nav>        
    )
}
export default Navbar;