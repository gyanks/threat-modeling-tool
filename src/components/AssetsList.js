import * as React from 'react';
import {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const AssetsList = (props) => {

const [projectAssets,setProjectAssets] = useState([]);
  
const project=localStorage.getItem("projectName");
/*
const url= "https://k3qp4wwacb.execute-api.us-west-2.amazonaws.com/dev/assets/"+project;

useEffect(() =>{
  fetch(url).then(response => response.json())
  .then(data => setProjectAssets(data))
  .catch(error=> console.log("Error while featching assets from Database "+ error))


},[])

  */  

    

const columns =[
  { field: 'id', headerName: 'AssetID', width: 70 },
  { field: 'assetName', headerName: 'Asset Name', width: 130 },
  { field: 'assetType', headerName: 'Asset Type', width: 130 },
  { field: 'assetProperties', headerName: 'Security Property', width: 130 },
];

const assetsList= JSON.parse(localStorage.getItem("myAssets")).assets;
//const assetsList= projectAssets.assets;
//alert(" Assets List "+ JSON.stringify(assetsList))
const rows= assetsList.map((asset,index)=>{
        
     const row= {

               "id":index ,
               "assetName":asset.assetName,
               "assetType":asset.assetType,
               "assetProperties": asset.assetProperties.toString() 

        }
        return row;
       })




//alert(JSON.stringify(rows))
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
};

export default AssetsList;