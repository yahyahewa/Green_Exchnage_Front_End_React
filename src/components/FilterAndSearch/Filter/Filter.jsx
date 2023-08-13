import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const Filter = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <Box width={150} size="small" >
        <Select
          sx={{border:1.5, borderColor: 'grey.600', borderRadius: 1 }} 
          size="small"
          // sx={{ height:"20" }}
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="success"
          // variant="green"
          // value={age}
          // label="Age"
          // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
      </Box>
          <Box width={150} size="small" >
        <Select
          sx={{border:1.5, borderColor: 'grey.600', borderRadius: 1 }} 
          size="small"
          // sx={{ height:"20" }}
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="success"
          // variant="green"
          // value={"age"}
          // label="Age"
          name="age"
          // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </Box>
    </div>
   
    // <FormControl fullWidth>
  // {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
 
// </FormControl>
    // <div className=" w-60 hover:text-green">
    //   <select className="block bg-white px-3 border-2 border-gray-400 text-gray-800 rounded-md 
    //   py-1 w-full shadow-sm md:text-lg focus:outline-none focus:border-green text-sm ">
    //     <option className=""> Category</option>
    //     <option style={{backgroundColor:"green"}} value="" className="w-full hover:bg-green hover:bg-opacity-50">Filter</option>
    //     <option value="">filter</option>
    //     <option value="">filter</option>
    //   </select>
    // </div>
  );
};

export default Filter;
