import { HashLink } from 'react-router-hash-link';
const PageNotFound = () => {
    return ( 
        <div className="sects" style={{textAlign:"center"}}>
            <h1>404</h1>
            <h2 className="body">Page not found</h2>
            <HashLink style={{color:"blue"}} to="/">Click here to go to Arise Contractors Home page</HashLink>
        </div>
     );
}
 
export default PageNotFound;