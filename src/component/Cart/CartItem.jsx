import { Chip, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="px-5 py-4">
      <div className="lg:flex items-center lg:space-x-12">
        <div>
          <img
            className="w-[10rem] h-[6rem] object-cover"
            src="https://th.bing.com/th/id/OIP.woqvrdJJG2rJeAM_IcggqwHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-2 lg:space-y-4 w-full">
            <p className="text-center lg:text-left">pizza</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <IconButton sx={{ color: '#f06b7a', '&:hover': { color: '#e05a68' } }}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {5}
                </div>
                <IconButton sx={{ color: '#f06b7a', '&:hover': { color: '#e05a68' } }}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-lg text-gray-400">$1900</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item, index) => (
          <Chip key={index} label={"bread"} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
