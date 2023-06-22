import './service.css';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import banner from '../../img/service/sbanner.png';
import kgal from '../../img/service/kitchenGal.png';
import kgal2 from '../../img/service/kitchenGal2.png';
import kgal3 from '../../img/service/kitchenGal3.png';
import kgall4 from '../../img/service/kitchenGal4.png';
import kdouble1 from '../../img/service/kitchenDouble1.png';
import kdouble2 from '../../img/service/kitchenDouble2.png';
import kleft from '../../img/service/kLeft.png';
import kright from '../../img/service/kRight.png';
import kleft2 from '../../img/service/kitgal.png';
import kright2 from '../../img/service/conceptKit.png';
import news from '../../img/home/news.png';
import { Link } from "react-router-dom";
const kitchen = () => {
    return(<div><Nav/>
        <div className="Kitchen sectStart">
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Kitchen Remodels</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">Kitchen Remodels</p>
                <h2>Classic kitchen makeovers for your Austin Texas Home</h2><br />
                <p className="body">
                    Arise Contractors Group is the best in the Austin Texas kitchen remodeling business. We are a full-service design and remodeling company that specializes in custom kitchen cabinets, tile installation, islands, high end design and much more. Our commitment to quality and prestige is unmatched.
                    <br /><br />
                    Owning a home in Austin Texas opens up unique opportunities to showcase amazing kitchen designs. You want a company that can create your dream kitchen and stay on budget, with proper communication and high-quality work. Our goal is to make your home beautiful, while still maintaining its functionality. Arise Contractors Group offers kitchen remodeling in Austin Texas. Our team is the best remodeling company in Austin Texas because we finish projects on time and on budget. Contact our office today to set up your complimentary consultation!
                    <br /><br />
                    You may think the living room is the most “lived in” space in your house, but the truth is, it’s usually your kitchen. From family gatherings to dinner parties, it is the heart of your home. You want it to be warm and inviting but functional, so you can show off your impressive cooking skills. If you’re looking to make changes, you want a company that specializes in Austin Texas kitchen remodeling to ensure quality work. Our Unparalleled Austin Texas Kitchen Remodeling Services Include:
                    <br /><br />
                    <li>Free Consultation</li>
                    <li>Complete Kitchen Design</li>
                    <li>Detailed work description and contract with no hidden fees or charges</li>
                    <li>Permit Processing</li>
                    <li>Start to Finish Complete Remodel</li>
                    
                </p><br /><br />
                <div className="sGallery">
                    <img src={kgal} alt="service bathlery preview" className="sgalImg" />
                    <img src={kgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={kgall4} alt="service gallery preview" className="sgalImg" />
                    <img src={kgal3} alt="service gallery preview" className="sgalImg" />
                </div><br /><br />            
                <button className="btnPrimary"> <Link to="/gallery">View our kitchen remodels gallery</Link> </button>
            </section>
            <section className="sects">
                 <p className="subheading">KITCHEN REMODELS</p>
                <h3>Why should you remodel your Austin Texas kitchen?</h3><br />
                <p className="body">
                    Most of our customers who want to remodel choose to do so for one of the following reasons:
                    <br /><br />
                    They are unhappy with the amount of storage space. <br />
                    It is hard to access the storage space they already have. <br />
                    They are unsatisfied with the amount of floor and counter space. <br />
                    The current layout does not fit their lifestyle. <br />
                    They feel like the area is too small and needs to be opened up. <br />
                    They love to entertain but need more social interaction between their kitchen and other rooms. <br />
                    The fixtures, fittings and décor is outdated and in need of replacement. 
                    <br /><br />
                    Arise Contractors Group has helped countless people remodel their kitchens in Austin Texas. We offer a complete, one-stop service not only for your kitchen, but we also are the best company around for Austin Texas whole home remodeling.
                    Choosing a project partner is no simple choice, which is why our knowledgeable team is more than happy to answer all your questions before you make the final decision. We want to make sure you remain comfortable throughout the entire process. From your initial consultation to design and planning, and the entire remodeling process, you can rest assured your project will be completed on time, on budget, and will be completed with your full satisfaction.
                </p>                
            </section><br />
            <div className="skitchen sects">
                <img src={kdouble1} alt="kitchen pics" />
                <img src={kdouble2} alt="kitchen pics" />
            </div><br />
            <section className="sects">
                 <p className="subheading">KITCHEN REMODELS</p>
                <h3>The kitchen remodeling process</h3><br />
                <p className="body">
                Each project has a different process from beginning to end. When dealing with a custom kitchen renovation, no two are exactly alike. In general, a step-by-step guide may look something like this:
                <br /><br />
                <b>1. In-Home Design Consultation:</b> During our design consultation, we discuss your project and get a good understanding of what you’re looking for in your redesign. We take photos, measurements, and make design suggestions. Then we schedule a time for you to visit our design center to review your project and bid details.
                <br /><br />
                <b>2. Design and Bid Presentation:</b> We begin work on designing your project right away, using our state-of-the-art design software. When it’s ready, we present the newly designed kitchen space and review all the design elements. At this point, we can give you an accurate range of the cost of the project.
                <br /><br />
                <b>3. Pre-Remodel Permits and Plans:</b> Once the contract is signed, we finalize the design and details. We then begin securing permits by submitting plans and paperwork to the city and county. We also schedule a shopping trip with our senior designer to pick out materials, fixtures, and paint for your new kitchen.
                <br /><br />
                <b>4. Demolition – Removal of Existing Kitchen:</b> Demolition consists of removing old appliances, cabinets, flooring, countertops and anything else that needs to go. From here, our pros can assess the condition of the floor, ceiling, and walls, and decide if corrections are needed.
                <br /><br />
                <b>5. Plumbing, Electrical, Floors and Drywall:</b> If you require new light fixtures, plumbing, HVAC, or cable or speaker or electrical wires, they are installed at this point. Once that is finished, we can install flooring, insulation, and drywall.
                <br /><br />
                <b>6. Installation of Cabinets and Countertops: </b> Installation of your countertops and cabinets is next, and your new kitchen starts to take shape. This is an important and meticulous step as everything needs to be laser-measured and leveled to ensure it looks perfect.
                <br /><br />
                <b>7. Interior Finishing and Painting:</b> We install backsplashes, trim, plumbing fixtures, finish floors (if required), and finally paint.
                <br /><br />
                <b>8. Fixtures, Appliances and Cleanup:</b> In this final phase we touch-up finishes, install new appliances, lighting fixtures, and clean up all our materials and tools.
                <br /><br />
                <b>9. Enjoy your New Kitchen:</b> At this point, your makeover is complete, and you can begin enjoying it. Plan a dinner party, cook for the family, or order in to keep it spotless. The possibilities are endless!
                </p>                
            </section><br /><br />
            <section className='sectLeft'>
                <img src={kleft} alt="random picture" />
                <div className="sSectTxt">
                    <p className="subheading">KITCHEN REMODELS</p>
                    <h3>Kitchen designs: Renovating the most important room in your house</h3>
                    <p className="body">
                        Over the last few decades, the evolution of design has accelerated, which makes working with Austin Texas’s best kitchen remodeling company even more important. Since your kitchen is one of the busiest and most important rooms in your home, a worthy design is a must. It’s a gathering place, an entertainment room, and a place of inspiration for ambitious home-cooked meals. Because of this, you need a kitchen contractor who pays attention to detail.
                            <br /><br />
                        Your kitchen should always be comfortable, welcoming and efficiently designed, all while reflecting the individual homeowner’s unique personality. Products are continuously reengineered, updated, and redesigned to meet the needs of the consumers. For example, the needs of multigenerational or age-in-place remodels are markedly different. Our team has knowledge of the latest products on the market and will help you make the right selections to fit your lifestyle.
                    </p>
                </div>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">KITCHEN REMODELS</p>
                    <h3>The kitchen triangle</h3>
                    <p className="body">
                        The triangle is a layout that architects and designers use when working on residential projects. The idea is to create an efficient space between key appliances such as the oven, sink, and refrigerator. There are specific principles that designers follow, including measurements between workstations, amount of traffic flow between them, and how much counter space should be on either side of each appliance. Have questions about the efficiency of your cooking area? We will be happy to answer any of them! Throughout the project, we will thoroughly explain our process and how that affects the functionality.
                        <br /><br />
                        Layout changes are an important aspect of all kitchen renovations. This involves replacing flooring, kitchen countertops, appliances, lighting fixtures, wall placement, and more to create a space that is truly transformed. Remodeling your Austin Texas home’s kitchen is that you choose where you want your oven, your sink, and your refrigerator to be placed. We take into account how you wish your kitchen to be designed and transfer those dreams into plans. Our team can make it happen for you. Kaminskiy Design and Remodeling is the best choice for all your kitchen renovation needs.
                    </p>
                </div>
                <img src={kright} alt="random picture" />
            </section>
            <section className="sects">
                 <p className="subheading">KITCHEN REMODELS</p>
                <h3>The kitchen remodeling process</h3><br />
                <p className="body">
                For many home cooks, appliances are one of the most important parts of kitchen. However, there exists a seemingly endless variety of options. It can be overwhelming for a homeowner. Here are some features to look for when choosing your appliances.
                <br /><br />
                <b>1. Energy Efficiency:</b>  Save money and reduce your environmental footprint by looking for appliances with the Energy Star rating.
                <br /><br />
                <b>2. Burner Heat Output:</b>  Professional or commercial grade appliances typically have a better range of high and low heat, allowing you to raise temperatures quickly or maintain a nice, even simmer.
                <br /><br />
                <b>3. Aesthetic:</b>  Depending on your kitchen design and style choices, the look of your appliances will differ.
                <br /><br />
                <b>4. Ease of Use:</b>  Are the buttons, knobs, and handles easily identifiable and intuitively located? Or are you constantly searching for them? If it takes an engineering degree to operate your stove, you may want to look for a different option.
                <br /><br />
                <b>5. Safety Features:</b>  This may be number one if you have young children. Safety features can prevent dangerous accidents from happening.
                <br /><br />
                <b> 6. Easy Cleanup:</b> Are the appliances easy to clean? Do they show fingerprints easily? Though these may not seem like important questions to ask, an appliance that is easy to clean can make your life a little easier, too
                </p>                
            </section>
            <section className='sectLeft'>
                <img src={kleft2} alt="random picture" />
                <div className="sSectTxt">
                    <p className="subheading">KITCHEN REMODELS</p>
                    <h3>Galley Kitchen</h3>
                    <p className="body">
                        This design is also known as a corridor kitchen. It is a long, narrow room with cabinets and appliances on both sides of a walkway. The layout is the polar opposite of open concept, where appliances, counters, and cabinets are more dispersed. 
                        <br /><br />
                        A galley is often much smaller and less expensive. This small layout takes up less space inside the house. It is also considered easier to work around as you cook. A few cons of the galley are less countertop space, difficulty fitting more than one person at a time, and the resale value is potentially lower than other available layouts.
                        <br /><br />
                        A galley sticks to the basics. No islands, bars, or anything else that takes up space.
                    </p>
                </div>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">KITCHEN REMODELS</p>
                    <h3>Open concept kitchen</h3>
                    <p className="body">
                        This layout has become increasingly popular since the 1970s and is considered by many to be a preferred lifestyle rather than a fad. The open plan concept includes the kitchen, living room and dining room all in the same space. There are no, or very few, walls dividing each space. This all-inclusive layout allows the person (or people) cooking to interact with everybody, even those watching television or eating their meal at the table.
                        <br /><br />
                        Some cons are that the cooking area can be noisy, disrupting the people in the living room. Cooking smells can reach the sofa, and it reduces wall space. In addition, if your layout is not already open concept, it is costly. Without any supporting structures, the walls in that area need to be far stronger than that of a standard closed room.
                        <br /><br />
                        There are a variety of pros and cons to an open space, though some do find that the positives outweigh the negatives. Whichever you prefer, Kaminskiy Design and Remodeling will guide you through each step to make sure each choice you make is the right one.
                    </p>
                </div>
                <img src={kright2} alt="random picture" />
            </section>
            <section className="sects">
                <p className="subheading">KITCHEN REMODELS</p>
                <h3>Common kitchen remodeling mistakes</h3><br />
                <p className="body">
                    A full kitchen remodel is a big undertaking and should be treated as such. Here is a list of common mistakes people make.
                    <br /><br />
                    <b> 1. Do it yourself:</b> There are plenty of DIY and home improvement projects you can do, but unless you’re qualified, a full renovation shouldn’t be one of them. A full remodel is one of the biggest, most expensive, and complicated home projects you can do to your home. A qualified and licensed contractor or remodeling company should always be involved.
                    <br /><br />
                    <b>2. Choosing the Wrong Contractor:</b> Again, a kitchen remodel is a big, important job – don’t settle for an under-qualified person to handle it. Do your due diligence, check reviews, and trust your gut. Don’t necessarily choose someone because their estimate was lower. It may be much more expensive to have to redo the job if you aren’t happy with the results.
                    <br /><br />
                    <b>3. Using Cheap Materials:</b>  High quality cabinetry, hardware and surfaces are expensive – but they are worth it. Cheap hardware can stretch, leaving you with crooked cabinet doors and laminate cabinets that peel easily.
                    <br /><br />
                    <b>4. Not Being Sure of What You Want:</b>  When you approve a design and o.k. work, be sure that you are comfortable and happy with it. Changing your mind mid-project or at the end can lead to costly delays, new work orders, and put a huge strain on your budget.
                </p>                
            </section><br /><br />
            <section className="sects sSect3">
                <p className="subheading">KITCHEN REMODELS</p>
                <h3>Common kitchen remodeling mistakes</h3><br />
                <p className="body">
                    <b>How much does it cost to remodel a kitchen?</b><br />
                    As with many remodeling projects, kitchen remodels come in a range of prices depending on the size of your kitchen, the design, the materials and appliances you want to use, and the scope of what you want remodeled. A kitchen remodel can easily run from tens of thousands into the hundreds of thousands of dollars.
                    <br /><br />
                    <b>How long does it take to remodel a kitchen?</b><br />
                    The scope of the project and the size of your kitchen can also affect the time it takes for this project to be completed. Ripping out the guts of your kitchen and installing new pipes and electricity will take more time than simply redoing the floors and fixtures. Simple cosmetic updates to your kitchen are likely to take less time than structural changes. It is important to note that it is not uncommon for appliances and materials to be on back order which will add to the timeline to complete your kitchen remodel.
                    <br /><br />
                    <b>Do you need a permit to remodel your kitchen?</b>    
                    Generally, yes. Whether you need a permit for this remodeling project does, however, depend on where you live and the type of remodeling project. Installing new cabinets generally do not require permits whereas plumbing, electrical and structural changes do require permits. Arise Contractors Group has the experience and knowledge to know what permits you need for your project. Let us take care of the details, including all your permitting needs.
                    <br /><br />
                    <b>How much value does a kitchen remodel add to your home?</b><br />
                    The industry standard for the ROI (return on investment) for a kitchen remodel will vary based on the scope and depth of your remodel. The amount of value a kitchen remodel adds to your home also depends on where you live. The national average can be as low as 50% of the total budget, whereas higher end upgrades to homes that are on the Pacific can be upwards of 93%.
                    <br /><br />
                    <b>What is the most expensive part of a kitchen remodel?</b><br />   
                    The cabinetry is the generally the most expensive portion of a kitchen remodeling project. Making sure your cabinets are flush, level, and support the weight of whatever you put inside is also time-consuming, adding to the total cost. If you are opting for high end appliances these can also be a significant factor in the total price.
                    <br /><br />
                    <b>What makes a good kitchen remodeling contractor?</b><br />    
                    Simply put, a good remodeling company has the skill and experience to complete any project that comes their way on schedule and within budget. They should also be transparent and communicate with the homeowner throughout the whole process. Arise Contractors Group keeps you updated and involved throughout the whole design and remodel process, and we have the experience to keep your project on budget and on schedule.
                </p><br /><br />
                <button className="btnPrimary"><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link></button>               
            </section>
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
            </section></div><Footer/>
        </div>
    )
}

export default kitchen 