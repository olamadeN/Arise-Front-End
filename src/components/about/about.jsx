import './about.css';
import banner from '../../img/service/sbanner.png';
import aboutright from '../../img/about/aboutRight1.png';
import aboutleft from '../../img/about/aboutLeft.png';
import aboutright2 from '../../img/about/aboutRight2.jpg';
import aboutleft2 from '../../img/about/aboutLeft2.png';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from "react-router-dom";
const About = () => {
    return(
        <div className="sectStart">
            <Nav/>
            <section className='banner' id='aboutBanner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>About us.</h1>
                    </div>
                </div>
            </section>
            <section className='sectLeft aboutLeft' id='abL'>
                <img src={aboutleft} id='aleft1' alt="About Us picture" />
                <div className="sSectTxt">
                    <p className="subheading">ARISE CONTRACTORS GROUP</p>
                    <h3>Our story</h3>
                    <p className="body">
                        Arise Contractors Group was founded in Austin, Texas in 2017 by a group of passionate real estate and construction professionals. They saw a need in the market for a construction company that could provide exceptional service and quality workmanship in both residential and commercial construction and remodeling. With a focus on customer satisfaction and attention to detail, Arise Contractors Group quickly established a reputation as a reliable and trustworthy partner for any construction project. Their team of skilled architects, engineers, and contractors work closely with clients to design and build customized spaces that meet their unique needs and preferences.
                        Over the years, Arise Contractors Group has successfully completed numerous projects across Austin, ranging from small home renovations to large-scale commercial constructions. Their commitment to excellence has earned them a loyal following of clients who continue to rely on their services for their construction needs. Despite their relatively short history, Arise Contractors Group has already become one of the most respected and sought-after construction companies in Austin Texas. Their dedication to quality, professionalism, and customer satisfaction ensures that they will continue to thrive in the years to come.
                    </p>
                </div>
            </section>
            <section id="sR" className='sectRight aboutRight'>
                <div className="sSectTxt">
                    <p className="subheading">ARISE CONTRACTORS GROUP</p>
                    <h3>Our key strengths</h3>
                    <p className="body">
                        One of our key strengths is our ability to work closely with clients to understand their specific requirements and develop customized solutions that meet their needs. Our team of designers, architects, engineers, and construction professionals work collaboratively to ensure that every aspect of a project is carefully planned and executed to perfection.
                        <br /><br />
                        Arise Contractors Group is committed to utilizing the latest construction technologies and materials to deliver projects that are not only aesthetically pleasing but also environmentally sustainable. We are also dedicated to promoting green building practices and use eco-friendly materials and construction techniques wherever possible.
                        <br /><br />
                        At Arise Contractors Group, safety is a top priority. We follow strict safety guidelines on all our job sites to ensure the well-being of our workers and clients. Our team of safety experts work closely with project managers and construction professionals to identify and mitigate potential hazards, ensuring that every project is completed safely and without incident.
                    </p>
                </div>
                <img src={aboutright} id='aright1' alt="About Us picture" />               
            </section>
            <section className='sectLeft aboutLeft' id='abL' >
                <img src={aboutleft2} id='aleft1' alt="About Us picture" />
                <div className="sSectTxt">
                    <p className="subheading">Our difference</p>
                    <h3>Our story</h3>
                    <p className="body">
                        <li className="ablist">In-house skilled technicians.</li>
                        <li className="ablist">Over a thousand satisfied clients in Austin Texas.</li>
                        <li className="ablist">Established relationships with tested and trusted trade partners.</li>
                        <li className="ablist">Intensive background checks performed on all employees prior to hiring.</li>
                        <li className="ablist">Upfront, honest and detailed contracts provided for you at the very beginning.</li>
                        <li className="ablist">We offer a 2 year warranty instead of the standard 1 year warranty with all of our remodels.</li>
                        <li className="ablist">Licensed, Active General Liability Insurance and Workers Compensation on all employees.</li>
                        <li className="ablist">Highly trained staff, designers and personnel will assist you throughout your entire project.</li>
                        <li className="ablist">State-of-the-art Client Management System that allows you to login and view your weekly schedule, view project files, material lists and see tasks for the entire team.</li>
                    </p>
                </div>
            </section>
            <section id="sR" className='sectRight aboutRight'>
                <div className="sSectTxt">
                    <p className="subheading">ARISE CONTRACTORS GROUP</p>
                    <h3>Our key strengths</h3>
                    <p className="body">
                        One of our key strengths is our ability to work closely with clients to understand their specific requirements and develop customized solutions that meet their needs. Our team of designers, architects, engineers, and construction professionals work collaboratively to ensure that every aspect of a project is carefully planned and executed to perfection.
                        <br /><br />
                        Arise Contractors Group is committed to utilizing the latest construction technologies and materials to deliver projects that are not only aesthetically pleasing but also environmentally sustainable. We are also dedicated to promoting green building practices and use eco-friendly materials and construction techniques wherever possible.
                        <br /><br />
                        At Arise Contractors Group, safety is a top priority. We follow strict safety guidelines on all our job sites to ensure the well-being of our workers and clients. Our team of safety experts work closely with project managers and construction professionals to identify and mitigate potential hazards, ensuring that every project is completed safely and without incident.
                    </p>
                    <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
                </div>
                <img src={aboutright2} id='aright2' alt="About Us picture" />               
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
            </section>
            <Footer/>
        </div>
    )
}

export default About