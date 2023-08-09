import Nav from "./nav/nav";
import Footer from "./footer/footer"
//slider image import
import img1 from '../../img/home/slider/img1.png'
import img2 from '../../img/home/slider/img2.png'
import img3 from '../../img/home/slider/img3.png'
import img4 from '../../img/home/slider/img4.png'
import img5 from '../../img/home/slider/img5.png'
import img6 from '../../img/home/slider/img6.png'
import img7 from '../../img/home/slider/img7.png'
//vector image import 
import bathroom from '../../img/home/vector/bathroom.jpg'
import construction from '../../img/home/vector/construction.jpg'
import kitchen from '../../img/home/vector/kitchen.jpg'
import landscape from '../../img/home/vector/landscaping.jpg'
import luxury from '../../img/home/vector/LuxuryAp.png'
import office from '../../img/home/vector/officRemod.jpg'
import quoteB from '../../img/home/vector/quoteBlack.png'
//image import
import homeAU from '../../img/home/homeAU.png'
import homeAU2 from '../../img/home/homeAU2.jpg'
import news from '../../img/home/news.png'
import couch from '../../img/home/homeCouch.jpg'
//Gallery portfolio images
import whr from '../../img/home/whr.JPG'
import nc from '../../img/home/nc.jpg'
import kr from '../../img/home/kr.jpg'
import br from '../../img/home/br.jpg'
//other imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './homepage.css';
import '../services/service.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Homepage = () => {
    return (
        <div className="">
            <Nav />
            <div className="Hbanner">
                <div className="bannertxt1">
                    <h3>Austin, Texas Award-Winning Design, Construction & Remodeling Company</h3>
                </div>
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} interval={2500} autoPlay={true} infiniteLoop={false}>
                    
                    <div>
                        <img src={img5} alt="slider" />
                    </div>
                    <div>
                        <img src={img4} alt="slider" />
                    </div>
                    <div>
                        <img src={img7} alt="slider" />
                    </div>
                    <div>
                        <img src={img1} alt="slider" />
                    </div>
                    <div>
                        <img src={img2} alt="slider" />
                    </div>
                    <div>
                        <img src={img3} alt="slider" />
                    </div>
                    
                    <div>
                        <img src={img6} alt="slider" />
                    </div>
                </Carousel>
                <div className="bannertxt2"> 
                    <p className='lead'>Welcome to Arise Contractors Group, your go-to real estate company for all your residential and commercial remodeling and construction needs.</p>
                </div>
            </div>

            <section className="service">
                <HashLink to="/service#top">
                    <div className="panel">
                        <img src={luxury} alt="" className="vector" />
                        <h4>Whole Home Remodels</h4>
                        <p className="lead">
                            Luxury living is more than just a beautiful space. We help you create an environment that matches your lifestyle and meets your needs.
                        </p>
                    </div>
                </HashLink>
                <HashLink to="/service/Bathroom#top">
                    <div className="panel">
                        <img src={bathroom} alt="" className="vector" />
                        <h4>Bathroom Remodels</h4>
                        <p className="lead">
                            We offer comprehensive architectural design consultation services tailored to your unique needs and preferences. 
                        </p>
                    </div> 
                </HashLink>
                <HashLink to="/service/Kitchen#top">
                    <div className="panel">
                        <img src={kitchen} alt="" className="vector" />
                        <h4>Kitchen Remodels</h4>
                        <p className="lead">
                        We are dedicated to transforming your kitchen space into a functional, beautiful, and inviting place that meets your unique needs and preferences.
                        </p>                    
                    </div>
                </HashLink>
                <HashLink to="/service/commercial#top">
                    <div className="panel">
                        <img src={office} alt="" className="vector" />
                        <h4>Commercial Remodeling</h4>
                        <p className="lead">
                        Let us help you transform your office, work or outdoor space into a functional, beautiful, and inviting one that suits your particular need.
                        </p>
                    </div>
                </HashLink>
                <HashLink to="/service/design#top">
                    <div className="panel">
                        <img src={construction} alt="" className="vector" />
                        <h4>New Construction</h4>
                        <p className="lead">
                        Whether you are looking to renovate your conference room, upgrade your reception area, or create additional workspace(s), our team is here to help.
                        </p>
                    </div>                    
                </HashLink>
                <HashLink to="/service/design#top">
                    <div className="panel">
                        <img src={landscape} alt="" className="vector" id='vectorDB' />
                        <h4>Design-Build</h4>
                        <p className="lead">
                        Our design-build services are tailored to your unique requirements, whether you are looking for a complete overhaul or a few finishing touches.
                        </p>
                    </div>
                </HashLink>

            </section>
            <section id="portfolioGal" className="sects portfolioGal">
                <p className="subheading">PORTFOLIO GALLERY</p>
                <h3>Experience excellent and exceptional customer service </h3><br /><br />
                <div className="homeGallery">
                    <HashLink to="/gallery/Whole Home Remodels#top">
                        <div className="hgPack">
                            <img src={whr} alt="whole home remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Whole home remodels</p>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink to="/gallery/Kitchen Remodels#top">
                        <div className="hgPack">
                            <img src={kr} alt="Kitchen remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Kitchen remodels</p>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink to="/gallery/Bathroom Remodels#top">
                        <div className="hgPack">
                            <img src={br} alt="Bathroom remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Bathroom remodels</p>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink to="/gallery/New Construction#top">
                        <div className="hgPack">
                            <img src={nc} alt="New construction" />
                            <div className="hgOverlay">
                                <p className="lead">New construction</p>
                            </div>
                        </div>
                    </HashLink>
                </div>
            </section>

            <section className="sectRight">
                <div className="aboutTxt">
                    <p className="subheading">ABOUT US</p>
                    <h2>We specialize in quality home renovations.</h2><br />
                    <p className="body">
                        At Arise Contractors Group, we understand that your home or business is one of your biggest investments. That's why we take the time to get to know you and your unique needs, so we can deliver a custom solution that meets your specific requirements.
                        <br /><br />
                        Whether you're looking to remodel your kitchen, add an addition to your home, or build a new commercial property from the ground up, we have the expertise and experience to get the job done right. Our team of skilled professionals are passionate about their work and are committed to providing you with exceptional service every step of the way.
                    </p>
                    <button className="btnPrimary" id='readMoreBtn'><Link to="/about">Read more</Link></button>
                </div>
                <img src={homeAU} alt="a" className="aboutImg" />
            </section>
            <section className="sectLeft">
                <img src={homeAU2} alt="a" className="processImg" />
                <div className="sSectTxt processTxt">
                    <p className="subheading">OUR PROCESS</p>
                    <h2>We can remodel your home, office and outdoor living space.</h2><br />
                    <p className="body">
                    Whether you need a complete home renovation, office remodelling, or outdoor living space enhancement, our team has the expertise and resources to get the job done efficiently and effectively. We specialize in everything from kitchen and bathroom remodelling to patio and deck construction, landscaping, and more.
                        <br/> <br />
                    Our approach to remodelling is simple: we listen to your ideas and needs, offer professional guidance and support, and work collaboratively with you to achieve your vision. We take pride in our attention to detail, exceptional craftsmanship, and timely completion of projects.

                    </p>
                    <button className="btnPrimary" id='readMoreBtn'> <HashLink to="/about/process#top">Read more</HashLink> </button>
                </div>
            </section>
            <section className="newsletter">
                <img src={news} alt="news" className="HnewsImg" />
                <div className="HnewsTxt">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="body" id='p'> Get the latest news and insights from us directly in your inbox!</p>
                    <form action="" className="Hnews">
                        <input id="newsInput" placeholder='Enter your email address' type="text" />
                        <button><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Subscribe</Link></button>
                    </form>
                </div>
            </section>
            <section className="testimonial">
                <p className="subheading">TESTIMONIALS</p>
                <h3>What our clients and partners are saying</h3>
                <div className="testimonies">
                    <div className="testimony">
                        <div className="tpack">
                            <img src={quoteB} className='quote' alt="quote" />
                            <p className="lead">
                                Working with Arise Contractors Group was an absolute pleasure! Their team displayed exceptional professionalism, attention to detail, and expertise throughout the entire project. From the initial consultation to the final delivery, they exceeded our expectations. We were truly impressed with the quality of work and the seamless execution. ACG is now our go-to contractor for all our future projects!
                            </p>
                            <p className="body" id="user"> <b>Arise Contractors' Client </b> {/* <br />Fashion Designer */}</p><br />
                        </div>                        
                    </div>
                    <div className="testimony">
                        <div className="tpack">
                            <img src={quoteB} className='quote' alt="quote" />
                            <p className="lead">
                                I couldn't be happier with the outcome of our home renovation, all thanks to Arise Contractors Group. They transformed our outdated space into a modern and functional living area beyond our imagination. Their communication was clear, and they kept us informed at every step. The team's dedication to ensuring customer satisfaction is unparalleled. I highly recommend ACG for any construction or renovation needs!
                            </p>
                             <p className="body" id="user"> <b>Arise Contractors' Client</b></p> 
                        </div>                        
                    </div>
                    <div className="testimony">
                        <div className="tpack">
                            <img src={quoteB} className='quote' alt="quote" />
                            <p className="lead">
                                Arise Contractors Group is simply outstanding! Their team's expertise and creativity turned our dream home into a reality. They listened to our ideas and incorporated them seamlessly into the design. The level of craftsmanship and attention to detail was truly impressive. Working with ACG was a stress-free experience, and we are thrilled with the final result. Thank you for making our home renovation journey enjoyable!
                            </p>
                            <p className="body" id="user"><b>Arise Contractors' Client</b> {/* <br />Engineer*/}</p> 
                        </div>
                    </div>
                </div>
                <button className="btnPrimary tBtn" id='tBtn'><HashLink to="/about/testimonials#top">Read more</HashLink></button>
            </section>
            <section className="chair">
                <img src={couch} alt="just a chair" />
            </section>
            <Footer />
        </div>
    );
};

export default Homepage