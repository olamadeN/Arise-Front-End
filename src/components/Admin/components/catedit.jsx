import { useEffect, useState } from "react";
const CatEdit = (props) => {
  const[name, setname] = useState('')
  const id = props.id
  console.log(id)
  useEffect(()=>{
    fetch("https://ariseapi.onrender.com/admin/category/"+ id)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        });
  })
  return ( 
    <div>
        <h3>This is the edit page for categories--{id}</h3>
        
    </div>
  );
}
 
export default CatEdit;