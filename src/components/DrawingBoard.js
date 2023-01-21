//import Grid from '@material-ui/core/Grid';
import { useDrop } from 'react-dnd';

import { Box, Button, Table } from '@chakra-ui/react';
//import MaterialTable from 'material-table';

import { useRef, useState, useEffect } from 'react';
import {FaDatabase} from 'react-icons/fa'

import { ItemTypes } from '../utility/Item';
import StencilsOnBoard from './StencilsOnBoard';
import DisplayAssets from './DisplayAssets';
import AssetsList from './AssetsList';

const DrawingBoard = (props) => {
   localStorage.setItem("assets",JSON.stringify([]))

  const [drawItems,setDrawItems]= useState([])
  const[done,setDone]=useState(false)
  const [assetsList,setAssetsList] =useState([{}])
  
  const canvasRef= useRef(null);
  const contextRef = useRef(null);
  const [isDrawing,setIsDrawing] = useState(false);
  const [show,setShow]= useState(false)

    const[{isOver}, drop] = useDrop(()=> ({
        accept: "stencil",
        collect: monitor => ({
          isOver: !!monitor.isOver(),
          canDrop:!!monitor.canDrop(),
          
        }),
        drop: (item,monitor) => { 
         // alert(item.stencil.name +"  droppped on board ");

           setDrawItems((drawItems) => [...drawItems,item.stencil]);
              
            setDone(true)            
      }
      }))

 const addAssetsToList =(asset) => {
 
  setAssetsList(...assetsList,asset);
  alert("asset added to list "+ JSON.stringify(assetsList))
 }

 

const displayAssets =() => {
   setShow(true);
 
 alert("show"+ show)
  
}




        return(
          <div>
             <h1>Draw your Model </h1>
          
            <Box ref={drop}>
             
            <div className = "cart" style={{
                 height:"300px", width:"800px",
                  border: "2px solid blue"
                }}
                ref={drop}
                > 
             
                {done && drawItems.map(item =><StencilsOnBoard stencil={item}  ></StencilsOnBoard> ) }
                
               
              
             </div>
            </Box> 
            
            <Button onClick={displayAssets}>Display Assets</Button>
                
                  {show & <AssetsList show="true" > </AssetsList>}
            </div>
          )   
      

    }

export default DrawingBoard;