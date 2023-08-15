import './testimonials.css';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import banner from '../../img/service/sbanner.png';
import quoteB from '../../img/home/vector/quoteBlack.png';
import { Link } from "react-router-dom";
const Testimonials = () => {
    return(<div ><Nav/>
        <div className="sectStart Testimony">
            <section className='banner'>
                <img src={banner} alt="testimonials banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Testimonials</h1>
                    </div>
                </div>
            </section>
            <section id='testiStart' className="sects sSect1">
                <p className="subheading">TESTIMONIALS</p>
                <h2>What our customers are saying about us</h2><br />
                <div className="aboutTestimony">
                <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Working with Arise Contractors Group was an absolute pleasure! Their team displayed exceptional professionalism, attention to detail, and expertise throughout the entire project. From the initial consultation to the final delivery, they exceeded our expectations. We were truly impressed with the quality of work and the seamless execution. ACG is now our go-to contractor for all our future projects!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    I couldn't be happier with the outcome of our home renovation, all thanks to Arise Contractors Group. They transformed our outdated space into a modern and functional living area beyond our imagination. Their communication was clear, and they kept us informed at every step. The team's dedication to ensuring customer satisfaction is unparalleled. I highly recommend ACG for any construction or renovation needs!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Arise Contractors Group is simply outstanding! Their team's expertise and creativity turned our dream home into a reality. They listened to our ideas and incorporated them seamlessly into the design. The level of craftsmanship and attention to detail was truly impressive. Working with ACG was a stress-free experience, and we are thrilled with the final result. Thank you for making our home renovation journey enjoyable!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    As a real estate developer, I've collaborated with various construction firms, and Arise Contractors Group stands out as one of the best in the industry. Their dedication to quality, adherence to deadlines, and professionalism are unmatched. Their ability to adapt to challenges and find innovative solutions is commendable. I confidently recommend ACG to anyone seeking a reliable and trustworthy construction partner.
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                        
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Arise Contractors Group is a name synonymous with excellence! They successfully completed our commercial project on time and within budget, exceeding our expectations. The team's proactive communication and problem-solving skills were commendable. The attention to detail and commitment to delivering a top-notch product are truly impressive. We wholeheartedly endorse ACG for any construction needs!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                                                      
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Arise Contractors Group is the epitome of reliability and expertise. From the first consultation to the final walk-through, they ensured our complete satisfaction. The team's professionalism, punctuality, and skillful craftsmanship set them apart from the rest. We are incredibly grateful for their hard work and dedication in bringing our vision to life. Choosing ACG was the best decision we made!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                              
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    The entire experience with Arise Contractors Group was phenomenal. Their team demonstrated a level of professionalism that is hard to come by in the industry. Their commitment to quality, safety, and customer satisfaction was evident in every aspect of the project. They went above and beyond to accommodate our specific requests and delivered exceptional results. We highly recommend ACG for any construction needs!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Arise Contractors Group is a company you can trust wholeheartedly. Their integrity, transparency, and expertise make them a standout choice for any construction project. They transformed our outdated office space into a modern and functional workspace, and the results were beyond our expectations. ACG's team made the entire process stress-free, and we are thrilled with the outcome. Thank you, ACG!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>                                                 
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Choosing Arise Contractors Group was the best decision for our home renovation. Their team's professionalism, creativity, and attention to detail were remarkable. They worked efficiently to complete the project on schedule while maintaining the highest quality standards. We are grateful for the excellent service and would not hesitate to work with ACG again in the future!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>
                                                     
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                    Arise Contractors Group is a true partner in construction. They understood our vision, communicated effectively, and executed the project flawlessly. The team's dedication to meeting deadlines and their exceptional craftsmanship make them the go-to choice for any construction project. ACG's commitment to customer satisfaction is commendable, and we are delighted with the final results. We highly recommend ACG to anyone seeking top-notch construction services!
                                </p>
                                <p className="caption"> <b>Arise Contractors' Client</b></p><br />
                            </div>
                                                     
                        </div>                        
                    </div>


                </div>
                
            </section>
            <section className="sectNews">
                <img src={news} alt="news" className="newsImg" id='newsImg' />
                <div className="newsTxt">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="body" id='p'> Get the latest news and insights from us directly in your inbox!</p>
                    <form action="" className="news">
                        <input placeholder='Enter your email address' type="text" />
                        <button><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Subscribe</Link></button>
                    </form>
                </div>
            </section></div><Footer/>
        </div>
    );
}

export default Testimonials