const FormElement= (props) => {
   // alert("form element"+ props.element)
  return (
    <div>
        <form>
        <label> {props.element}</label> 
        <input type="text"> </input>
        </form>
    </div>
  )


}
export default FormElement;