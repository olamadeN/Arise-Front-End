import { useEffect, useState } from "react";
import { Buffer } from "buffer";
const Projecttest = () => {
    const [projs, setProjs] = useState([])

/*     const onSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/admin/all_projects")
        .then(res => {
          return res.json();
        })
        .then(data => {
          setUsers(data);
        })
        .catch(err => (
            console.log(err, "it has an error")
        ))
    } */
    const onSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/admin/all_projects")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProjs(data)
        })
        .catch(err => {
            console.log(err, 'there is an error')
        })
    }
    return (
        <div>
            <h2>this is the sand box</h2>
            <form action="http://localhost:5000/admin/project_upload"encType="multipart/form-data" method="post">
                <input name="name" type="text" placeholder="enter your name here" /> <br />
                <select name="category" id="">
                    <option value="">jhjhjhj</option>
                </select><br /><br />
               <input type="file" class="form-control-file" name="thumb"/> <br /><br />
                <input type="file" class="form-control-file" name="pictures" multiple/> <br /><br />
                <input type="submit" value="upload" class="btn btn-default" />            
            </form>
            <form action="http://localhost:5000/admin/all_projects" method="get">
                <input type="submit" onClick={onSubmit} value="Get project" class="btn btn-default" />
            </form>
            {projs.map((proj) => { 
                
                return <div key={proj._id}>
                    <img src={proj.thumb} width={800} alt="" />
                        
                        
                    <p>{proj.name}</p>
                    <p>{proj._id}</p>
                </div>                
            })}
        </div>
    )       
}

export default Projecttest