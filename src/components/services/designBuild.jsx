import './service.css';
import banner from '../../img/service/sbanner.png';
import designgal1 from '../../img/service/designgal1.png';
import designgal2 from '../../img/service/designgal2.png';
import designgal3 from '../../img/service/designgal3.png';
import designgal4 from '../../img/service/designgal4.png';
import designD1 from '../../img/service/designD1.png';
import designD2 from '../../img/service/designD2.png';
import designD3 from '../../img/service/designD3.jpg';
import designD4 from '../../img/service/designD4.jpg';
import designD5 from '../../img/service/designD5.jpg';
import designD6 from '../../img/service/designD6.jpg';
import dRight from '../../img/service/designRight.png';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Design = () => {
    return (
        <div className="sectStart">
            <Nav/>
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Design - Build</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">DESIGN - BUILD</p>
                <h2>What is design - build construction?</h2><br />
                <p className="body">
                    Design-build is a delivery method that replaces the traditional methods of contracting separate design and construction companies. Under the design-bid-build method, unforeseen circumstances and changes lead to designers and contractors blaming each other for these problems. This often leads to cost overruns, schedule changes, and overall delays. With this delivery method, the designers, contractors, sub-contractors, and homeowner work together as one unit to create and construct a project that meets the homeowner’s needs and expectations. Any changes made to the design are addressed by the entire team, leading to collaborative problem-solving and communication. This makes the entire construction process run more smoothly.
                    <br /><br />
                    In the traditional design-bid-build method, homeowners have to deal with multiple contractors, depending on the scope of the project. This leads to long delays as the owner tries to find reputable contractors to do the work needed, adding extra costs to the homeowner in time and money. Under the design-build delivery method, there is a dedicated project manager. They are in charge of coordinating all aspects of the job and communicating with the homeowner. This helps ease the stress of managing multiple contracts at once by merging them into one contract and one point of contact.
                    <br /><br />
                    When it comes to home construction, a design-build firm is one of the best ways to ensure your project is completed on time and to your satisfaction. You only need to explain your vision to one point of contact rather than multiple general contractors. This is the case throughout the process, too. If a change needs to be made, you only have one point of contact, who can relay it to the contractors. No one wants to spend all their time finding and choosing general contractors. When you consider all the factors that go into building the space of your dreams, it can become overwhelming. Avoid the stress by hiring a local Austin Texas company that specializes in design-build construction instead.
                </p><br /><br />
                <div className="sGallery">
                    <img src={designgal1} alt="service bathlery preview" className="sgalImg" />
                    <img src={designgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={designgal3} alt="service gallery preview" className="sgalImg" />
                    <img src={designgal4} alt="service gallery preview" className="sgalImg" />
                </div><br /><br />              
                <button className="btnPrimary" id='outBtn'> <HashLink to="/gallery#top">View our Gallery</HashLink>  </button>
            </section>
            <section className="sects">
                <p className="subheading">DESIGN - BUILD</p>
                <h3>Pros of design - build construction</h3><br />
                <p className="body">
                · <b>Fast Build Times:</b> Construction processes overlap and are typically fast-tracked due to increased collaboration and communication between the design and build teams. Any changes in the design plans can be easily accounted for, rather than creating further delays. In addition, this delivery method helps to cut down on sudden design changes, except those made by the homeowner.
                    <br /><br />
                · <b>No middleman:</b> With this method, there are only two parties involved: the owner and the firm. This fixes the problem of the homeowner acting as middleman between the design and construction teams. It also makes it easier for the owner to voice any concerns or input they may have, ensuring they are pleased with the final product.
                    <br /><br />
                · <b>One contract:</b> When working with the company, the owner only has to worry about a single contract, which includes everyone assigned the job. This reduces the stress of looking over and handling two or more different contracts for one project.
                    <br /><br />
                · <b>Cost efficient:</b> Because the contractors and designers are working together throughout the entire process, there is a smaller chance of sudden changes to the design. The chances of litigation between the two parties are also minimized. All of this amounts to fewer costly delays for the duration of the entire process.
                    <br /><br />
                · <b>Increased Owner Involvement:</b>  The owner is completely engaged in the process because this method encourages thoughtful consideration of the design, schedule, and budget. There is also only one relationship the owner must worry about. It makes it easier for the owner to convey any concerns about the design and make adjustments.
                </p>
            </section>
            <div className="skitchen sects">
                <img src={designD1} alt="design-build pics" />
                <img src={designD2} alt="design-build pics" />
            </div><br />
            <section className="sects">
                 <p className="subheading">DESIGN - BUILD</p>
                <h3>Why choose us?</h3><br />
                <p className="body">
                    Our customers choose us for one of the following reasons:
                    <br /><br />
                    · They valued accountability in the contractors they hired. <br />
                    · They were working within a strict timeframe.<br />
                    · They preferred fixed guidelines.<br />
                    · They needed professional guidance on their plans.<br />
                    · They wanted to be more involved in the process.
                    <br /><br />
                    If any of the above applies to you, contact us today! We offer one point of contact with your project’s team, so you can easily communicate any changes or concerns you might have before and during the process. This also helps increase our accountability. We don’t want to disappoint! Our dedicated team of design-build contractors will make sure to complete your project within the budget and on time. You’ll also have access to our knowledgeable staff, who can walk you through the process and answer any questions you might have. Unlike other companies, we don’t mind if you’re more involved. We believe your involvement can help us complete the job to your satisfaction.
                    <br /><br />
                    Our approach is simple. We want to meet our customers’ functional needs while designing a space that reflects their personality and lifestyle. Our staff will ask questions, listen, make suggestions, and take the time to learn about you and your project. Great designs come from a group of professionals who know how to listen to their clients. Your input and feedback are vital to achieving the home of your dreams. We want to know what you’re trying to fix or remodel in your home, learn more about your priorities and goals, and discover what option is right for you. Choosing to renovate or completely rebuild your home is no easy choice. We want to make sure you’re comfortable and confident in your decisions, from start to finish. We offer:
                    <br /><br />
                    · A free consultation<br />
                    · Complete design for your space or entire home<br />
                    · Detailed work description and contract with no hidden fees or charges<br />
                    · Permit processing<br />
                    · Start-to-finish complete remodel or build
                    <br /><br />
                    Call us for your free consultation and our staff can help you on your journey to realizing the space of your dreams.
                </p>
            </section>
            <div className="skitchen sects">
                <img src={designD3} alt="design-build pics" />
                <img src={designD4} alt="design-build pics" />
            </div><br />
            <section className="sects">
                 <p className="subheading">DESIGN - BUILD</p>
                <h3>Our design-build process</h3><br />
                <p className="body">
                    Our customers choose us for one of the following reasons:
                    <br /><br />
                    <b>1. Selecting a design-builder:</b> The first step in the design-build process involves the owner choosing the right design-build team for them. Owners should carefully vet potential candidates and choose the company that best fits their project vision, needs, and budget. Though cost is an important factor to consider, it should not be the only factor an owner takes into account when deciding on a design-build team. The lowest price does not guarantee the best services. Owners who have been through the process before, understand what to look for in a qualified design-builder. It takes a team with experience and the necessary skills to make your project come to life.
                    <br /><br />
                    <b>2. Pre-construction assessments:</b> This step often overlaps with selecting a design-builder. Attention to detail matters during this phase. Pre-construction involves determining the budget and analyzing the construction site in your home to know what needs to be done before construction even begins. This helps maximize efficiency throughout the project.
                    <br /><br />
                    <b>3. Architectural Design:</b> Once the above step is finished, including the timeline, budget, and location, the architectural design phase begins. Often, parts of this step begin during the pre-construction phase. From here, the design-build team works together to create the best possible design that meets the homeowner’s wants and needs. During this phase, the team will assess areas for cost savings and optimized productivity, while still meeting functional and structural requirements, as well as the style preferences the owner has asked for. Pricing estimates are also established during this phase, providing a finalized budget for the owner to approve.
                    <br /><br />
                    <b>4. Construction:</b> The actual construction generally begins immediately following the architectural design phase. Your design-builder team may have even readied the jobsite while designs were finalized, allowing some parts of the construction process to begin during the design phase. By overlapping the design and construction phases, the project team can deliver a build that is on time and done quickly. There are still specialty subcontractors, material vendors, and all the other parties involved in home construction, but the job will be completed sooner and with the same quality standards as any other form of construction delivery method.
                    <br /><br />
                    <b>5. Post-construction:</b> Once the project is complete, the design-build team provides a post-construction handoff. This includes walk-throughs, documentation for the owners, and a final inspection to make sure everything is in order. During this phase, the team may ask for feedback on the final product.
                </p>
            </section>
            <div className="skitchen sects">
                <img src={designD5} alt="design-build pics" />
                <img src={designD6} alt="design-build pics" />
            </div><br />
            <section className="sects">
                 <p className="subheading">DESIGN - BUILD</p>
                <h3>Common myths</h3><br />
                <p className="body">
                    <b>Myth #1: Design-build is a single method.</b><br /> 
                    There is more than one way to design-build, but over the years, the term has become a catch-all for the many different project delivery methods for both commercial and residential construction projects. Our staff can explain the process for designing and building your home, so you understand exactly the type of method we use.
                    <br /><br />
                    <b>Myth #2: The owner loses all control on their project.</b><br />
                    This is simply not true. In fact, one of the advantages is being able to directly work with the dedicated team of designers and contractors. This makes it easier for you and the company to accommodate any changes or concerns during the construction process.
                    <br /><br />
                    <b>Myth #3: Design-build is more expensive than traditional design-bid-build.</b><br />
                    While hiring a design-build company may seem like a larger investment up front, it can actually be more cost-efficient in the long run. This is because the plan’s budget is outlined early in the process, with everything accounted for, from services to materials. This helps the project stay on budget and on time. The designers and contractors also work together to avoid costly miscommunications.
                    <br /><br />
                    <b>Myth #4: Design-build is good for speed, but bad for quality.</b><br />
                    Many believe that speed means the contractors cut corners and the job is lower quality. This is false.
                    The timeframe is accelerated due to different aspects of construction happening simultaneously. Grouping activities, such as designing and ordering materials, shortens the amount of time it takes to finish the project. Of course, the timeframe depends on the scope. If you are unsure how long it will take, your dedicated design and build team can give you an estimate.
                    <br /><br />
                    <b>Myth #5: New construction takes forever.</b><br />
                    While assembling a new home can take a long time, with this delivery method, the timeframe is shortened. Instead of the years it can take a homeowner to source an architect, a designer, and individual contractors, it may take a little over a year. Your new home won’t be done instantaneously but having a team already available will save you all the time and money it takes to assemble a team on your own
                </p>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">DESIGN - BUILD</p>
                    <h3>Our design - build services</h3>
                    <p className="body">
                        Our dedicated team of designers and contractors can help you achieve the space of your dreams.
                        <br /><br />
                        Whether you’re looking to transform your kitchen, create a spa-like retreat in your bathroom, add an additional room, or even remodel your entire home, our design-build team at Arise Contractors Group  is here to help you achieve your ultimate home goals.
                        <br /><br />
                        We offer a free consultation so we can discuss your vision for the project and begin the process of making your home work for you
                    </p>
                </div>
                <img src={dRight} alt="Design Build" />               
            </section>
            <div className="sects sSect3">
            <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
            </div>
            <section className="sectNews">
                <img src={news} alt="news" className="newsImg" />
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

export default Design