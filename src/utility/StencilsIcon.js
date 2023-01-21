import {FaDatabase} from 'react-icons/fa'

const StencilsIcon = (stencils) => {

 const iconStencils=stencils.map( (item) => { 
      const icon=findIconForStencil(item)
   // alert(icon);
    return { ...item,'icon':icon}} )
    
return iconStencils;
 }    
     
const findIconForStencil= (item) => {

     switch(item.name){

        case 'Data Flow':
           return 'FaArrowRight'
           break;
        case 'Data Storage':
            return 'FaDatabase'
            break;
        case 'External Source':
            return 'FaMale'
            break;
        case 'Process' :
            return 'FaRegCircle'
            break;
        default:
            return 'FaRegHandPeace'

     }

}



export default StencilsIcon;
