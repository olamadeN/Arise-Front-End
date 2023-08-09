import './service.css';
import banner from '../../img/service/sbanner.png';
import gal1 from '../../img/service/WHR/sgal1.png';
import gal2 from '../../img/service/WHR/sgal2.jpg'
import gal3 from '../../img/service/WHR/sgal3.jpg'
import gal4 from '../../img/service/WHR/sgal4.jpg'
import skit1 from '../../img/service/skitchen1.png';
import skit2 from '../../img/service/skitchen2.png';
import remod1 from '../../img/service/remod1.png';
import remod2 from '../../img/service/remod2.png';
import news from '../../img/home/news.png'
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Service = () => {
    return(<div><Nav/>

        <div className="sectStart">
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Whole Home Remodels</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">WHOLE HOME REMODELLING</p>
                <h2>What is a whole-home remodel?</h2><br />
                <p className="body">
                    You may have heard the terms “whole home remodeling” and “whole house renovation” before. What do those words really mean? Simply put, whole home remodeling projects involve updating more than just one room. Whole home renovation tackles several, or all, of the rooms in your home that need to be changed.
                    This could mean a makeover for your kitchen and dining room to create a sense of unity and better function. It could mean updating the living room that flows into a new outdoor living space, or it could be removing the entire interior and starting from scratch.
                    The size and scope of your whole home remodel is up to you; whatever you decide, Arise Constructors Group is ready to transform your house into the place of your dreams. Our talented team can handle any space with care and grace.
                </p><br />
                <div className="sGallery">
                    <img src={gal1} alt="service gallery preview" className="sgalImg" />
                    <img src={gal2} alt="service gallery preview" className="sgalImg" />
                    <img src={gal3} alt="service gallery preview" className="sgalImg" />
                    <img src={gal4} alt="service gallery preview" className="sgalImg" />
                </div>
                <br /><br />
                <button className="btnPrimary"><HashLink to="/gallery/Whole Home Remodels#top">View our whole home remodels gallery </HashLink></button>
                
            </section><br /><br />
            <section className="sects doublePage">
                <div>
                    <p className="subheading">WHOLE HOME REMODELLING</p>
                    <h3>Why custom remodel your home?</h3> <br />
                    <p className="body">
                        Just as there are many motivations to remodel the individual rooms in your house, whole home
                        transformations are considered for many reasons. No matter how wonderful your residence is
                        when you first move in, chances are you will want something different as time goes by.
                        <br /><br />
                        Buying a new property in Austin, Texas is no easy task. Costs continue to rise, supply is limited,
                        and demand never stops growing.
                        <br /><br />
                        Sometimes individual projects, like kitchen remodels, simply are not enough to tackle everything
                        you want changed in the house. Additionally, we cannot always predict the changes that life will
                        bring us. Rather than look to a new house to solve your problems, why not change the one you
                        are already in? A whole home remodel gives you the look and feel of an all-new environment,
                        without the hassle and costs of searching for, buying, and moving into a new building.
                    </p>
                </div>
                <div>
                    <p className="subheading">WHOLE HOME REMODELLING</p>
                    <h3>Custom home remodel for aging in place in Austin, Texas</h3> <br />
                    <p className="body">
                        Getting injured or growing older can make even the most well-built buildings a challenge to
                        move around in. Having a master bedroom upstairs may work great when you are younger and
                        able-bodied, but not so much if you use a wheelchair or walker as you age. You may find
                        yourself needing renovations made to your living space to make it easier to live in. Ramps for
                        easier wheelchair access, handrails to hold onto, and lowered countertops and cabinets are just
                        some of the changes people add to their homes to make it easier to live in them. Universal
                        bathroom remodels are part of that, too.
                        <br/><br/>
                        You can make every part of your home a place you can access. A whole home remodel in
                        Austin, Texas is an excellent opportunity to make things safer and simpler for you and your
                        loved ones.
                </p>
                </div>
            </section>
            <div className="skitchen sects">
                <img src={skit1} alt="kitchen pics" />
                <img src={skit2} alt="kitchen pics" />
            </div><br /><br />
            <section className="sects sSect3">
                 <p className="subheading">WHOLE HOME REMODELLING</p>
                <h3>Austin, Texas whole home remodel for multi-generational family living </h3><br />
                <p className="body">
                    It is not uncommon to purchase a home with one family size in mind, only to end up with more members than you planned for. Parents age, siblings may need care, and children are born. Before you know it, that two-bedroom home you bought could need three, four, five or more rooms. A whole home remodel gives you the ability to change that unused office into a nursery or convert that long-forgotten closet into another bathroom.
                    <br /> <br />
                    Room additions and granny flats also add more space to your Austin, Texas home, allowing everyone to live comfortably on the property. Each space can be designed to fit exactly what every person needs. Customize your home to your family and their needs.
                    <br /> <br />
                    Many properties in the Austin, Texas area are decades old. What was once high-fashion and high-tech in the 70s and 80s is now inefficient and out-of-touch. A whole home remodel is a great way to move yours into the 21st century. Those old appliances may still work, but they are likely using far more electricity than modern replacements. Layout and design was likely done long before wireless connectivity was a worry. State-of-the-art gadgets, solar panels, smart home systems, energy-saving new appliances and Internet cabling in every room are all incredible ways to improve your property.
                </p><br /><br />
                <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">WHOLE HOME REMODELLING</p>
                    <h3>Award-winning custom whole home remodeling contractors in Austin, Texas</h3>
                    <p className="body">
                        One of the most common reasons for whole home remodeling is that a one room remodel simply is not enough. Many home owners have started a project in one part of the house, only to realize how badly another room needs improvement. Adding an air conditioner in your bedroom is great for when you’re sleeping but putting in ducts and vents to cool every room is an even better way to stay cool. There is not much point in adding energy-efficient lighting in one bathroom when the other still leaves you with an enormous electrical bill.
                        <br/><br/>
                        One updated modern room surrounded by decades-old designs will stick out and distract. When you do a whole home renovation, you get the opportunity to make your home feel whole, rather than a collection of spaces from different times and different themes.
                        <br /><br />
                        Arise Contractors Group is an award-winning, whole house remodeling contractor serving the Austin, Texas area. Our attention to detail is unmatched, and our staff is eager to help you achieve your dreams. No matter the project, whether it be a kitchen remodel, bathroom remodel, or room additions, we can handle it with the care and professionalism you deserve. We’ll take the time to make sure your house flows the way you want it to, so you can enjoy your gorgeous Austin, Texas custom home without any hassle.
                        <br /><br />
                        Our team walks you through every step of the process and we pride ourselves on being upfront with all our clients, so no need to worry about sudden fees or changes in the plan. By trusting us with your whole house remodel, you get the full customer experience. We treat you like we would our family because we believe all our customers are just as important. Allow our design build company to handle your custom home renovation.
                    </p>
                </div>
                <img src={remod1} alt="Remodel" />
            </section>
            <section className='sectLeft' id='whsSectTxt'>
                <img src={remod2} alt="Remodel" />
                <div className="sSectTxt"  style={{overflowX:'visible'}}>
                    <p className="subheading">WHOLE HOME REMODELLING</p>
                    <h3>One room vs. whole house remodeling</h3><br/>
                    <p className="body">
                        {/* <ul style={{listStyleType:"none"}}>  </ul><br /> */}
                        <ul>
                            <b>More Cost Effective</b><br/>
                            <li>While remodeling just one room at a time saves time and money up front, you will spend far more in the long term.</li>
                            <li>Starting and stopping projects, hiring different teams, finding the same supplies months or years apart, and reapplying for permits all add up.</li>
                            <li>A whole home remodel from Arise Contractors Group offers stunning improvements, is less time-consuming and yields better results than doing individual rooms over time with multiple teams or doing it yourself.</li>
                        </ul>
                        {/* <ul > </ul><br /> */}
                        <ul>
                            <b>Universal Design</b><br/>
                            <li>Remodeling room-by-room can leave your home feeling disjointed. Walking out of a 21st-century kitchen and sitting down in a dining room straight out of the 80s is jarring, to say the least.</li>
                            <li>Trying to replicate the design and material choices from one room in another years later can be very difficult, if not impossible, as trends change and products are retired.</li>
                            <li>Arise Contractors Group will design and build you a home where every place has a purpose and every aspect feels like part of a bigger picture and plan.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section className="sects sSect4">
                <p className="subheading">WHOLE HOME REMODELLING</p>
                <h2>Why choose Arise Contractors Group for your Austin, Texas whole home remodel?</h2><br />
                <p className="body">
                Our team has the excellence, experience, and expertise to truly make your house a place you are proud to call home. We offer exemplary service and commitment to our clients and we will work with you closely every step of your Austin, Texas whole house remodeling project. <br /><br />

                We start with a complimentary in-home design consultation. During the complimentary consultation, we find out what you are dreaming of and offer design suggestions to make that dream a reality.
                Next, one of our world-class designers will meet with you to go over all the details of your dream home. We will blend your desires with the latest trends, technologies, and techniques to deliver a breathtaking design.
                We will meet with you at our Design Center to go over the proposal during our design and bid presentation. Here we will show you how your dreams can come true.
                After that it is time to go shopping! Our senior designer will go with you on a journey to find and purchase all the products, paints, appliances and accents your new home will need.
                Permits and paperwork are handled for you, another service that we provide and one less thing for you to worry about.
                As we work on the remodel process, you will receive regular updates from the project manager and the rest of our team on the status of your dream.
                We are so confident we will deliver your dream home, we end every whole home remodel with a grand celebration!
                <br /><br />
                Austin, Texas is a dream destination for many people. Yet the homes here do not always compare well to the weather, sights, and attractions. Few homeowners get to see their dream home become reality. Do not let yours fade away, let Arise Contractors Group handle your whole home remodel. Schedule your complimentary consultation and make your dreams come true today!
                </p><br />
                <button className="btnPrimary"> <Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link> </button>
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
export default Service