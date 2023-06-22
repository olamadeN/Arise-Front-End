import './footer.css';
import logoW from '../../../img/logoWhite.png'
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <div className="foot">
            <section className="footer">
                <div className="sect1">
                    <img className='footImg' src={logoW} alt="white logo" /> <br /> <br />
                    <p className="address body">13359 N Hwy 183 #406-1024,<br />Austin Texas 78750.</p>
                    <hr className="footerline" />
                    <ul>
                        <li className="footContact body">+1 512-588 3997 </li>
                        <li className="footContact body">info@arisecontractors.com</li>
                    </ul>
                </div>
                <div className="sect2">
                    <h3>EXPLORE</h3>
                    <ul>
                        <Link to='/'><li id='fmenu' className="body">Home </li></Link>
                        <Link to='/service'><li id='fmenu' className="body">Services</li></Link>
                        <Link to='/about'><li id='fmenu' className="body">About Us</li></Link>
                        <Link to='/gallery'><li id='fmenu' className="body">Gallery</li></Link>
                        <Link to='/contact'><li id='fmenu' className="body">Contact Us</li></Link>                  
                    </ul>
                </div>
                <div className="sect3">
                    <h3>SUBSCRIBE</h3>
                    <form action="">
                        <div className="footForm"> 
                            <p className="lead">Subscribe to get updates</p>
                            <input type="text"/>
                            <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Subscribe</Link></button>
                        </div>
                    </form>
                    <div className="footSocials">
                        <p className="lead">Follow us on: </p>
                    </div>
                </div>
                
            </section>
            <div className="copyright">
                <hr />
                <p className="lead">Copyright (C) 2023. ARISE CONTRACTORS GROUP. All Rights Reserved.</p>
            </div>            
        </div>        
    )


}
export default Footer;