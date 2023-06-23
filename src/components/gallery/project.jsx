import './gallery.css'
import banner from '../../img/gallery/Gbanner.png';
import Nav from "../Ui/nav/nav";
import Footer from "../Ui/footer/footer"
import news from '../../img/home/news.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const Project = () => {
    const [Project, setProject] = useState([])
    const [Data, setData] = useState([])
    const {_id,category} = useParams()
    useEffect(() => {
        fetch("https://ariseapi.onrender.com/admin/all_projects/"+category+"/"+ _id)
        .then(res => {
          return res.json()
        })
        .then(data => {
            setData(data)
          setProject(data.pictures)
          console.log(data)
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
                <section className="sects galProject">
                    <Link to={`/gallery/${Data.category}`} className='back' > <p className="goBack">GO BACK</p></Link>
                    <h2 className='projectName' >{Data.name}</h2>
                    <div className="galGrids">
                    {Project.map((proj,index)=>{
                        return <div className="galGrid">
                                <img src={proj.url} alt={`Image ${index + 1}`} key={index} className="galPics" />
                            </div>
                        })
                        }
                    </div>
                </section>
            </div>
            <Footer/>
        </>
        
    )
}

export default Project