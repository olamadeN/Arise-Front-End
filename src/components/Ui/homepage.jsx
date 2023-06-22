import Nav from "./nav/nav";
import Footer from "./footer/footer"
//slider image import
import img1 from '../../img/home/slider/img1.png'
import img2 from '../../img/home/slider/img2.png'
import img3 from '../../img/home/slider/img3.png'
//vector image import 
import bathroom from '../../img/home/vector/bathroom.jpg'
import construction from '../../img/home/vector/construction.jpg'
import kitchen from '../../img/home/vector/kitchen.jpg'
import landscape from '../../img/home/vector/landscaping.jpg'
import luxury from '../../img/home/vector/LuxuryAp.png'
import office from '../../img/home/vector/officRemod.jpg'
import quoteW from '../../img/home/vector/quoteWhite.png'
import quoteB from '../../img/home/vector/quoteBlack.png'
//image import
import homeAU from '../../img/home/homeAU.png'
import homeAU2 from '../../img/home/homeAU2.jpg'
import news from '../../img/home/news.png'
import timg1 from '../../img/home/t1.png'
import timg2 from '../../img/home/t2.png'
import timg3 from '../../img/home/t3.png'
import couch from '../../img/home/homeCouch.jpg'
//Gallery portfolio images
import whr from '../../img/home/whr.jpg'
import nc from '../../img/home/nc.jpg'
import kr from '../../img/home/kr.jpg'
import br from '../../img/home/br.JPG'
//other imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './homepage.css';
import '../services/service.css'
import { Link } from "react-router-dom";
const Homepage = () => {
    return (
        <div className="">
            <Nav />
            <div className="Hbanner">
                <div className="bannertxt1">
                    <h3>Austin Texas Award-Winning Design, Construction & Remodeling Company</h3>
                </div>
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} interval={2500} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                </Carousel>
                <div className="bannertxt2"> 
                    <p className='lead'>Welcome to Arise Contractors Group, your go-to real estate company for all your residential and commercial remodeling and construction needs.</p>
                </div>
            </div>

            <section className="service">
                <div className="panel">
                    <img src={luxury} alt="" className="vector" />
                    <h4>Whole Home Remodels</h4>
                    <p className="lead">
                        luxury living is more than just a beautiful space. We help you create an environment that matches your lifestyle and meets your needs.
                    </p>
                </div>
                <div className="panel">
                    <img src={bathroom} alt="" className="vector" />
                    <h4>Bathroom Remodels</h4>
                    <p className="lead">
                        We offer comprehensive architectural design consultation services tailored to your unique needs and preferences. 
                    </p>
                </div>
                <div className="panel">
                    <img src={kitchen} alt="" className="vector" />
                    <h4>Kitchen Remodels</h4>
                    <p className="lead">
                    We are dedicated to transforming your kitchen space into a functional, beautiful, and inviting place that meets your unique needs and preferences.
                    </p>                    
                </div>
                <div className="panel">
                    <img src={office} alt="" className="vector" />
                    <h4>Commercial Remodeling</h4>
                    <p className="lead">
                    Let us help you transform your office, work or outdoor space into a functional, beautiful, and inviting one that suits your particular need.
                    </p>
                </div>
                <div className="panel">
                    <img src={construction} alt="" className="vector" />
                    <h4>New Construction</h4>
                    <p className="lead">
                    Whether you are looking to renovate your conference room, upgrade your reception area, or create additional workspace(s), our team is here to help.
                    </p>
                </div>
                <div className="panel">
                    <img src={landscape} alt="" className="vector" id='vectorDB' />
                    <h4>Design-Build</h4>
                    <p className="lead">
                    Our Design-build services are tailored to your unique requirements, whether you are looking for a complete overhaul or a few finishing touches.
                    </p>
                </div>
            </section>
            <section id="portfolioGal" className="sects portfolioGal">
                <p className="subheading">PORTFOLIO GALLERY</p>
                <h3>Experience excellent and exceptional customer service </h3><br /><br />
                <div className="homeGallery">
                    <Link to="/gallery">
                        <div className="hgPack">
                            <img src={whr} alt="whole home remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Whole home remodels</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/gallery">
                        <div className="hgPack">
                            <img src={kr} alt="Kitchen remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Kitchen remodels</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/gallery">
                        <div className="hgPack">
                            <img src={br} alt="Bathroom remodels" />
                            <div className="hgOverlay">
                                <p className="lead">Bathroom remodels</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/gallery">
                        <div className="hgPack">
                            <img src={nc} alt="New construction" />
                            <div className="hgOverlay">
                                <p className="lead">New construction</p>
                            </div>
                        </div>
                    </Link>
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
                    <button className="btnPrimary" id='readMoreBtn'>Read more</button>
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
                    <button className="btnPrimary" id='readMoreBtn'>Read more</button>
                </div>
            </section>
            <section className="newsletter">
                <img src={news} alt="news" className="HnewsImg" />
                <div className="HnewsTxt">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="body" id='p'> Get the latest news and insights from us directly in your inbox!</p>
                    <form action="" className="Hnews">
                        <input id="newsInput" placeholder='Enter your email address' type="text" />
                        <button>Subscribe</button>
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
                                Arise Homes exceeded my expectations with their exceptional customer service and commitment to quality. I couldn't be happier with the results of my home renovation.
                            </p>
                        </div>
                        <div className="tuser">
                            <img src={timg1} alt="" className="timg" />
                            <p className="caption"> <b>Lewa Owolabi </b> <br />Fashion Designer</p>
                        </div>
                        
                    </div>
                    <div className="testimony">
                        <div className="tpack">
                            <img src={quoteB} className='quote' alt="quote" />
                            <p className="lead">
                                Arise Homes completely transformed my home with their remodeling services. The attention to detail and quality of work were beyond my expectations.
                            </p>
                        </div>
                        <div className="tuser">
                            <img src={timg2} alt="" className="timg" />
                            <p className="caption"> <b>Joanna Adams </b> <br />Copywriter</p>
                        </div>
                        
                    </div>
                    <div className="testimony">
                        <div className="tpack">
                            <img src={quoteB} className='quote' alt="quote" />
                            <p className="lead">
                                Working with Arise Homes was a pleasure from start to finish. The team was reliable, communicative, and delivered excellent results. I would highly recommend them to anyone.
                            </p>
                        </div>
                        <div className="tuser">
                            <img src={timg3} alt="" className="timg" />
                            <p className="caption"><b>Victor Kayode</b> <br />Engineer</p>
                        </div>
                    </div>
                </div>
                <button className="btnPrimary tBtn" id='tBtn'>Read more</button>
            </section>
            <section className="chair">
                <img src={couch} alt="just a chair" />
            </section>
            <Footer />
        </div>
    );
};

export default Homepage