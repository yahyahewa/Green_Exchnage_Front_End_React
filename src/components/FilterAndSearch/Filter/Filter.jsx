import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";

const Filter = () => {
  const [value, setVlaue] = useState("")
  const handleChange = (event) => {
    setVlaue(event.target.value);
  };
  return (
    <div className="grid grid-cols-2 gap-x-2">
    
       <FormControl sx={{  minWidth: 170 }} size="small">
        <Select
          sx={{border:1.5, borderRadius: 1 }} 
          value={value}
          onChange={handleChange}
          displayEmpty
          color="success"
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
              <em>category</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      
       <FormControl sx={{  minWidth: 170 }} size="small">
        <Select
          sx={{border:1.5, borderColor: 'grey.600', borderRadius: 1 }} 
          value={value}
          onChange={handleChange}
          displayEmpty
          color="success"
          inputProps={{ 'aria-label': 'Without label' }}
        >
              <MenuItem value="">
                <em> sub category</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
    </div>
   

  );
};

export default Filter;
