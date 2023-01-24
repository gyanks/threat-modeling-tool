const findProjectThreats =(projectAssets) => {

 return  projectAssets.assets.map((asset)=>{
                      
                   const properties= asset.assetProperties;
                   const assetName=asset.assetName;
                 
            
                 return properties.map(property => {
                    //console.log(property +" of assets"+ assetName)
                 
                    switch (property){
                    
                    case 'Confidentiality' :
                      return{
                        "assetName":assetName,
                        "property":property,
                        "threatName": assetName +" can be exploited by hacker on confidentiality"
                      }
                     
                    case 'Integrity' :

                         return {
                            
                                 "assetName":assetName,
                                 "property":property,
                                 "threatName":  assetName +" can be exploited by hacker on Integrity "
                               
                         }
                   
                     case 'Availability':
                         return {
                            
                             "assetName":assetName,
                             "property":property,
                             "threatName": "Availability of "+ assetName +" can be comermised by hackers using DDoS attack" 
                           
                            }
                         
                      default:
                         return null
                     }// switch 
                    }
                    )// Inner map 
                
                
                   
                    });// outer map 
                   
            }
        


export default findProjectThreats;