import './service.css';
import banner from '../../img/service/sbanner.png';
import outdoorgal1 from '../../img/service/ugal1.jpg';
import outdoorgal2 from '../../img/service/ugal2.jpg';
import outdoorgal3 from '../../img/service/ugal3.jpg';
import outdoorgal4 from '../../img/service/ugal4.jpg';
import uniRight from '../../img/service/oright.jpg';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Universal = () => {
    return(<div ><Nav/>
        <div className="sectStart">
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Universal Design</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">UNIVERSAL DESIGN</p>
                <h2>Universal design</h2><br />
                <p className="body">
                    Your home is your castle. It’s where your children have grown up. It’s where countless memories have been made. It’s where you go to relax and unwind. As we age it’s important that our homes continue to meet our physical needs so we can retain all of those special moments. In fact, ninety percent of retirees want to remain in their homes for the rest of their lives. In order for that to happen, updates should be made to your home to ensure safety and accessibility. Enter Universal Design.
                    <br /><br />
                    Universal Design is a way to approach remodeling so that updates allow for anyone and everyone to find comfort and relaxation in their home. Through the use of inclusive design; counters can be lowered, hallways can be widened, and ramps can be built to allow easy access to anyone who may have challenges with mobility. These renovations can be made to maintain, and in many cases improve, the overall integrity of the interior design of your home. With more than seventy-eight million baby boomers entering retirement universal design has never been more important. You want to reshape your home so you can forge new memories and enjoy your golden years your way. At Arise Contractors Group we are proud of the inclusive designs we have created for our clients which allow them to age in place. Our universal designs are created to retain aesthetics and functionality because we understand you want to keep your castle looking its best.
                </p><br /><br />
                <div className="sGallery">
                    <img src={outdoorgal1} alt="service bathlery preview" className="sgalImg" />
                    <img src={outdoorgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal3} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal4} alt="service gallery preview" className="sgalImg" />
                </div><br /><br />              
                <button className="btnPrimary" id='outBtn'> <HashLink to="/gallery#top">View our Gallery</HashLink> </button>
            </section>
            <section className="sects">
                <p className="subheading">UNIVERSAL DESIGN</p>
                <h3>History of universal design</h3><br />
                <p className="body">
                    Universal Design was a term first coined by Ronald Mace, an architect who strived to create spaces that worked for everyone regardless of their age, abilities, or status in life. The concept of inclusive design picked up adoption in 1968 when Selwyn Goldsmith published Designing for the Disabled. Goldsmith was the mastermind behind the curb cut, those ramps we see on sidewalks and curbs that have lead to greater accessibility for many people. Since then universal design has come a long way. The Center for Universal Design at North Carolina established a set of seven principles to follow when creating designs of homes with aging and disabled residents. In 2012, the Center for Inclusive Design added to the seven principles to include social and wellbeing elements.
                    <br /><br />
                    Through technological advances universal design is able to use personal assistance and sensors for even more adaptations. For example, sensors can be added to rooms that track how long it takes to enter a room and trip another sensor. This will allow loved ones to be alerted quickly in the event of a fall. Being able to get help for your family quickly is the best way to protect and keep them safe.
                </p>
            </section>
            <section className='sectRight' style={{marginTop:40}}>
                <div className="sSectTxt" >
                    <p className="subheading">UNIVERSAL DESIGN</p>
                    <h3>Universal design elements</h3>
                    <p className="body">
                        These are some of the common design elements that we have placed for clients who are looking to age in place or want a more inclusive design.
                        <br /><br />
                        <ul>
                            <li>Door opening and sizing</li>
                            <li>Accessible routes through hallways</li>
                            <li>Floor and wall coloring for contrast</li>
                            <li>Easy to use hardware like levered handles on doors</li>
                            <li>Lowered light switches and fixtures</li>
                            <li>Bathtubs with integral seating</li>
                            <li>Countertops that are easily reached</li>
                            <li>Curbless showers</li>                            
                        </ul>
                    </p>
                </div>
                <img src={uniRight} id='uniRightImg' alt="universal design picture" />               
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

    )

}

export default Universal