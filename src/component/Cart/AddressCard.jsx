import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <div className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>262/20 Lac Long Quan, HCMC</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
            sx={{ color: '#f06b7a', borderColor: '#f06b7a', '&:hover': { backgroundColor: '#f06b7a', color: 'white' } }}
          >
            Select
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
