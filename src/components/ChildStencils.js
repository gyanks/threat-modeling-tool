import TreeItem from '@mui/lab/TreeItem';
const ChildStencils= (props) => {
return (

    <div>
        {props.elements.map(element => (
         <TreeItem  nodeId={element} label={element}></TreeItem>
        ))}
    </div>
)

}
export default ChildStencils;
