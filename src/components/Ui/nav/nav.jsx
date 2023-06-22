import './nav.css';
import logo from '../../../img/navLogo.jpg'
import { Link } from "react-router-dom";

const Nav = () => {
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    const aboutFunction = () => {
        document.getElementById("aboutDropdown").classList.toggle("show");
    }
      
      // Close the dropdown menu if the user clicks outside of it
    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <div className="App">
          <nav className="navbar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" className="logoImg" />
              </Link>
            </div>
            <div className="links">
              <li className="navLink"><Link to="/">Home</Link></li>
              <div className="dropdown navLink">
                <button onClick={myFunction} className="dropbtn">Services v</button>
                <div id="myDropdown" className="dropdown-content">
                  <Link to="/service" id='dropLink'>Whole Home Remodels</Link>
                  <Link to="/service/roomadd" id='dropLink'>Room Additions</Link>
                  <Link to="/service/adu" id='dropLink'>ADU / Granny Flats</Link>
                  <Link to="/service/bathroom" id='dropLink'>Bathroom Remodels</Link>
                  <Link to="/service/kitchen" id='dropLink'>Kitchen Remodels</Link>
                  <Link to="/service/design" id='dropLink'>Design - Build</Link>
                  <Link to="/service/outdoor" id='dropLink'>Outdoor Living</Link>
                  <Link to="/service/universal" id='dropLink'>Universal Design</Link>
                  <Link to="/service/commercial" id='dropLink'>Commercial Remodeling</Link>
                </div>
              </div>
              <div className="dropdown navLink">
                <button onClick={aboutFunction} className="dropbtn">About Us v </button>
                <div id="aboutDropdown" className="dropdown-content">
                  <Link to="/about" id='dropLink'>About US</Link>
                  <Link to="/about/process" id='dropLink'>Our Process</Link>
                  <Link to="/about/testimonials" id='dropLink'>Testimonials</Link>
                </div>
              </div>
              <li className="navLink"><Link to="/gallery">Gallery</Link></li>
              <li className="navLink"><Link to="/contact">Contact Us</Link></li>
              <div className="navBtn"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></div>
              
            </div>
            
          </nav>        
        </div>
    );
    
};
export default Nav