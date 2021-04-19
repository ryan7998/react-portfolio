import React, {useState, useEffect} from 'react';

function Navbar(props){
    
    const{
        menuItemSelected,
        setMenuItemSelected
    } = props;
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return(
        <nav className={`navbar navbar-expand-lg ${scroll && 'scroll'}`}>
            <div className="container">

                <a className="navbar-brand" href="">Fazle Ryan</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        
                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='About Me' && 'active text-white'}`} onClick={()=>setMenuItemSelected('About Me')}>About Me</span>
                        </li>

                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Portfolio' && 'active text-white'}`} onClick={()=>setMenuItemSelected('Portfolio')}>Portfolio</span>
                        </li>

                        <li className="nav-item">
                            <span className={`nav-link smoothScroll ${menuItemSelected==='Contact' && 'active text-white'}`} onClick={()=>setMenuItemSelected('Contact')}>Contact</span>
                        </li>
                    </ul>

                    <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                        <a href="#" className="custom-btn btn">Resume</a>
                    </div>
                </div>

            </div>
        </nav>        
    )
}
export default Navbar;