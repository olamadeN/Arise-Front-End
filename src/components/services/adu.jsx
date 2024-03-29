import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import './service.css';
import './adu.css';
import banner from '../../img/service/sbanner.png';
import gal1 from '../../img/service/adu/agal.jpg';
import gal2 from '../../img/service/adu/agal2.jpg';
import gal3 from '../../img/service/adu/agal3.jpg';
import gal4 from '../../img/service/adu/agal4.jpg';
import skit1 from '../../img/service/adu/adouble1.jpg';
import skit2 from '../../img/service/adu/adouble2.jpg';
import remod1 from '../../img/service/adu/remodel1.jpg';
import remod2 from '../../img/service/adu/remodel2.jpg';
import news from '../../img/home/news.png'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const ADU = () => {

    return(
        <div className="Adu">
            <Nav/>
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>ADU / Granny Flats</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">ADU / GRANNY FLATS</p>
                <h2>What is an ADU or Casita?</h2><br />
                <p className="body">
                    An ADU (Accessory Dwelling Unit) refers to a secondary residential unit that is typically added to a single-family residential property. It is also known by other names such as "granny flat," "in-law suite," or "backyard cottage." ADUs are considered additional housing units on a property and are designed to accommodate independent living. They are typically smaller in size compared to the primary dwelling and can be attached or detached from the main house. ADUs can provide additional living space, offer rental income opportunities, or serve as housing for family members or caregivers. ADUs have gained popularity as a means to address housing shortages, increase housing density, and provide flexible living arrangements.
                    <br /><br />
                    Sometimes the space you currently have does not fit your family’s needs. Your family may be growing, or your parents may be moving in, and they want their own, private space. You may also simply want to expand the square footage of your home and start renting to people without giving up your privacy. An accessory dwelling unit, or ADU, is the perfect solution.
                    Accessory dwelling units, or ADUs, are one of the smartest investments you can make as a Austin, Texas homeowner. You might also hear them referred to as granny flats, in-law suites, and casitas. A new ADU can solve many problems while adding value to your property.
                </p><br />
                <div className="sGallery">
                    <img src={gal1} alt="service gallery preview" className="sgalImg" />
                    <img src={gal2} alt="service gallery preview" className="sgalImg" />
                    <img src={gal3} alt="service gallery preview" className="sgalImg" />
                    <img src={gal4} alt="service gallery preview" className="sgalImg" />
                </div>
                <br /><br />
                <button className="btnPrimary" id="adubtn"> <HashLink to="/gallery/Whole Home Remodels/64a596b7cd6d78422904e94c#top">View our ADU Gallery</HashLink>  </button>
            </section>
            <section className="sects">
                <p className="subheading">ADU / GRANNY FLATS</p>
                <h2>Should you build an ADU in Austin, Texas?</h2><br />
                <p className="body">
                    With its beautiful weather and the number of things to do in the area, finding a new home in Austin, Texas can be very difficult and expensive. Growing families require more space, though. You should not have to give up your current property just to find another, bigger space to accommodate your needs. This just brings unnecessary stress into your life. Rather than looking for a new place, why not upgrade the property you already have? An accessory dwelling unit can be the answer. Arise Contractors Group will build the ADU of your dreams. The high demand and low supply for residences in Austin, Texas is a problem for many people. ADUs can be a major opportunity for you to earn some extra income. When you build and rent out a granny flat, you have the option to add a significant new source of income to your wallet. You can spend that money on your mortgage, pay off loans, save up for retirement, or go on a vacation.
                    <br /><br />
                    For multigenerational families, finding a safe place for your parents to stay as they grow old can be especially difficult. You need somewhere close to you, but specifically designed with their safety and abilities in mind. A brand new ADU can be customized for aging in place, and having your parents live nearby is a win for everyone. There is nothing more valuable than their safety, so get a space that is designed for them. A project of this size requires the right people to do it. Converting an existing structure into an ADU may allow you to use the plumbing and electrical that already runs through your house but building a detached ADU requires new plumbing systems or adjustments to your existing system. This takes a skilled hand, and without a great team behind you, your ADU may not last as long as it should. Arise Contractors Group has the tools, skills, and team to make your accessory dwelling unit great. Our design team can take key factors you want and include them in the final design, so your ADU feels like an extension of your existing property. Increase the value of your property and fall back in love with your home! Call us today so we can give you a free consultation.
                </p>
            </section>
            <div className="skitchen sects">
                <img src={skit1} alt="kitchen pics" />
                <img src={skit2} alt="kitchen pics" />
            </div>
            <section className="sects">
                <div className="doublePage">
                    <div className='aduList'>
                        <p className="subheading">ADU / GRANNY FLATS</p>
                        <h3>1. Detached ADUs</h3> <br />
                        <p className="body">
                            <ul>
                                <li>The typical ADU is built in this style, usually in the backyard.</li> 
                                <li>A separate, standalone building, detached ADUs are not physically connected to the main residence in any way. The size is also not limited by the size of the main dwelling, like in attached suites, allowing for more freedom in design.</li>
                                <li>Detached residences also offer the most privacy for everyone on the property. This is perfect for families who want their parents to live close to them or for people looking to start an Airbnb without sacrificing independence and privacy.</li>
                                <li>Existing buildings, such as detached garages, can be easily converted into detached ADUs.</li>
                            </ul>
                            
                        </p>
                    </div>
                    <div className='aduList'>
                        <p className="subheading">ADU / GRANNY FLATS</p>
                        <h3>2. Attached ADUs</h3> <br />
                        <p className="body">
                            <ul>
                                <li>Attached ADUs are similar to building a room addition onto your home, as they are connected to the main residence.</li>
                                <li>The difference between the two is that attached ADUs must be internally isolated from the main residence, with their own entrance, bathroom and kitchen. They could share a wall with your home, but no entrances or windows connect the two spaces.</li>
                                <li>Attached ADUs provide a moderate amount of privacy while still allowing easy access to and from both dwellings, which makes them a great idea for housing elderly parents or if you want to use the ADU as a gym or office.</li>
                                <li>Just keep in mind that their size is limited by the size of the primary dwelling. The structure cannot exceed 50-percent of the total floor area of the primary residence when completed.</li>
                            </ul>
                            
                        </p>   
                    </div>
                </div><br />
                <div className="doublePage">
                    <div className='aduList'>
                        <p className="subheading">ADU / GRANNY FLATS</p>
                        <h3>3. Repurposed existing ADUs</h3> <br />
                        <p className="body">
                            <ul>
                                <li> Repurposed Existing ADUs convert a room or space within the primary residence into an independent living space.</li>
                                <li>Converting your garage, attic, or basement are all options for potential granny flats.</li>
                                <li>These types of accessory dwelling units allow the homeowner to make the most out of their home, repurposing old and unused spaces into new living or working areas.</li>
                                <li>You cannot change the original floor plan of the space when converting it.</li>
                                <li>Repurposed Existing ADUs provide the least amount of privacy but are the most convenient to access Repurposed spaces provide the least amount of privacy but are the most convenient to access.</li>
                                <li>While attached accessory dwelling units are great for families, so are repurposed garages. They allow your parents or loved ones to live under the same roof, even if their privacy is reduced. This option also tends to be the cheapest since you are reusing existing structures.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='aduList'>
                        <p className="subheading">ADU / GRANNY FLATS</p>
                        <h3>Requirements...</h3> <br />
                        <p className="body">
                            <ul>
                                No matter which option you choose, a few requirements must be met.
                                <li>All ADUs must be at least 150 square-feet.</li>
                                <li>All ADUs must be no larger than 1200 square-feet.</li>
                                <li>All ADUs must have a bedroom, bathroom and kitchen area.</li>
                            </ul>                   
                        </p>
                            
                    </div>
                </div>
            </section>
            <section id='adusectLeft' className='sectLeft' style={{marginTop:10}}>
                <img src={remod1} alt="random picture" id="aduleftimg" />
                <div className="sSectTxt" id="adulefttxt">
                    <p className="subheading">FREQUENTLY ASKED QUESTIONS</p>
                    <h3>How much does an ADU cost?</h3>
                    <p className="body">
                    Compared to buying or building a new home, accessory dwelling units cost far less to create. A portion of those costs is made up of fees. Various licenses, taxes, utility fees, building codes, and city-required property upgrades must be taken into account. Permits, especially, can become costly if not handled correctly. All permits have an expiration date; you must apply for a new permit if construction is not completed in time. Inspections are also required every 180 days until completion. Failing an inspection requires you to start the permit process all over again. Expedited permits and after-hours inspections also add additional costs.
                    <br/> <br />
                    Construction costs can rise dramatically with the wrong team handling your project. While some homeowners think hiring an architect is a good idea, the price for doing so is high. Having a separate architect, designer and construction team is virtually guaranteed to cost more than an all-in-one design-build firm such as Arise Contractors Group. Separate teams also mean more opportunity for mistakes and miscommunication that can lead to delays and additional costs
                    </p>
                </div>
            </section>
            <section className='sectRight'>
                <div id='adurighttxt' className="sSectTxt">
                    <p className="subheading">FREQUENTLY ASKED QUESTIONS</p>
                    <h3>Can a casita (or any detached structure) be included as part of my home’s square footage?</h3>
                    <p className="body">
                        The answer is it depends. According to the American National Standard for Single-Family Residential Buildings, any finished areas not connected to the main residence by a finished hallway or stairway must be listed separately. The ceiling must also be a minimum of 7 feet high to be considered “livable space,” and if you have to leave the house to enter the structure, it cannot be included. However, if your casita is attached to the main house and you can enter it from inside, then you may include it.
                            <br/> <br/>
                        Keep in mind the American National Standard Institute’s standards are voluntary, which means anyone not using these standards may include your ADU in your property’s square footage calculation.
                    </p>
                </div>
                <img src={remod2} alt="random picture" id="aduleftimg" />
            </section>
            <section className="sects sSect4">
                <p className="subheading">ADU / GRANNY FLATS</p>
                <h2>Can I build my own ADU?</h2><br />
                <p className="body">
                    The smaller, simpler design of ADUs may lead some homeowners to try to take on the project themselves, going the DIY route. However, it is far more complicated than it sounds.  County requires an Owner-Builder Declaration to get a building permit; this document puts you in charge of enormous liability. It also clears your homeowner’s insurance of covering injuries such as falling off a ladder, potentially leaving you with massive medical bills. Going the DIY route puts others at risk, too. The law considers anyone who helps you on any project that costs more than $500 to be your employee. You will be required to pay for disability insurance, unemployment, have taxes withheld, and register for an EIN on the state and federal level. Also, if you sell your property, future homeowners can hold you liable for injuries and damages that occur due to your construction.
                    <br /><br />
                    This is why having a quality construction company is so important when you are looking to add an ADU to your property. At Arise Contractors Group, we specialize in delivering ADUs quickly and efficiently, so you don’t have to spend extra money on renewing permits or additional inspections. We build all our buildings with high-quality materials and skill while ensuring we keep costs in check and the project within budget. Because ADUs are often standalone structures, they require new foundations, new walls, plumbing, electric, heating and cooling and a separate roof. As such, it’s extremely important to hire a company with significant experience building stand-alone structures like casitas. Arise Contractors Group is one of Austin, Texas’s leading full service remodeling companies. Remember, every project is different, and you should not accept cookie cutter options for any home addition. Call the experts at Arise Contractors Group today.
                </p><br /><br />
                <button className="btnPrimary"> <Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Schedule your consultation</Link>  </button>
            </section>
            <section className="sectNews">
                <img src={news} alt="news" className="newsImg" />
                <div className="newsTxt">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="body" id='p'> Get the latest news and insights from us directly in your inbox!</p>
                    <form action="" className="news">
                        <input placeholder='Enter your email address' type="text" />
                        <button><Link to="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">Subscribe</Link>e</button>
                    </form>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default ADU