import './process.css';
import banner from '../../img/service/sbanner.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import ap1 from '../../img/about/ap1.png';
import ap2 from '../../img/about/ap2.png';
import ap3 from '../../img/about/ap3.png';
import ap4 from '../../img/about/ap4.png';
import ap5 from '../../img/about/ap5.png';
import ap6 from '../../img/about/ap6.png';
import ap7 from '../../img/about/ap7.png';
import ap8 from '../../img/about/ap8.png';
import ap9 from '../../img/about/ap9.png';
import ap10 from '../../img/about/ap10.png';
import news from '../../img/home/news.png';
import { Link } from "react-router-dom";
const Process = () => {
    return(
        <div className="sectStart">
            <Nav />
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Our Process</h1>
                    </div>
                </div>
                
            </section>
            <div className="processSect sects">
                <div className="left">
                    <img className="apImg" src={ap1} alt="" />
                    <div className="aptxt">
                        <h4>1. In-home design consultation</h4>
                        <p className="body">
                            We will discuss your project and listen to your desires in order to gain a good understanding of what you wish to achieve. We will take all necessary measurements, photos and video, as well as share our design suggestions. We will also establish if our company is the right fit for your project.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img id='nos2' className="apImg" src={ap2} alt="" />
                    <div className="aptxt">
                        <h4>2. Design retainer presentation</h4>
                        <p className="body">
                            Our operations manager and our lead designer will meet with you at our Design Center. Our team will be providing feedback and direction about different options for your project. This is also when you will be signing the Design Retainer agreement if you would like us to proceed with your remodel.
                        </p>
                    </div>
                </div>
            </div>
            <div className="processSect sects">
                <div className="left">
                    <img className="apImg" src={ap3} alt="" />
                    <div className="aptxt">
                        <h4>3.  Design and VEC meeting</h4>
                        <p className="body">
                            In-home meeting to view existing conditions (VEC) and finalize design ideas. Your designer will incorporate ideas discussed during the consultation and design retainer presentation along with other features and trends. Your project manager will take notes and document current home conditions including structural, mechanical, electrical and anything else needed to complete our comprehensive design.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img className="apImg" src={ap4} alt="" />
                    <div className="aptxt">
                        <h4>4.  Design and bid presentation</h4>
                        <p className="body">
                            When you come to our Design Center for your design and bid presentation, we will present your newly designed space and review all the design elements that were incorporated by our team. We will also review your project binder, contract and project schedule. If all looks good, we will be signing the contract and getting your project start date on the calendar!
                        </p>
                    </div>
                </div>
            </div>
            <div className="processSect sects">
                <div className="left">
                    <img className="apImg" src={ap5} alt="" />
                    <div className="aptxt">
                        <h4>5.  Shopping trip</h4>
                        <p className="body">
                            Your designer will meet you at our Design Center to go over the materials that were selected for your project. This will include cabinets, flooring, counter tops, vanities, hardware, tile, accent tile, lighting, paint colors and any other items applicable to your project. You will then go with your designer to your scheduled appointment to select appliances and/or plumbing fixtures
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img id='nos6' className="apImg" src={ap6} alt="" />
                    <div className="aptxt">
                        <h4>6.  Architectural engineering</h4>
                        <p className="body">
                            If your design includes structural elements such as building an addition, building a granny flat, removal or relocation of load-bearing walls, installation of large La Cantina or Panoramic doors, etc., our architectural team will draft and engineer a set of construction documents. These documents will be used as working drawings and will be submitted to the City or County.
                        </p>
                    </div>
                </div>
            </div>
            <div className="processSect sects">
                <div className="left">
                    <img className="apImg" src={ap7} alt="" />
                    <div className="aptxt">
                        <h4>7.  Plans and permits</h4>
                        <p className="body">
                            Once we have a complete set of plans ready, we will begin submitting all the necessary plans and paperwork to the City or County. The permitting process can take between one week and several months to complete, depending on the scope of work and the current workload at the City or County.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img className="apImg" src={ap8} alt="" />
                    <div className="aptxt">
                        <h4>8.  Pre Construction Meeting & Starting the Remodel</h4>
                        <p className="body">
                            Your designer and project manager will meet you at your home to review the approved set of plans and go over procedures and any other final questions or concerns. You will receive access to view your calendar remotely using our state-of-the-art construction management software. This will help you on our journey of making your dream a reality!
                        </p>
                    </div>
                </div>
            </div>
            <div className="processSect sects">
                <div className="left">
                    <img id='nos9' className="apImg" src={ap9} alt="" />
                    <div className="aptxt">
                        <h4>9. Project in construction</h4>
                        <p className="body">
                            We will work hard every day, on and off site, to complete your project on time, on budget and with the highest quality standards. You will be in constant communication with your project manager as well as your designer and other support staff.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img className="apImg" id='ap10' src={ap10} alt="" />
                    <div className="aptxt">
                        <h4>10. Project complete</h4>
                        <p className="body">
                            Once your project is complete, we will close out your remodel with a grand celebration. We take pride in what we do and truly believe that we greatly improve the way our clients live and use their home. We are confident that you will love your newly remodeled home by Arise Contractors Group.
                        </p>
                    </div>
                </div>
            </div>
            <button className="btnPrimary" id='apBtn'><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
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
            </section>
            <Footer/>
        </div>
    )
}

export default Process