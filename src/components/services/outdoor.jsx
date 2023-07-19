import './service.css'
import banner from '../../img/service/sbanner.png';
import outdoorgal1 from '../../img/service/outgal1.jpg';
import outdoorgal2 from '../../img/service/outgal2.jpg';
import outdoorgal3 from '../../img/service/outgal3.jpg';
import outdoorgal4 from '../../img/service/outgal4.jpg';
import outdouble from '../../img/service/odouble1.jpg';
import outdouble2 from '../../img/service/odouble2.jpg';
import outright from '../../img/service/oright.jpg';
import outleft from '../../img/service/oleft.jpg';
import news from '../../img/home/news.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { HashLink } from 'react-router-hash-link';
const Outdoor = () => {
    return(<div><Nav/>
        <div className="sectStart outdoor">
            <section className='banner'>
                <img src={banner} alt="service banner" />
                <div className="overlay">
                    <div className="sbtxt">
                        <h1>Outdoor Living</h1>
                    </div>
                </div>
            </section>
            <section className="sects sSect1">
                <p className="subheading">OUTDOOR LIVING</p>
                <h2>Outdoor living designs and spaces in Austin Texas</h2><br />
                <p className="body">
                    In Austin Texas, our outdoor space is as much a part of our home as inside the walls. Why not make it part of your personal sanctuary? Austin Texas has gorgeous weather nearly every day of the year, so you want a yard or outdoor area in which to spend all those lovely days and nights. No matter the size of your space, the possibilities are nearly endless.
                    <br /><br />
                    Your outdoor space can be used for dining and recreational activities alongside your house. Not only does it serve as a comfortable living space outside of your house, but it is also a great place to entertain friends and relatives. Are you dying to experience that luxurious outdoor living of your dreams? Dream no more! Arise Contractors Group only designs the best functional outdoor living spaces. From outdoor kitchens to stony fireplaces, pool cabanas to decks and patios, your wish is our command.
                </p><br /><br />
                <div className="sGallery">
                    <img src={outdoorgal1} alt="service bathlery preview" className="sgalImg" />
                    <img src={outdoorgal2} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal3} alt="service gallery preview" className="sgalImg" />
                    <img src={outdoorgal4} alt="service gallery preview" className="sgalImg" />
                </div><br /><br />              
                <button className="btnPrimary" id='outBtn'> <HashLink to="/gallery/Whole Home Remodels#top">View our outdoor living gallery</HashLink> </button>
            </section><br />
            <section className="sects doublePage">
                <div>
                    <p className="subheading">OUTDOOR LIVING</p>
                    <h3>Outdoor deck additions and remodels</h3> <br />
                    <p className="body">If your home has a sloped yard or sits high off the ground, a deck or platform deck is ideal for your outdoor space. A deck is a platform made from either wood or composite materials that extends your living space; adding areas to dine, grill or simply enjoy the outdoors. Adding or updating a deck to your home can be a significant aesthetic upgrade to your outdoor space – one that can add significant value to your home. In fact, a deck addition can add as much as 72 percent of the building costs to your homes value. But it’s not just about a aesthetics and value; a new or improved deck can create more space for entertaining, add additional storage, and help create the desired ambiance in your backyard.
                        <br /><br />
                        We can create that space by extending the deck outward, so that the seating and socializing area is separate from the grill and the entrance back into the house. Many people choose to create decks that step down to a patio. In this case, we can make the steps safer for you and your children by adding lights, sturdy rails and ensuring the steps are smooth and level. Is your deck off the ground by several feet? We can create covered storage underneath for your lawn care equipment or the children’s toys. Beautiful yet practical solutions can turn your deck or patio from an eyesore to the best part of your house.
                    </p>
                </div>
                <div>
                    <p className="subheading">OUTDOOR LIVING</p>
                    <h3>Outdoor kitchen ideas</h3> <br />
                    <p className="body">
                        Outdoor kitchens have exploded in popularity over the last few years. Homeowners want more than grilling capability; they want to have the versatility to cook anything they can in a normal kitchen, just outside. If that sounds like you, an outdoor kitchen can allow you to do just that. They can be equipped with a built in barbecue, full-size refrigerator, stove top, even a brick pizza oven if so desired. It all depends on the style and appearance you want to achieve. It’s important to keep the hot areas (grill or stove), cold areas (refrigerator), wet areas (sink) and dry areas (counter tops) separate yet cohesive in order to make your outdoor kitchen function in top condition.
                        <br /><br />
                        A counter top running along the edge of your deck or patio can allow for food preparation and give more space for serving once the cooking is done. You can also form a U-shape counter, which gives the feel of a bar, and allows for guests to socialize with you, the host, while you cook. If you love the island-style kitchen, you can have that as your preparation or grilling center.
                        The materials used to construct an outdoor kitchen can match the aesthetic of the rest of your house, or you can use a combination of them to create something uniquely your own. These materials should be easy to clean and maintain though; after all, they will be sitting outside. For this reason, you may also want to construct shelter to protect your guests and appliances. Building an open, but covered structure over your outdoor kitchen will allow you to add an over head fan, lighting for night cooking and entertaining, speakers and even flat screen televisions.
                    </p>
                </div>
                
            </section>
            <div className="skitchen sects">
                <img src={outdouble} alt="outdoor pics" />
                <img src={outdouble2} alt="outdoor pics" />
            </div><br />
            <section className="sects">
                <p className="subheading">OUTDOOR LIVING</p>
                <h3>Pools, cabanas and water features</h3><br />
                <p className="body">
                    Having a pool in the Austin Texas climate automatically makes you a popular neighbor. Adding a pool cabana can provide a restroom and changing area for guests, eliminating the trail of wet footprints across your living room floor. It can also function as an additional gathering place if you choose to include a kitchenette and comfortable seating in the cabana. Surround the cabana with colorful flowers and pay close attention to its placement. It should utilize natural shade from trees and be easily accessible for everyone. Or course, there is no sense in having a pool cabana if you don’t have a pool. Arise Contractors Group can help add a truly custom pool to give your outdoor space a resort feel. Already decided to add a pool? While every situation is different, here is what you can expect for the typical pool building process:
                    <br /><br />
                    Design the Pool: We’ll help create a lavish pool design that makes the most of your space.
                    Permitting: Any project of this magnitude will require city and, often, HOA permits and inspections. We will contact utility companies to make sure there are now gas, power or water lines in the area. Our team will handle this for you.
                    Excavation: Large construction equipment – such as a backhoe or excavator – will be used to dig out the area where your future pool will be.
                    Grading: In this step, we’ll level the ground and create any sloping that the design requires.
                    Framing: We’ll frame the walls and floors of your new pool – typically with metal rebar.
                    Plumbing and Electrical: In this step, we’d add the filtration system, plumbing, lighting, and any electrical lines needed for power.
                    Pour the floor and Build the Walls: Concrete is poured, smoothed and graded to create the floor and walls of your pool.
                    Finishing: The walls, floor and pool deck area are finished with the materials that your chosen. Fill the pool and enjoy!
                    <br /><br />
                    Pools aren’t the only way to bring water into your yard. A water feature, such as a stream, pond or even a waterfall can be a great way to add the beauty and tranquility of running water. Adding something as simple like a bird bath is a pretty straight forward DIY project, but a large and complex water feature may require permits, careful planning and excavation. The experts at Arise Contractors Group handle all the planning and execution leaving you to enjoy your new pool or water feature.
                </p>
            </section>
            <section className='sectRight'>
                <div className="sSectTxt">
                    <p className="subheading">OUTDOOR LIVING</p>
                    <h3>Xeriscape Vs. Landscape</h3>
                    <p className="body">                        
                        In Austin, Texas, where water conservation is crucial due to the occasional drought conditions, consider transforming your yard into a xeriscaped oasis. Xeriscaping, also known as drought-tolerant landscaping, reduces the need for excessive watering and aligns with the natural beauty of the area. By thoughtfully selecting and placing plants, water usage is significantly reduced, and careful planning is required. Observe the water drainage patterns and microclimates in your yard to determine optimal planting locations. While grass can still be incorporated, it's important to irrigate efficiently and opt for native grass species. Alternatively, rock landscaping offers a water-wise option, blending seamlessly with the Texas landscape. Add desert plants like cacti to harmonize with the surrounding scenery and create a stunning and sustainable outdoor space.
                            <br /><br />
                        Incorporating xeriscaping principles not only helps conserve water but also complements Austin's unique aesthetics. Embrace the rugged beauty of Texas with rock landscapes and stone paths, creating drought-resistant mini-ecosystems in areas with natural shade and wind cover. Utilize local flora that thrives in the region's climate to enhance the allure of your yard while contributing to the preservation of precious water resources. Embracing xeriscaping not only aligns with Austin's sustainability efforts but also adds a touch of natural charm, making your yard a beautiful and eco-friendly sanctuary in the heart of Texas.
                    </p>
                </div>
                <img src={outright} alt="Outdoor Living" />               
            </section>
            <section className='sectLeft'>
                <img src={outleft} alt="Outdoor Living" />
                <div className="sSectTxt">
                    <p className="subheading">OUTDOOR LIVING</p>
                    <h3>Fireplace vs firepit</h3>
                    <p className="body">
                        A fireplace or fire pit is the perfect finishing touch to your outdoor renovations. Stone can be stacked to create a rustic chimney, or a pit can be surrounded by brick; either one provides a warm setting for socializing or relaxing. The biggest things to think about that can impact the scope of adding a fireplace or fire pit, is whether or not you want to them to be wood burning or gas. A gas fireplace or pit is much more convenient, allowing for ambiance with the flip of a switch, but does require the installation of gas lines. This may require connection to the main gas line at the street level. 
                        <br /><br />
                        While wood burning fireplaces may be less expensive, they are not allowed in all areas and you can’t use them on ‘no burn’ days. If you have young children, a gate or barrier can be constructed to prevent them accidentally burning themselves or starting a fire without an adult present.
                        As you can see, the possibilities for updating your outdoor space are practically endless. Let the outdoor design experts at Arise Contractors Group take your yard to the next level. Schedule a free consultation and see what we can do for you
                    </p>
                </div>
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
            </section></div><Footer/>
        </div>        
    )

}

export default Outdoor