import CategoryList from "./categoryList";
import CategoryCreate from "./creatCategory";
/* import Catedit from './catedit' */
import { useState } from "react";
const Category = () => {
    const [List, setList] = useState(true)
    const [Create, setCreate] = useState(false)
    const [catEdit, setcatEdit] = useState(false);
    const [Id, setId] = useState('')
    const propsData = {
        setlist:setList,
        create:Create,
        setcreate:setCreate,
        list:List,
        catedit:catEdit,
        setcatedit:setcatEdit
    }
    const idformChild = (data)=>{
        setId(data); 
        console.log(Id)
    }
    return ( 
        <div>
            {List && <CategoryList onData={idformChild} createCat={{setlist:setList, list:List, setcreate:setCreate}} 
            edit={propsData}/>}
                
            {Create&& <CategoryCreate/>}
            {/* {catEdit&&<Catedit id={Id}/> }  */}
        </div>
    );
}
 
export default Category;