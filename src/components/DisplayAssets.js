const DisplayAssets =(props) => {
 console.log("display "+ props.asset.assetsName)
return (
    <div>
        <tbody>
        <tr id={props.index}>
            <td> {props.index}</td>
            <td> {props.asset.assetsName}</td>
            <td> {props.asset.assetType}</td>
            <td> {props.asset.assetProperties}</td>
        </tr>
        </tbody>
    </div>
)
};

export default DisplayAssets;