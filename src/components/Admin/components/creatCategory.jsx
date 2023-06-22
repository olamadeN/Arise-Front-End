import { useState } from "react";
import './admin.css'
import Swal from 'sweetalert2'
const CreateCat = (props) => {
    const [Value, setValue] = useState('')
    const [file, setFile] = useState();
    const handleUpload = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    const handleSubmit = async (e) => {
        /* e.preventDefault(true); */
        try {
             const formData = new FormData();
            formData.append("thumb", file);
            formData.append("name", Value);
            fetch("https://ariseapi.onrender.com/admin/category", {
                method: "POST",
                body: formData,
            })
            .then((res)=>{
                console.log(res)
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
                        title: '500 server error',
                        text:'Gallery not created',
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
        } catch (error) {
            Swal.fire({
                title: error,
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: 'red',
            }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload()
                }
            })
        }
    }

    return ( 
        <>
            
            <div className="sectStart">
                <div className="sects">
                    
                    <div className="createForm">
                        <h2>Create a New Project Gallery</h2>
                        <form  method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <label htmlFor="name">Enter Gallery Name</label>
                            <input placeholder="Enter Gallery Name" type="text" className="name" required name="name" value={ Value} onChange={(e) => setValue(e.target.value)} /> <br />
                            {/* <img src={file} width={150} alt="" /><br /> */}
                            <label htmlFor="thumb">Select Gallery Thumbnail</label>
                            <input type="file" required name="thumb" onChange={handleUpload} alt="thumbnail upload"/>
                            <br /><br />
                            <input type="submit" className="upload" value="Upload" />
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
 
export default CreateCat;