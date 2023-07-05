import '../../gallery/gallery.css'
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
const ProjectList = (props) => {
    const [Project, setProject] = useState([])

    useEffect(() => {
        fetch("https://ariseapi.onrender.com/admin/all_projects")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setProject(data)
        })
        .catch(err => (
            console.log(err, "it has an error")
        ))
    },[])
    const handleClick = () => {
        if(props.projCreate.plist === true){
            props.projCreate.setplist(false)
            props.projCreate.setcreate(true)
        }else{
            props.projCreate.setcreate(true)
        }
    }

    return ( 
        <div className="">
            
            <section className="sects galProjects" >
                <h3>Project showcase</h3>
                <div className="galGrids">
                    <div className="galGrid" onClick={handleClick}>
                        <div style={{borderRadius:20, textAlign:"center",background: '#F2F2F2'}} className="galPics">
                            <p style={{fontSize:70, textAlign:"center", color:'#006AAA'}}>+</p>
                            <h4>Add Project</h4>
                            <p className="lead">Select to upload images and enter project title and description</p>
                        </div>
                        <div className="category" style={{textAlign:'justify'}}>
                            <h4>New Project</h4>
                        </div>
                    </div>
                    {
                        Project.map((proj) => {
                            return <div className="galGrid" key={proj.id}>
                                <img style={{borderRadius:20}} src={proj.thumb} alt="all projects" className="galPics" />
                                <div className="projegory" style={{textAlign:'justify'}}>
                                    <h4>{proj.name}</h4>
                                    <h4 className='delete' onClick={()=>{
                                        Swal.fire({
                                            title: 'Are you sure you want to delete this project',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#d33',
                                            cancelButtonColor: '#3085d6',
                                            confirmButtonText: 'Yes, delete it!'

                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                fetch('https://ariseapi.onrender.com/admin/all_projects/'+proj.id, {method: "DELETE"})
                                                .then(                                                    
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: proj.name+' has been deleted',                    
                                                        confirmButtonText: 'ok'
                                                    }).then ((result)=>{
                                                        if (result.isConfirmed) {
                                                            window.location.reload()
                                                        }                                    
                                                    })                                                  
                                                    
                                                )
                                            }
                                            if (result.isDenied) {
                                                Swal.fire('Changes were not saved', '', 'info')
                                            }
                                        })
                                        /* const co
                                        /* const confirmed = window.confirm('Are you sure you want to delete this project')
                                        if (confirmed){
                                           fetch("https://ariseapi.onrender.com/admin/all_projects/"+proj.id, {method: "DELETE"})
                                            .then( res => {
                                                if(res.status === 200){
                                                    window.location.reload()
                                                }
                                            })
                                            .then(
                                                alert('Project Deleted')
                                            ) 
                                        }else(
                                            window.location.reload()
                                        )*/
                                        
                                        }}  
                                        style={{color:'red',marginLeft:8}} 
                                    >Delete</h4>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
        
    );
}
 
export default ProjectList;