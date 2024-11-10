import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./Navbar.css"
import { Box } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const { auth } = useSelector(store => store)
    const navigate = useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user.role === "ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }
    }
    return (
        <Box className='sticky top-0 z-50 bg-[#f06b7a] px-5 py-[.8rem] lg:px-20 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <div onClick={()=>navigate("/")} className='logo text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 to-pink-200 ' style={{ fontFamily: 'Playwright, cursive' }}>
                        ChupFood
                    </div>
                </div>
            </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </div>

                <div>
                    {auth.user ? <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullName[0].toUpperCase()}</Avatar>
                        : <IconButton onClick={() => navigate("/account/register")} >
                            <Person />
                        </IconButton>}
                </div>

                <div>
                    <IconButton>
                        <Badge color='primary' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
}

export default Navbar;
