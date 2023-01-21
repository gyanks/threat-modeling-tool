import DisplayAssets from "./DisplayAssets";
const AssetsList = (props) => {
  alert("Inside assets list ")
  const assetsList=JSON.parse(localStorage.getItem("assets"));
  console.log("assets list from local storage "+ JSON.stringify(assetsList));
    return(
        <div>
          <table>
            <thead>
            <tr>
              <th>Asset No</th>
              <th>Asset Name</th>
              <th> Asset Type</th>
              <th> Security Properties </th>
            </tr>
            </thead>
            { assetsList.map((asset,index)=>(
        <DisplayAssets asset={asset} index={index}></DisplayAssets>
      ))}
          </table>
        </div>
      )

};

export default AssetsList;