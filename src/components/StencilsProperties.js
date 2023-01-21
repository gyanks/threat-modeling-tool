import {useState} from "react"
import { Input, RadioGroup, Radio } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Stack
  } from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'
import React from "react";
const StencilsProperties = () => {

 const [isConfidencial,setIsConfidencial] =useState(false);
 const [isIntegrity,setIsIntegrity]  =useState(false)
 const [isAvailable,setIsAvailable] = useState(false)


return(
      <div>
       
       <FormControl>
       
        <FormLabel> Name </FormLabel>
        <Input name="stencilName"></Input>
        <FormLabel>Security Properties</FormLabel>
        <Divider></Divider>
        <RadioGroup onChange={setIsConfidencial} value={isConfidencial}>
          <FormLabel>Confidentiality</FormLabel>   
      <Stack direction='row'>
        <Radio value='true'>Yes</Radio>
        <Radio value='false'>No</Radio>
        
      </Stack>
    </RadioGroup>

    <RadioGroup onChange={setIsIntegrity} value={isIntegrity}>
    <FormLabel>Integrity</FormLabel>
      <Stack direction='row'>
        <Radio value='true'>Yes</Radio>
        <Radio value='false'>No</Radio>
        
      </Stack>
    </RadioGroup>


    <RadioGroup onChange={setIsAvailable} value={isAvailable}>
    <FormLabel>Availability</FormLabel>
      <Stack direction='row'>
        <Radio value='true'>Yes</Radio>
        <Radio value='false'>No</Radio>
       
      </Stack>
    </RadioGroup>
       </FormControl>
       <br>
       </br>
     Confidentiality: {isConfidencial}
     Integrity: {isIntegrity}
     Availability :{isAvailable}
      </div>


);

}
export default StencilsProperties;