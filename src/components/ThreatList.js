import DisplayThreat from "./DisplayThreat";

import * as React from 'react';
import { getRowIdFromRowModel } from "@mui/x-data-grid/hooks/features/rows/gridRowsUtils";

import { DataGrid } from '@mui/x-data-grid';

const ThreatList = () => {
    const threatList= JSON.parse(localStorage.getItem("threats")).threats;

    const columns =[
      { field: 'id', headerName: 'ThreatID', width: 70 },
      { field: 'threatName', headerName: 'Threat Name', width: 130 },
      { field: 'assetName', headerName: 'Asset Name', width: 130 },
      { field: 'property', headerName: 'Security Property', width: 130 },
    ];
      let rows= [];
      let id=1;
      let row= {};
       for (let count=0; count <threatList.length; count ++){

          for(let i=0; i<threatList[count].length; i ++){

        //const row= threatList[count].map((assetThreat)=> {

          row= {
               "id": id,
               "threatName": threatList[count][i].threatName,
               "assetName": threatList[count][i].assetName,
               "property": threatList[count][i].property

                }
             
          }
          rows.push(row)
          id++;
     }
       
   // alert(" Rows  "+ JSON.stringify(rows))

    return(
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        
      />
    </div>
      )



}

export default ThreatList;