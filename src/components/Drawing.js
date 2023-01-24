import Stencils from './Stencils';
import DrawingBoard from './DrawingBoard';

import { ChakraProvider, Flex } from '@chakra-ui/react'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const Drawing = () => {
    return(
        <div>
            <ChakraProvider>
             <DndProvider backend={HTML5Backend}>
            <Flex>
                 <Stencils ></Stencils>
                 <DrawingBoard>  </DrawingBoard>
           </Flex>
           </DndProvider>
          </ChakraProvider>
        </div>
    )

}

export default Drawing;