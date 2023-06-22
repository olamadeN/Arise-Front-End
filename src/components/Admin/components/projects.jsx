import ProjectList from "./projectList";
import ProjectCreate from "./creatProject";
/* import Projedit from './projedit' */
import { useState } from "react";
const Project = () => {
    const [pList, setpList] = useState(true)
    const [Create, setCreate] = useState(false)
/*     const [projEdit, setprojEdit] = useState(false); */
    return ( 
        <div>
            {pList&&<ProjectList projCreate={{plist:pList,setplist:setpList,setcreate:setCreate}}/>}
                
            {Create&& <ProjectCreate/>}
{/*             {projEdit&&<Projedit/>} */}
        </div>
    );
}
 
export default Project;