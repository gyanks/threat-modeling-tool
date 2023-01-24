//import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useDrop } from 'react-dnd';

import { Box, Button, Table } from '@chakra-ui/react';
//import MaterialTable from 'material-table';

import { useRef, useState, useEffect } from 'react';
import {FaDatabase} from 'react-icons/fa'

import { ItemTypes } from '../utility/Item';
import StencilsOnBoard from './StencilsOnBoard';
import DisplayAssets from './DisplayAssets';
import AssetsList from './AssetsList';
import findProjectThreats from '../service/ThreatService';

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

 



const saveAssets = () => {

      const projectName= window.prompt("Enter Project Name");
      const assetsList= JSON.parse(localStorage.getItem("assets"))
      const projectAssets={
                            "projectName":projectName,
                          "assets":assetsList 
                          
                          };
      console.log("Saving project "+ JSON.stringify(projectAssets))
      const url="https://k3qp4wwacb.execute-api.us-west-2.amazonaws.com/dev/assets";

            fetch(url ,{
              headers:{
                'Content-Type' :"application/json"
              },
              mode:"no-cors",
              method: "POST",
                body: JSON.stringify(projectAssets)
                }
            ).then(res => res.json())
            .then(data => console.log("save successfully "+ JSON.stringify(data)))
            .catch( err=> console.log ("There is error while saving project assets  "+ err))
      // finding all threats 

      const allThreats= findProjectThreats(projectAssets);
      const projectThreats= {
                        "projectName": projectName,
                          "threats" :allThreats
                        }

      
      // saving threats to threatDb 
      const threatUrl="https://k3qp4wwacb.execute-api.us-west-2.amazonaws.com/dev/threats"
              fetch(threatUrl, {
                headers:{
                  'Content-Type' :"application/json"
                },
                mode:"no-cors",
                method: "POST",
                  body: JSON.stringify(projectThreats)
                  })
                  .then( response => response.json())
                  .then(data => console.log ("Threats saved successfully to Database "+ JSON.stringify(data)))
                  .catch(error => console.log("Error while saving threats in database "+ error))
                /*
                  const  assets1= assetsList.map(asset =>  {
                         return {
                          "id":asset.id,
                          "assetName":asset.assetName,
                          "assetType":asset.assetType,
                          "assetProperty":asset.assetProperty.toString()
                        }
                     }) 
                     alert(" Converted assets "+JSON.stringify(assets1))
                     */
                 // save in local storage 
                  console.log ("Threats for all assets "+ JSON.stringify(projectThreats))
                  localStorage.setItem("projectName",projectName);
                  localStorage.setItem("myAssets", JSON.stringify(projectAssets))
                  localStorage.setItem("threats",JSON.stringify(projectThreats))
        
                  alert("Assets saved successfully in database ")
        setShow(true)
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
            
            <Button onClick={saveAssets}>Save Project </Button>
             <Link  to="report"> View Report</Link> 
                  
            </div>
          )   
      

    }

export default DrawingBoard;