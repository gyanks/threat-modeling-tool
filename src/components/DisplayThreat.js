const DisplayThreat = (props) => {

return(

    <div>
    <tbody>
    <tr id={props.index}>
        <td> {props.index}</td>
        <td> {props.threat.threatName}</td>
        <td> {props.threat.assetName}</td>
        <td> {props.threat.property}</td>
    </tr>
    </tbody>
</div>
)
}

export default DisplayThreat;