import './testimonials.css';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import banner from '../../img/service/sbanner.png';
import quoteB from '../../img/home/vector/quoteBlack.png';
import timg1 from '../../img/home/t1.png'
import timg2 from '../../img/home/t2.png'
import timg3 from '../../img/home/t3.png'
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
            <section className="sects sSect1">
                <p className="subheading">TESTIMONIALS</p>
                <h2>What our customers are saying about us</h2><br />
                <div className="aboutTestimony">
                <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                Arise Homes exceeded my expectations with their exceptional customer service and commitment to quality. I couldn't be happier with the results of my home renovation.
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                Arise Homes completely transformed my home with their remodeling services. The attention to detail and quality of work were beyond my expectations.
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                We were so fortunate to have bought our home from Arise Homes. It was a dream come through, the location was just perfect  and had everything we had ever wanted
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                Arise Homes just remodelled a 1961 single family home, which I just purchased. When inspected the inspector opened his comments with "this home is more up to date/code than my 2005 build". The home looks great!
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                        
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                When I needed to get my place, especially since my family was expanding, Arise Homes came through for me!!! These homes are incredibly luxurious and yet affordable!!! I will be forever grateful that I bought my home from Arise Homes!!
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                                                      
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                I have purchased a few houses in the past. I recently felt the need and desire to purchase a larger home. I was shown several properties until I came across Project Oak by Arisehome. There was something about it that spoke to me. This was the best decision I have ever made.
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                              
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                We were so fortunate to have bought our home from Arise Homes. It was a dream come through, the location was just perfect  and had everything we had ever wanted
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                         
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                We are first time home buyers, a fifth grade teacher and a software engineer. We thought it would be hard to find a house that fit all of our needs but yours is perfect! We both love spending time outdoors so the yard and back patio will be a place we spend a lot of time. Inside, the central living room and kitchen is somewhere we can imagine gathering with friends and Family. The back workshop space is everything we need for the new work-from-home world we live in and we love the neighborhood and everything nearby! The house has so much light and charm. We appreciate how much work and thought has been put into this home. Thank you again!
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
                            </div>                                                 
                        </div>                        
                    </div>
                    <div>
                        <div className="testiPack">
                            <div className="testiTxt">
                                <img src={quoteB} className='quote' alt="quote" />
                                <p className="body">
                                We came across 1011 Country Club Road and absolutely fell in love!  It’s beautifully redone but still has the character of the 1965’s.  This is a perfect home for our family and allows us to stay in town, close to everything and keep our daughters in their school! We love the kitchen and the cozy living space with a fireplace. The bedrooms are all lovely, and great sizes.  The bathrooms are beautiful and the sizes are perfect for a big family. It’s all around just a lovely home that we can truly see our family filling with wonderful memories. It’s everything we want and have been looking for!
                                </p>
                                <p className="caption"> <b>Arise Homes Owner</b></p><br />
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
                        <button>Subscribe</button>
                    </form>
                </div>
            </section></div><Footer/>
        </div>
    );
}

export default Testimonials