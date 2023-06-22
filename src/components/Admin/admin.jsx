import banner from '../../img/service/sbanner.png';
import Project from './components/projects'
import Category from './components/category'
import Nav from './components/adminNav'
import Mainav from '../Ui/nav/nav';
import { useState } from "react";



const Admin = () => {
    const [catCreate, setcatCreate] = useState(true);
    const [projCreate, setprojCreate] = useState(false);
    
    

    return ( 
        <>
            <Mainav/>
            <div className="sectStart">
                <section className='banner'>
                    <img src={banner} alt="service banner" />
                    <div className="overlay">
                        <div className="sbtxt">
                            <h1>Admin Dashboard</h1>
                        </div>
                    </div>
                </section>
                <Nav create={{setCat:setcatCreate,proj:projCreate,setProj:setprojCreate}} projectcreate={{cat:catCreate,setCat:setcatCreate,setProj:setprojCreate}}/>
                {projCreate&&<Project/>}
                {catCreate&&<Category/> }     
                
                    
            </div>
        </>
        
    );
}
 
export default Admin;