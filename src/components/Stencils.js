

import { useEffect,useState } from "react";
import StencilsIcon from "../utility/StencilsIcon";
import Display from './Display';
import DisplayStencils from "./DisplayStencils";


const Stencils= () => {
    const [myStencils,setMyStencils] = useState([]);
    const [isReady,setIsReady] = useState(false);


const fetchStencils = ( ) => {
    fetch("https://k3qp4wwacb.execute-api.us-west-2.amazonaws.com/dev/components")
       .then(response=> response.json())
       .then(data => {setMyStencils(StencilsIcon(data.body));
      
       setIsReady(true);
       })
       .catch(console.log("Error while getting data"))


}



    useEffect(fetchStencils,[]);
       
    




 return(
    isReady?
    <div>
        
        {myStencils.length > 0 && (
          <ul>
          {myStencils.map((stencil,index )=>   (
           
           <Display stencil={stencil} index={index}></Display>
          ))}
      </ul>
      )}
    
        
       
        
    </div> :<h2>Loading Stencils .... please wait  </h2>

    //
 ) 
    
}

export default Stencils;