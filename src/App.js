
import './App.css';
import Stencils from './components/Stencils';
import DrawingBoard from './components/DrawingBoard';

import { ChakraProvider, Flex } from '@chakra-ui/react'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import StencilsProperties from './components/StencilsProperties';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
       <DndProvider backend={HTML5Backend}>
        <Flex>
          <Stencils ></Stencils>
          <DrawingBoard>  </DrawingBoard>
        
           </Flex>
       
       </DndProvider>
       </ChakraProvider>
    </div>
  );
}

export default App;
