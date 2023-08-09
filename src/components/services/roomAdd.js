import './roomAdd.css'
import './service.css'
import rgal1 from '../../img/service/room add/rgal1.jpg';
import rgal2 from '../../img/service/room add/rgal2.png';
import rgal3 from '../../img/service/room add/rgal3.jpg';
import rgal4 from '../../img/service/room add/rgal4.jpg';
import remod1 from '../../img/service/remod1.png';
import rdouble1 from '../../img/service/room add/rdouble1.jpg';
import rdouble2 from '../../img/service/room add/rdouble2.jpg';
import banner from '../../img/service/sbanner.png';
import news from '../../img/home/news.png'
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Roomadd = () => {

    return(<div><Nav/>
        <div className='sectStart'>  
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Room Additions</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">ROOM ADDITIONS</p>
                <h2>What is a room addition?</h2><br />
                <p className="body">
                    If you’re interested in increasing the square footage of your home, a room addition is a great choice. Also known as a bump out, this type of remodeling project is usually a single room structure built onto a house. This could include expanding the space of your kitchen, adding another bathroom or bedroom, expanding the size of your master suite, or even adding a personal office. Usually, added rooms are meant for a single function, but that isn’t always the case. You can add a combination office-guest room or a sunroom that doubles as an additional living room. The possibilities are endless. Our designers are experts at interior design and can help you make the most of your extra space.
                    <br /> These types of additions are also less expensive than a whole home remodel and can add new life to an old home. Don’t move; improve!
                    <br /><br />
                    You want your home treated with the greatest care and respect, but not every home remodeling contractor can provide that level of service. At Arise Constructors Group, our team makes sure to treat your home like it’s our own. We keep our clients notified throughout the entire remodeling process, so you’re never met with surprises or sudden fees.
                    <br/><br/>
                    Other services we offer include:
                    <br/><br/>
                    <li>Providing ideas and full design plan</li> 
                    <li>Obtaining building plans and permits</li>
                    <li>Providing you with a detailed proposal and contract with no hidden fees</li> 
                    <li>Adding detail to your existing plans</li> 
                    <li>Completing your room addition or second story addition project from start to finish</li>
                </p><br />
                <div className="sGallery">
                    <img src={rgal1} alt="service gallery preview" className="rgalImg" />
                    <img src={rgal2} alt="service gallery preview" className="rgalImg" />
                    <img src={rgal3} alt="service gallery preview" className="rgalImg" />
                    <img src={rgal4} alt="service gallery preview" className="rgalImg" />
                </div>
                <br /><br />
                <button className="btnPrimary" id='roombtn'> <HashLink to="/gallery#top">View our gallery</HashLink>  </button>
            </section>
            <section className="sects raSect1">
                <p className="subheading">ROOM ADDITIONS</p>
                <h2>Room additions for your Austin, Texas home</h2><br />
                <p className="body">
                    A room addition is the perfect way to address issues with your home. Living in Austin, Texas is amazing, but there are a lot of older homes. Do you feel like you’ve run out of space? Could you use an extra bedroom? Would an extra bathroom make your life easier? Does the kitchen need to be bigger? Or maybe it would be nice to have a bigger family room or dining room? Rather than find a new home, a room addition or a second story addition in Austin, Texas is a more inexpensive and less stressful way to increase your living space while improving your quality of life.
                    <br/><br/>
                    As one of Austin, Texas’s leading home remodeling companies, Arise Contractors Group has built all sorts of beautiful additions to area homes, including:
                    <br/>
                     <li>Bathrooms</li>
                     <li>Casitas or Guest Housesbr</li>
                     <li>Home Theaters</li>
                     <li>Mancaves or Studies</li>
                     <li>Pool Houses or Cabanas</li>
                     <br/>             
                    In addition to a complimentary consultation, Arise Contractors Group’s skilled team will also help you in every step of the process. Whether you expect your family to grow or you would like to boost the resale value of your home, we can design and build the perfect room addition for your home. Arise Contractors Group consists of skilled team members who have a wealth of experience in all phases of design and remodeling. The key to a good design is to make it look as if it was always part of the original structure. We have extensive knowledge and experience with room additions and second story home additions for Austin, Texas homeowners, and we promise to get the job done on time and on budget
                </p>
            </section>
            <section className="sects doublePage">
                <div>
                    <p className="subheading">ROOM ADDITIONS</p>
                    <h3>Different types of room additions</h3> <br />
                    <p className="body">Home additions come in a variety of types to address the owner’s specific needs for a living space, their budget, and their style. These can range anywhere from garage conversions or full-size additions that require a new foundation, walls, and roofing. Additional rooms are often used for an extra bedroom, bathroom, office, or family room. When choosing what kind of addition you want, you can either build out or build up. Building out typically involves adding another room on the ground level and is one of the most common types of room additions. This increases the house’s footprint, so pouring a new foundation and losing some yard space are required.
                        Building up is a great way to increase your livable space without sacrificing your yard and your budget to extending the floorplan. In this type of addition, you add a room to the second story of your house or, if you do not have a second story, you can add one!
                        <br /><br/>
                        Building up means it is less likely your room addition contractor will have to pour another foundation, though they may have to strengthen the existing foundation to support the extra weight. You will also need to add a staircase and check with your specific area for regulations on house size and height.
                        Another common addition in the Austin, Texas area is attached or detached rooms for guest or in-law suites. These are also known as accessory dwelling units. They can range from completely detached, smaller buildings with electricity and heat to semi-attached but private secondary residences on the property.</p>
                </div>
                <div>
                    <p className="subheading">ROOM ADDITIONS</p>
                    <h3>Adding A Custom  Mother-In-Law Suite</h3> <br />
                    <p className="body">In-law suites, often called granny flats or accessory dwelling units (ADUs), are experiencing a rise in popularity among Austin, Texas homeowners. In recent years, change to legislation have made it easier and cheaper for residents to build in-law suites on their property. This has opened up this option to countless homes across the County.
                        Adding an in-law suite comes with the benefit of adding square footage to your home. Your space might feel crowded, especially with multiple generations living under one roof. You might want to give your in-laws a place to stay where they can relax away from the hustle and bustle of the rest of the home. An in-law suite is the perfect addition if you need to accommodate more people on your property. These units also add substantial property value, too.
                        <br /><br />
                        Mother-in-law suites also add convenience to your everyday life by allowing you to use the added space to plan for the future. This includes plans for extending your family, accommodating a friend or other guests, or even need an extra room that changes functions throughout your lifetime. Homes aren’t always accommodating, especially for aging in place, but an in-law suite comes built with aging in place in mind so your loved ones can live independently and comfortably.
                        </p>
                </div>
                
            </section>
            <section className="sects raSect2">
                <div className="rdouble">
                    <img src={rdouble1} alt="room addition pics" />
                    <img src={rdouble2} className="kitchenImg" alt="room addition pics" />
                </div><br /><br />
                <button className="btnPrimary"> <Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link> </button>
            </section><br /><br />
            <section className="sects raSect3">
                <p className="subheading">ROOM ADDITIONS</p>
                <h2>Guidelines for the perfect Austin, Texas room addition</h2><br />
                <p className="body">
                    The following are some guidelines to understand as you consider adding a room or a second story home addition in Austin, Texas:
                    <br />
                    1. Room Addition and Second Story Home Addition Estimates
                    Homeowners often wonder how different bids can vary so much in price, when all Austin, Texas home remodeling companies are looking at the same plans. The simple answer is that the pricing is all in the details. Make sure to put all the details in writing, an essential way to eliminate confusion about the products to be used and the work to be done. This way, builders can give accurate bids and buyers can compare them easily.
                    <br /><br />
                    2. Find out the Location of Property Lines
                    Local codes have restrictions regarding how close you can build to your neighbors, streets or even into your own backyard. The first thing you want to do is locate your property lines and develop a plot plan, which would include your home, landscaping, and the location of your utilities. Arise Contractors Group employs competent and experienced architects that will help you throughout this process.
                    <br /><br />
                    3. Develop a design that complements your current floor plan
                    Look at the structure and the floor plan of your existing home. This will allow you to gather your own ideas on how you envision your new room addition. Finally, with the help of an architect and an interior designer from Arise Contractors Group, you can develop a plan that provides the most attractive, useful and economical addition to your home.
                    <br /><br />
                    4. Detail your plans
                    When it comes to your building plans, it is never possible to have too much detail. Before work begins, make sure you have detailed descriptions of the exact materials and the scope of the work to be done. This will save you from the potential headaches that can occur. Building a room addition in Austin, Texas requires great skill. It is a difficult task to make sure the addition fits flawlessly with the existing structure without any damage to the structural portion of the existing house. Therefore, room addition projects can easily be as complex as building a new house. Arise Contractors Group’s team of architects, interior designers, and sub-contractors will make sure your remodeling project is a success, completed on time and within budget
                    <br />  
                </p><br /><br />
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">ROOM ADDITIONS</p>
                    <h3>Award winning custom whole home remodeling contractors in Austin, Texas</h3>
                    <p className="body">
                        One of the most common reasons for whole home remodeling is that a one room remodel simply is not enough. Many home owners have started a project in one part of the house, only to realize how badly another room needs improvement. Adding an air conditioner in your bedroom is great for when you’re sleeping but putting in ducts and vents to cool every room is an even better way to stay cool. There is not much point in adding energy-efficient lighting in one bathroom when the other still leaves you with an enormous electrical bill. One updated modern room surrounded by decades-old designs will stick out and distract. When you do a whole home renovation, you get the opportunity to make your home feel whole, rather than a collection of spaces from different times and different themes.
                            <br />
                        Arise Contractors Group is an award-winning, whole house remodeling contractor serving the Austin, Texas area. Our attention to detail is unmatched, and our staff is eager to help you achieve your dreams. No matter the project, whether it be a kitchen remodel, bathroom remodel, or room additions, we can handle it with the care and professionalism you deserve. We’ll take the time to make sure your house flows the way you want it to, so you can enjoy your gorgeous Austin, Texas custom home without any hassle. Our team walks you through every step of the process and we pride ourselves on being upfront with all our clients, so no need to worry about sudden fees or changes in the plan. By trusting us with your whole house remodel, you get the full customer experience. We treat you like we would our family because we believe all our customers are just as important. Allow our design build company to handle your custom home renovation.
                    </p>
                </div>
                <img src={remod1} alt="Remodel" />
            </section>
            <section className="sectNews">
                <img src={news} alt="news" className="newsImg" />
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

export default Roomadd;