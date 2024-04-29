'use client';
import { SearchOutlined } from "@mui/icons-material"
import { Box, IconButton, InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from "react";


const ProductSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };


  return (
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom={4}>
          <TextField
              label="Search"
              onChange={handleInputChange}
              InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                          <IconButton>
                              <SearchOutlined />
                          </IconButton>
                      </InputAdornment>
                  )
              }}
          />
      </Box>
  )
}

export default ProductSearchBar
