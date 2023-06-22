import './gallery.css'
import banner from '../../img/gallery/Gbanner.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import news from '../../img/home/news.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const GalleryProjects = () => {
    const [Project, setProject] = useState([])
    const [id, setid] = useState({data:""})
    const {category} = useParams()
    useEffect(() => {
        fetch("https://ariseapi.onrender.com/admin/all_projects/"+ category)
        .then(res => {
          return res.json()
        })
        .then(data => {
            console.log(data)
          setProject(data)
        })
        .catch(err => (
            console.log(err, "it has an error")
        ))
    },[])
    return(
        <>
            <Nav/>
            <div className="sectStart">
            
                <section className='banner'>
                    <img src={banner} alt="gallery banner" />
                    <div className="overlay">
                        <div className="sbtxt">
                            <h1>Our Gallery</h1>
                        </div>
                    </div>
                </section>
                <section className="sects galProjects">
                    <Link to='/gallery' className='back' > <p className="goBack">GO BACK</p></Link>
                    <h2 className='projectName' >{category}</h2>
                    <div className="galGrids">
                        {
                            Project.map((proj) => {
                                return <div className="galGrid" key={proj.id}>
                                    <img src={proj.thumb} alt="whole home category" className="galPics" />
                                    <div className="category">
                                        <Link to={`/gallery/${proj.category}/${proj.id}`}><h4>{proj.name}</h4></Link>
                                        
                                        <Link to={`/gallery/${proj.category}/${proj.id}`}><button className="btnPrimary">View</button></Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </section>
                <section className="sectNews" id='g'> 
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
            </div>
            <Footer/>

        </>
        
    )
}

export default GalleryProjects