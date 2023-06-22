import '../../gallery/gallery.css'
import './admin.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'

const Category = (props) => {
    const [Category, setCategory] = useState([])
    useEffect(() => {
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
    const handleClick = () => {
        if(props.createCat.list===true){
            props.createCat.setlist(false);
            props.createCat.setcreate(true)
        }else{
            props.createCat.setCreate(true)
        }
    }

    return ( 
        <>
            <section className="sects galProjects">
                <h2>Gallery Showcase</h2>
                <div className="galGrids" style={{overflow:'scroll', scrollbarWidth:4}}>
                    <div className="galGrid" onClick={handleClick}>
                        <div style={{borderRadius:20, textAlign:"center",background: '#F2F2F2'}} className="galPics">
                            <p style={{fontSize:70, textAlign:"center", color:'#006AAA'}}>+</p>
                            <h4 >Add New Gallery</h4>
                            <p className="lead">Select to upload images and enter gallery title</p>
                        </div>
                        <div className="category" style={{textAlign:'justify'}}>
                            <Link><h4 id='addNew'>New Gallery</h4></Link>
                        </div>
                    </div>
                    {
                        Category.map((cat) => {
                            return <div className="galGrid" key={cat.id}>
                                <img style={{borderRadius:20}} src={cat.thumb} alt="whole home category" className="galPics" />
                                <div className="category" style={{textAlign:'justify'}}>
                                    <Link to={`/gallery/${cat.name}`}><h4>{cat.name}</h4></Link>
                                    
                                {/*<h4 
                                    onClick={()=>{
                                        const id = cat.id
                                        props.onData(id)
                                        if(props.edit.list === true){
                                            props.edit.setlist(false)
                                            props.edit.setcatedit(true)
                                        }else{
                                            props.edit.setcatedit(true)
                                        }
                                    }} 
                                    style={{color:'green'}}>Edit</h4> 
                                */}
                                    <h4 className='delete' onClick={()=>{
                                        Swal.fire({
                                            title: 'This action will also delete all projects associated with this gallery',
                                            text:'Are you sure you want to complete this action?',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'

                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                fetch("https://ariseapi.onrender.com/admin/category/"+cat.id, {method: "DELETE"})
                                                .then( res => {
                                                    if(res.status === 200){
                                                        window.location.reload()
                                                    }
                                                })
                                                .then(
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: cat.name+' has been deleted',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                )
                                            }
                                            if (result.isDenied) {
                                                Swal.fire('Changes were not saved', '', 'info')
                                            }
                                        })
                                        /* const confirmed = window.confirm('This action will also delete all projects associated with this gallery')
                                        if (confirmed){
                                           fetch("https://ariseapi.onrender.com/admin/category/"+cat.id, {method: "DELETE"})
                                            .then( res => {
                                                if(res.status === 200){
                                                    window.location.reload()
                                                }
                                            })
                                            .then(
                                                alert('Gallery Deleted')
                                            ) 
                                        }else(
                                            window.location.reload()
                                        ) */
                                        
                                    }} 
                                    style={{color:'red',marginLeft:8, marginTop:1}} 
                                    >Delete</h4>
                                </div>
                            </div>
                        })
                    }
                    <p style={{opacity:0}}>section end</p> <br />
                </div>
            </section> <br />
            <p style={{opacity:0}}>section end</p>
        </>
        
    );
}
 
export default Category;
