import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import './bathroom.css'
import './service.css'
import bath1 from '../../img/service/bath1.png';
import bath2 from '../../img/service/bath2.png';
import bathgal1 from '../../img/service/bathgal1.jpg';
import bathgal2 from '../../img/service/bathgal2.jpg';
import bathgal3 from '../../img/service/bathgal3.jpg';
import bathgal4 from '../../img/service/bathgal4.jpg';
import bathRemod1 from '../../img/service/bathRemod1.png';
import bathRemod2 from '../../img/service/bathRemod2.png';
import bathRemod3 from '../../img/service/bathRemod3.png';
import bathRemod4 from '../../img/service/bathRemod4.png';
import banner from '../../img/service/sbanner.png';
import news from '../../img/home/news.png'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Bathroom = () => {
    return(
        <div className="Bathroom sectStart">
            <Nav/>
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Bathroom Remodels</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">BATHROOM REMODELS</p>
                <h2>Custom designed bathroom remodeling in Austin, Texas</h2><br />
                <p className="body">
                    Arise Contractors Group specializes in custom bathroom remodeling in Austin, Texas. Our many years of experience guarantee your home improvement projects will run efficiently and on time.
                    The bathroom, like the kitchen, is one of the most important sections of the home. Before you renovate, you need to find a bathroom remodeling company you can trust. You also need a company that checks every box and strives to surpass expectations.
                    <br /><br />
                    Arise Contractors Group’s commitment to quality home renovation shows in all our work. We offer full-service bathroom design and remodeling and strive to exceed our customer’s expectations. Our experienced designers make sure your custom bath remodel is exactly what you want to a tee!
                    <br/><br/>
                    When you hire us for your remodel, you are guaranteed that: <br /><br />
                    <li>We design the perfect bathroom to fit your lifestyle and the latest trends.</li>
                    <li>All our employees are selected for experience, training, and courtesy.</li>
                    <li>We never add any hidden fees.</li>
                    <li>Your job will receive a project manager that will give you a one-of-a-kind space that fits your personal needs.</li>
                    <li>You receive a detailed contract before the work begins.</li>
                    <li>You know the start and completion date of your project.</li>
                    <li>We meet your special requests.</li>
                    <li>We will complete your project on schedule and in budget.</li>
                </p><br /><br />
                <div className="sGallery">
                    <img src={bathgal1} alt="service bathlery preview" className="sgalImg" />
                    <img src={bathgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={bathgal3} alt="service gallery preview" className="sgalImg" />
                    <img src={bathgal4} alt="service gallery preview" className="sgalImg" />
                </div>              
                <button id="bathBtn" className="btnPrimary"> <HashLink to="/gallery/Bathroom Remodels#top">View our bathroom remodels gallery</HashLink> </button>
            </section>
            <section className="sects sSect3">
                 <p className="subheading">BATHROOM REMODELS</p>
                <h3>The bathroom remodeling process</h3><br />
                <p className="body">
                    Every renovation is as unique as a fingerprint. There are also general steps that apply to every remodel. We have created a step-by-step guide so you can see what your Austin, Texas custom bathroom renovation will look like.
                    <br /><br />
                    <b>In-Home Consultation</b> <br /> We work together to get an understanding of what your general remodel will look like and give you an estimate of what the project could cost.
                    <br /><br />
                    <b>Design and Bid Presentation</b><br /> We go over your ideas and come up with a unique and custom remodel that caters to your wants and needs.
                    <br /><br />
                    <b>Remodel Plans and Permits</b><br /> Using state-of-the-art computer imaging, we generate the exact end look of your space. We also seek any necessary permits from the city.
                    <br /><br />
                    <b>Demolition</b><br /> We remove the old toilet, sink, bath, and cabinets to begin the remodeling process.
                    <br /><br />
                    <b>Construction</b><br /> We install new fixtures, fix wiring issues, install new pipes, and make other repairs. We also apply our discussed design during this phase and ensure your makeover is everything you want it to be!
                    <br /><br />
                    Enjoy your new room! Once we ensure proper installation and cleanliness, it is ready to use!
                </p>
            </section>
            <section className="sects doublePage">
                <div>
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Bathroom ventilation tips</h3> <br />
                    <p className="body">Maintain a clean and healthy space by keeping mold and mildew from flourishing in your space. Proper ventilation is a necessary part of the bath remodeling process. This is especially the case for family homes. The size and type of shower you are installing affects the number of fans needed.
                        If your space is 100 sq. feet or less, one fan placed above or near the shower will suffice. The fan only needs to be capable of 100 CFM (cubic feet of air moved) per minute.
                        <br /><br />
                        If your space is larger than 100 sq. feet, it is recommended to install additional ones. The fan size the shower needs depends on the type. If it is a walk-in stall, then 50 CFM would work. For a shower and bathtub, you will need one that approaches 100 CFM, especially if the space is large. A window, if possible, would also help with air ventilation.
                        <br /><br />
                        Without proper ventilation systems, the room will get stuffy and the excess moisture in the air from hot showers could cause mold and mildew. Gas from cleaning chemicals can also affect your health without proper ventilation. Getting your bathroom remodeled with new ventilation systems is the best way to reduce the amount of cleaning you have to do. Call Arise Contractors Group for a free consultation!</p>
                </div>
                <div>
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Kids-safe design</h3> <br />
                    <p className="body">If you have very young children running around the home, you always want to ensure their safety. Your child’s washroom project will look very different than a master bath remodel. Home accidents are preventable with an updated flooring and child-proof design.
                        Bathmats can only prevent slippage in specific areas. Install slip-resistant flooring to protect your children anywhere in the space. Textured stone tile and ceramic flooring are also great for preventing slips.
                        <br /><br />
                        Small children often have a tough time seeing above the counter or stepping into a bathtub. Small plastic stools may not stay in place very well, but installing steps is a simple solution. A lift-out step attached to a drawer or cabinet under the sink is more durable and reliable for preventing falls. A mounted step into the basin, as well as a rail to hold on to can also make it easier for them to climb in and out. Other things to consider include:
                        <ul>
                            <li>Choosing faucets and handles that are easy to use and rounded with no sharp corners or edges.</li>
                            <li>Adding more storage with locking cabinets to keep dangerous items out of reach.</li>
                            <li>Using wainscoting to protect your drywall from excessive splashing.</li>
                            <li>A simple shower remodel or installing a kid-friendly shower door that allows your kids to easily step in and out without hassle.</li>
                        </ul>                        
                    </p>
                </div>
            </section>
            <div className="skitchen sects">
                <img src={bath1} alt="Random bathroom pics" />
                <img src={bath2} alt="Random bathroom pics" />
            </div>
            <section className="sects sSect3">
                 <p className="subheading">BATHROOM REMODELS</p>
                <h3>Bathroom additions</h3><br />
                <p className="body">
                    Avoid the pains of waiting in line to shower or brush your teeth in the morning. Enhance your quality of life with an extra bathroom! A full bath adds value to your home, so when it comes time to sell, you will be looking at an increase in property value. All the homeowners we have worked with were ecstatic with their addition. Increase your home value and the quality of your life by setting up an appointment with us today! We also offer universal design and master bath remodels.
                </p>
            </section>
            <section id='ksectLeft' className='sectLeft'>
                <img id="imgDown" src={bathRemod1} alt="Bathroom Remodel" />
                <div className="sSectTxt" id="down">
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Bathroom plumbing</h3>
                    <p className="body">
                        The most difficult part of a bathroom renovation is configuring the plumbing. Sinks, showers, and toilets all need it. There are the typical hot and cold lines that they use as well. However, whirlpool tubs need different sets of pipes and plumbing structure.
                        <br /><br />
                        Discuss what options are best for you with your custom bathroom contractor! You want to pick lines that are durable and will not need repairs for years to come.
                        <br /><br />
                        Most contractors are moving away from copper lines and transitioning to cross-linked polyethylene (PEX) pipes. These types of lines are much more flexible with similar durability. PEX pipes come with a 25-year warranty and allow you to maximize your budget.
                    </p>
                </div>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt" id="down">
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Pros and cons of low flow toilets</h3>
                    <p className="body">
                        Low flow toilets are a big focus in bath remodels to ensure energy efficiency. On average, low-flow toilets use about half the gallons per flush as normal toilets. But are they a better alternative?
                        <br /><br />
                        The big problem with low flow toilets is that one flush may not always be enough. Having to flush twice defeats the purpose. We recommend using a dual-flush toilet. These have two options for flush capacity, depending on how much you need to flush.
                        <br /><br />
                        These will allow you to use about a half-gallon more per flush when necessary.
                    </p>
                </div>
                <img src={bathRemod2} alt="Bathroom Remodel" />
            </section>
            <section id='ksectLeft' className='sectLeft'>
                <img id="img2Down" src={bathRemod3} alt="Bathroom Remodel" />
                <div className="sSectTxt" id="down">
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Space-saving design</h3>
                    <p className="body">
                        As much as a large bathroom would be nice, sometimes space is limited. Extra towels, toiletries and cleaning products all need a storage spot. Wall-mounted cabinets or shelving can help in this regard.
                        <br /><br />
                        Mounting holders inside cabinets save space and keep your things organized. Toothbrushes, cosmetics, and razors can all hang on the wall. This allows the actual shelves and drawers to have space for larger items like hairdryers and towels.
                        <br /><br />
                        A small bathroom does not need to feel cramped if the fixtures are well-organized
                    </p>
                </div>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt" id="down">
                    <p className="subheading">BATHROOM REMODELS</p>
                    <h3>Austin, Texas Premier Bathroom Remodeling Contractors</h3>
                    <p className="body">
                        You deserve a bathroom that makes you feel comfortable. Calling the right bathroom remodeling contractors will ensure your dream washroom will come to life, and Arise Contractors Group is the right choice.
                        <br /><br />
                        Our team can tackle whatever remodeling job you need done, including custom homes and kitchen and bathroom remodeling projects. No matter the project, our skilled team has your wants and needs covered.
                        <br /><br />
                        We are also properly licensed and insured, so you can rest easy that we will get the job done right. Contact Arise Contractors Group today for your free consultation
                    </p>
                </div>
                <img src={bathRemod4} alt="Bathroom Remodel" />
            </section>
            <section className="sects sSect4">
                <p className="subheading">BATHROOM REMODELS</p>
                <h3>Common mistakes in a bathroom remodel</h3><br />
                <p className="body">
                    There are many common pitfalls when remodeling your bathroom. For example, if plumbing or ventilation are done incorrectly, you will need to make expensive repairs later. Here are a few mistakes new remodelers make:
                    <br /><br />
                    <ul>
                        <li><b>More does not mean better</b>– A bathroom remodel should simplify the room and make life easier. As we said above, an organized space is better than adding extra clutter to an already cramped room. Keep this in mind through the early steps of the design process! </li><br />
                        <li><b>Poor lighting</b>– Improper placement or inadequate lighting make preparing for the day difficult. Make sure you have enough lighting so you can clearly see your gorgeous bathroom.</li><br />
                        <li><b>No natural light</b>— Natural light is very important for creating a spa-like atmosphere. If a window is not an option, get creative and put in a skylight. This room is one of the first places you go to in the morning. Bringing in natural light allows you to wake up to a more peaceful ambience.</li><br />
                        <li> <b>Toilet as the main focus</b>– The toilet should not be the first thing you see in the room. Small spaces make this less avoidable, but highlighting the toilet is an easy way to make the room feel strange. Try choosing a design that instead focuses on the shower or bathtub.</li><br />
                        <li><b>Bad sealing</b>– Leaks are the last thing you will want to deal with after investing so much time and money into the remodel. Choosing the right bathroom remodeling contractors is key to making sure your design is properly sealed so it can last for decades to come.</li><br />
                    </ul>
                </p><br />
            </section>
            <section className="sects sSect1">
                <p className="subheading">BATHROOM REMODELS</p>
                <h3>Frequently asked questions</h3><br />
                <p className="body">
                    <b>What determines the cost of your new bathroom?</b><br />
                    Remodeling a bathroom can be a complex process. There are many different things to consider when determining the price. The materials you want for your bathroom, the cost of installing new floors or putting on a fresh coat of paint, etc. Cabinets usually take up half of the cost of a bathroom remodeling project. What you want altered and what you need re-done will help us find out the total cost of your remodeling project.
                    <br /><br />
                    <b>How long does it take to remodel a bathroom?</b><br />
                    Under ideal circumstances, a bathroom remodel can take around 3-4 weeks. The exact time, though, depends on the scope of the project. If your bathroom needs new piping or wiring, the timeline will look different than more superficial updates to the room’s look. We make sure that your remodel will be finished within the timeframe agreed upon prior to start of the project.
                    <br /><br />
                    <b>Do you need permits to remodel your bathroom?</b><br />
                    You need the proper permits if your remodeling project requires changes to the structure of your home, installation of new wiring, or redoing piping. For smaller aesthetic changes, such as fresh paint and changing out sinks, you do not need permits.
                    <br /><br />
                    <b>Can you remodel your own bathroom?</b><br />
                    While it is possible to remodel your own bathroom, it is not recommended beyond small superficial changes to the paint and fixtures. Re-doing piping and electrical requires training and experience, and proper permits to complete. In many cases doing remodeling projects will take longer to complete without the experience of professionals.
                <br /><br />
                Austin, Texas is a dream destination for many people. Yet the homes here do not always compare well to the weather, sights, and attractions. Few homeowners get to see their dream home become reality. Do not let yours fade away, let Arise Contractors Group handle your whole home remodel. Schedule your complimentary consultation and make your dreams come true today!
                </p>
                <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
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
            </section>
           <Footer/>
        </div>
    )
}

export default Bathroom