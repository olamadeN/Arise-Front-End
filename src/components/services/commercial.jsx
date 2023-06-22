import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import './service.css';
import banner from '../../img/service/sbanner.png';
import outdoorgal1 from '../../img/service/outdoorgal.png';
import outdoorgal2 from '../../img/service/designgal1.png';
import outdoorgal3 from '../../img/service/designgal4.png';
import outdoorgal4 from '../../img/service/designgal3.png';
import comD1 from '../../img/service/comD1.png';
import comD2 from '../../img/service/comD2.png';
import comRight from '../../img/service/comRight.png';
import news from '../../img/home/news.png';
import { Link } from "react-router-dom";
const Commercial = () => {
    return (
        
        <div className="sectStart"><Nav />
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Commercial Remodeling</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">COMMERCIAL REMODELS</p>
                <h2>What is commercial remodeling?</h2><br />
                <p className="body">
                    Commercial remodeling refers to the process of renovating or updating commercial spaces, such as office buildings, retail stores, restaurants, or other commercial properties. The goal of commercial remodeling is to improve the functionality, aesthetic appeal, or overall value of the space. Commercial remodeling can encompass a wide range of activities, from simple cosmetic updates like repainting or new flooring, to more extensive structural changes such as adding or removing walls, modifying electrical or plumbing systems, or creating new spaces within the existing structure. 
                    <br /><br />
                    Commercial remodeling may also involve upgrades or additions to technology infrastructure, such as installing new telecommunications systems, security systems, or energy-efficient lighting and heating systems. The ultimate goal of commercial remodeling is to create a more functional, efficient, and attractive space that meets the needs of the building owner and its tenants or customers. Commercial remodeling projects can be complex and require a team of professionals, including architects, engineers, contractors, and project managers, to ensure that the project is completed on time, within budget, and to the satisfaction of all parties involved.
                </p><br /><br />
                <div className="sGallery">
                    <img src={outdoorgal1} alt="service bathlery preview" className="sgalImg" />
                    <img src={outdoorgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal3} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal4} alt="service gallery preview" className="sgalImg" />
                </div><br /><br />              
                <button className="btnPrimary" id='outBtn'> <Link to="/gallery">View our commercial remodeling gallery </Link> </button>
            </section>
            <section className="sects">
                <p className="subheading">COMMERCIAL REMODELING</p>
                <h3>Why commercial remodeling?</h3><br />
                <p className="body">
                    Commercial remodeling can be a strategic investment for commercial property owners and tenants, offering a range of benefits that can improve the functionality, attractiveness, and value of a space. By creating a more modern, inviting, and safe environment, businesses can attract more customers, improve employee satisfaction and productivity, and increase overall profitability.
                    Commercial remodeling can also address important safety and accessibility concerns, such as outdated electrical or plumbing systems, or limited accessibility for individuals with disabilities. With the help of a professional team of architects, engineers, contractors, and project managers, commercial remodeling projects can be successfully completed within budget and on schedule, ensuring a positive return on investment for the property owner or tenant.
                </p>
            </section>
            <section className="sects">
                <p className="subheading">COMMERCIAL REMODELING</p>
                <h3>Pros of commercial remodeling?</h3><br />
                <p className="body">
                    <b>Increased Property Value:</b> Commercial remodeling can increase the value of a property by making it more attractive and functional. This can be especially important if the owner is considering selling or leasing the property in the future.
                    <br /><br />
                    <b>Improved Functionality:</b> Remodeling can improve the functionality of a space, making it more efficient and productive for employees or more welcoming and comfortable for customers. This can lead to improved sales, productivity, and tenant satisfaction.
                    <br /><br />
                    <b>Enhanced Aesthetics:</b> A commercial remodeling project can enhance the visual appeal of a space, making it more modern, stylish, and welcoming. This can help businesses stand out from the competition and attract new customers or tenants.
                    <br /><br />
                    <b>Addressing Safety Concerns:</b> Commercial remodeling can address important safety concerns, such as outdated electrical or plumbing systems, or inadequate fire protection measures. This can help keep occupants safe and reduce liability risks.
                    <br /><br />    
                    <b>Energy Efficiency:</b> Remodeling can also include upgrades to energy-efficient systems and materials, such as LED lighting or insulated windows. This can lead to significant cost savings over time and reduce the building's carbon footprint. Overall, commercial remodeling can be a worthwhile investment for businesses looking to improve the functionality, aesthetics, and value of their commercial space.
                </p>
            </section>
            <div className="skitchen sects">
                <img src={comD1} alt="outdoor pics" />
                <img src={comD2} alt="outdoor pics" />
            </div><br />
            <section className="sects">
                <p className="subheading">COMMERCIAL REMODELING</p>
                <h3>Why choose Arise Contractors Group for your commercial remodeling?</h3><br />
                <p className="body">
                    Our team has the excellence, experience, and expertise to truly make your space a place you are proud to be a commercial center. We offer exemplary service and commitment to our clients. We will work with you closely at every step of your commercial remodeling project.
                    <br /><br />
                    <b>Experience:</b> Arise Contractors Group has extensive experience in commercial remodeling projects of all types and sizes. Our team of professionals has the skills and expertise needed to successfully manage your project from start to finish.
                    <br /><br />
                    <b>Design-Build Services:</b> Arise Contractors Group offers design-build services, which means we can handle every aspect of your project, from initial design to final construction. This can help streamline the process and ensure a seamless transition between the design and construction phases.
                    <br /><br />
                    <b>Quality Workmanship:</b> At Arise Contractors Group, we are committed to providing high-quality workmanship on every project we undertake. We use only the best materials and equipment, and our team is dedicated to delivering superior results that exceed your expectations.
                    <br /><br />
                    <b>Customer Service:</b> We believe in putting our customers first and providing personalized service throughout the project. Our team is always available to answer your questions and address your concerns, and we work closely with you to ensure that your vision for the project is realized.
                    <br /><br />
                    <b>Competitive Pricing:</b> At Arise Contractors Group, we believe that high-quality work shouldn't come at a premium. We offer competitive pricing for our commercial remodeling services, ensuring that you get the best value for your investment.
                    <br /><br />
                    Arise Contractors Group is a trusted and reliable partner for your commercial remodeling needs, offering a range of services and expertise to help you achieve your goals. Let us handle your commercial remodel project. Schedule your consultation and make your dreams come true today!
                </p><br />
                <button className="btnPrimary" id='outBtn'><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">COMMERCIAL REMODELING</p>
                    <h3>Frequently asked questions</h3>
                    <p className="body">
                        <b>Q:</b> What is the typical timeline for a commercial remodeling project?
                        <b>A:</b> The timeline for a commercial remodeling project can vary depending on the scope and complexity of the project. Smaller projects may take several weeks, while larger projects can take several months or longer. We’re sure to meet all remodel design standards timely.
                        <br /><br />
                        <b>Q:</b> How much does commercial remodeling cost?
                        <b>A:</b> The cost of commercial remodeling can vary widely depending on factors such as the size of the space, the level of renovation required, and the materials used. It is best to consult with us immediately at Arise Contractors Group to get an accurate estimate for your specific project.
                        <br /><br />
                        <b>Q:</b> Will I need permits for my commercial remodeling project?
                        <b>A:</b> Depending on the scope of the project, you may need permits from your local building department. A professional contractor or design-build firm can help you navigate the permitting process.
                        <br /><br /> 
                        <b>Q:</b> What should I consider when designing my commercial remodeling project?
                        <b>A:</b> When designing your commercial remodeling project, you should consider factors such as the function of the space, the needs of your business, and the preferences of your customers or tenants. You should also consider any building codes or zoning regulations that may affect the design of the project.
                    </p>
                </div>
                <img src={comRight} alt="universal design picture" />               
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
            </section><Footer/>
        </div>
    )
}

export default Commercial