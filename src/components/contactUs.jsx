import banner from '../img/contact2.jpg';
import phone from '../img/phone.png';
import email from '../img/email.png';
import loc from '../img/location.png';
import map from '../img/map.png';
import Nav from "./Ui/nav/nav";
import Footer from "./Ui/footer/footer";
import './contactUs.css';
import { Link } from "react-router-dom";
const ContactUs = () => {
    return ( 
        <>
           <Nav/>
            <div className="sectStart">
                <section className='banner'>
                    <img src={banner} alt="service banner" />
                    <div className="overlay">
                        <div className="sbtxt">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </section>
                <div className="sects details">
                    <div className="contacts">
                        <div className="socials">
                            <img src={phone} alt="" />
                            <div className='soTxt'>
                                <h4>Phone Number</h4>
                                <p className="lead">
                                    +1 512-588 3997 <br />
                                    +1 512-588 3997
                                </p>
                            </div>
                        </div>
                        <div className="socials">
                            <img src={email} alt="" />
                            <div className='soTxt'>
                                <h4>Email Address</h4>
                                <p className="lead">
                                    info@arisecontractors.com <br />
                                    support@arisecontractors.com
                                </p>
                            </div>
                        </div>
                        <div className="socials">
                            <img src={loc} alt="" />
                            <div className='soTxt'>
                                <h4>Office Address</h4>
                                <p className="lead">
                                    13359 N Hwy 183 #406-1024, <br />
                                    Austin Texas 78750.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <img src=
                        {map} alt="map" />
                    </div>
                    
                </div>
            </div>
            <div className="redirect">
                <h3> Let us help you build your dream home experience </h3>
                <h4>Reach out to us through the link below to get started</h4>
               <Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001"><button className='btnPrimary'>Schedule your design consultation</button> </Link> 
            </div>
            <Footer/>
            
        </>  
    );
}
 
export default ContactUs;