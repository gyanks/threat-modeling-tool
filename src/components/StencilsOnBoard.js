import React, { Children } from 'react'
import { useState } from 'react'
import {useDrag} from 'react-dnd'
import {IconContext} from 'react-icons'
import * as FontAwesome from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { FaRegCircle } from 'react-icons/fa'
import { FaRegHandPeace } from 'react-icons/fa'
import Draggable from 'react-draggable'

import DisplayAttributes from './DisplayAttributes'
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Button,
} from '@chakra-ui/react'

import { Box,HStack, VStack,Container,Badge,Flex,Spacer} from '@chakra-ui/react'
import StencilsProperties from './StencilsProperties'
const StencilsOnBoard= (props) => {

  const [assetName,setAssetName] = useState();
  const [assetList,setAssetList] = useState();
  const [assetId,setAssetId] = useState(1);

const addAssetToList =() =>{

  const newAsset={
    id: assetId,
    assetName:assetName,
    assetType:props.stencil.name,
    assetAttributes:props.stencil.attributes,
    assetProperties:props.stencil.properties
  }
  const localList= JSON.parse(localStorage.getItem("assets"));
  const assetsList= [...localList,newAsset]
  const newId= assetId +1;
  setAssetId(newId)
  localStorage.setItem("assets",JSON.stringify(assetsList));

}

const saveAssets =() => {
  localStorage("assets",assetList);
  props.setSave(true);
  alert("All assets successfully saved ");
}


return(

    <Box>
        <IconContext.Provider value={{color: 'navy', size: 50}}>
         <Draggable>
       <div> 
       

       <Button leftIcon={ React.createElement(FontAwesome[props.stencil.icon])} onClick={addAssetToList}></Button>
        <Editable defaultValue={props.stencil.name} size="sm" onChange={setAssetName}>
        <EditablePreview />
         <EditableInput />
        </Editable>
       </div>
       </Draggable>
    
      </IconContext.Provider>
     
     
        </Box>
        
   
   
)
 
}
// <DisplayAttributes stencil={props.stencil}></DisplayAttributes>
 /*<div style={mouseState.styles}
onMouseDown={beginDragging}
 onMouseUp= { dragging} 
 onMouseMove= { endDragging}> 
*/
export default StencilsOnBoard;