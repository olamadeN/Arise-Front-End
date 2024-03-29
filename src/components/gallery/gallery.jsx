import './gallery.css'
import banner from '../../img/gallery/Gbanner.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
const Gallery = () => {
    const [Category, setCategory] = useState([])

    useEffect(() => {
        /* fetch("http://127.0.0.1:5001/arise-backend/us-central1/app/admin/category") */
        fetch("https://ariseapi.onrender.com/admin/category")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setCategory(data)
        })
        .catch(err => (
            console.log(err, "it has an error")
        ))
    },[])
        
    return(
        <div>
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
                <section className="sects" id='galSects'>
                    <div className="galGrids">
                        {
                            Category.map((cat) => {
                                return <div className="galGrid">
                                    <img src={cat.thumb} alt="whole home category" className="CatPics" />
                                    <div className="category">
                                        <HashLink to={`/gallery/${cat.name}#top`}><h4>{cat.name}</h4></HashLink>
                                        
                                        <HashLink to={`/gallery/${cat.name}#top`}><button className="btnPrimary">Explore</button></HashLink>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </section>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery