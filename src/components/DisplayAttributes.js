import FormElement from "./FormElement";

const DisplayAttributes =(props) =>{
    const attributes=props.stencil.attributes;
 //alert(attributes)
    return (
        <div>
           <h2> Properties of {props.stencil.name}</h2>
            {attributes.map(element => (
               <FormElement element={element}></FormElement>

            ))}
          
        </div>
    )

}
export default DisplayAttributes;