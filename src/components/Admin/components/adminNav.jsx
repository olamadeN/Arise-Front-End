import './adminNav.css';



const Nav = (props) => {
    const CatCreateClick = () => {
      if(props.create.proj===true){
        props.create.setProj(false);
        props.create.setCat(true)
      }else{
        props.create.setCat(true)
      }
      
    }
    const projCreateClick = () => {
      if(props.projectcreate.cat===true){
        props.projectcreate.setCat(false);
        props.projectcreate.setProj(true)
      }else{
        props.projectcreate.setProj(true)
      }
    }    
    const handleLogout = () =>{
      localStorage.removeItem('token');
      fetch("https://ariseapi.onrender.com/admin/logout", {method: "GET"})
      .then(window.location.reload())
     
    }
    return (
        <div className="App">
          <nav className="Anavbar">  
            <div className="Alinks">
              <li onClick={CatCreateClick}  className="AnavLink">Gallery</li>
              <li onClick={projCreateClick} className="AnavLink">Projects</li>
              <div className="AnavBtn" style={{ cursor:'pointer'}} onClick={handleLogout}>Log Out</div>
            </div>
            
          </nav>        
        </div>
    );
};
export default Nav