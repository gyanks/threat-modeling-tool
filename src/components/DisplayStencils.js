import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
//import {Card, CardActions, CardContent} from '@material-ui/core'
import { useDrag } from 'react-dnd'

import ChildStencils from './ChildStencils';
import {ItemTypes} from '../utility/Item'


const DisplayStencils = (props) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "stencil",
        item: {
         
          id: props.stencil.Id,
          stencil: props.stencil
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging()
        })
      }))
const stencilClickHandler= (e) =>{
    alert(e.target.name +"Dragged now ")
}

return(
   <div >
    
      
    
   
     <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
         defaultExpandIcon={<ChevronRightIcon />}
         sx={{ height: 100, flexGrow: 1, maxWidth: 150 , overflowY: 'auto'}}
    >
        
  <TreeItem nodeId={props.stencil.name} label={props.stencil.name}>
  <div ref={drag} style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'move',
      }}>

    <ChildStencils  elements={props.stencil.elements}
    
    ></ChildStencils>
    </div>
  </TreeItem>

</TreeView>
</div>

  
);


};

export default DisplayStencils;