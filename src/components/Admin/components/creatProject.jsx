import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const CreateProj = (props) => {
    const [Value, setValue] = useState('')
    const [file, setFile] = useState();
    const [category, setcategory] = useState([])
    const [catname, setcatname]=useState('')
    const handleUpload = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    
    useEffect(()=>{
        fetch("https://ariseapi.onrender.com/admin/category")
        .then(res => {
          return res.json()
        })
        .then(data => {
            console.log(data.name)
            setcategory(data)
        })
        .catch(err => (
            console.log(err, "it has an error")
        ))
    },[])
    const handleSubmit = (e) => {
       /*  e.preventDefault(true); */
        const form = e.target
        console.log(form)
        const formData = new FormData(form);
        /* formData.append("pictures", file);
        formData.append("name", Value);
        formData.append("category", catname); */
        fetch("https://ariseapi.onrender.com/admin/all_projects", {
            method: "POST",
            body: formData,
          })
            .then((res) => {
                if(res.status === 200){
                    Swal.fire({
                        title: 'Gallery created',
                        icon: 'success',
                        confirmButtonText: 'Confirm',
                    }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.reload()
                        }
                    })
                }
                if(res.status === 500){
                    Swal.fire({
                        title: '500 Server Error',
                        text:'individual file size must not exceed 5MB',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: 'red',
                    }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.reload()
                        }
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: error ,
                    text: 'Individual file size must not exceed 5MB', 
                    icon: 'error',
                    confirmButtonText: 'ok',
                    confirmButtonColor: 'red',
                }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload()
                    }
                })
            });

    }

    return (
        <> 
          
            <div className="sectStart">
                <div className="sects">
                    
                    <div className="createForm">
                        <h2>Create a New Project</h2>
                        <form action="" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <label htmlFor="name">Enter Project Name</label>
                            <input className="name" type="text" required name="name" value={ Value} onChange={(e) => setValue(e.target.value)} />
                            <br /><br />
                            <label htmlFor="category">Select Project Gallery</label>
                            <p style={{color:'orange'}}>Individual file size must not exceed 5MB</p>
                            <select name="category" id="" onChange={(e)=>{setcatname(e.target.value)}}>
                                <option>
                                    please select gallery name
                                </option>
                                {
                                    category.map((cat,index)=>{
                                        return<option key={index}>{cat.name}</option>
                                    })
                                }
                            </select><br /><br />
                            <label htmlFor="pictures">Select Project Images</label>
                            <input type="file" required name="pictures" onChange={handleUpload} alt="thumbnail upload" multiple />
                            <br /><br /><br />
                            <input type="submit" className="upload" value="Create" />
                        </form>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}
 
export default CreateProj;