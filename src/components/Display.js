import React from 'react'
import {useDrag} from 'react-dnd'
import * as FontAwesome from 'react-icons/fa'
import {Box,Badge,Card, CardBody, Text, Flex, Spacer} from '@chakra-ui/react'

const Display = (props) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "stencil",
        item: {
         
         
          stencil: props.stencil
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging()
        })
      }));
  
   const icon= props.stencil.icon;
   
   return (
         <Box id="dragStencil"  ref={drag}  style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 10,
            fontWeight: '',
            color:isDragging ?'blue':'black',
            backgroundColor:'lightslategray',
            cursor: 'move',
          }}>
          <Flex minWidth='-webkit-max-content' alignItems='left' gap='1' direction='row'>
        <Card id={props.stencil.name} color="black" bgColor="AntiqueWhite" size="md"> 
        <CardBody> 
            <Badge> {React.createElement(FontAwesome[icon])}</Badge>
            <Text>{props.stencil.name}</Text>
        </CardBody>
         </Card> 
         <Spacer></Spacer>
         </Flex> 
      </Box>

   );
};
export default Display;