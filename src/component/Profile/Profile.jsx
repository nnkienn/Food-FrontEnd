import React, { useState } from 'react';
import ProfileNavigation from './ProfileNavigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Address from './Address';
import Favorite from './Favorite';
import Events from './Events';

const Profile = () => {
    const [openSlideBar,setOpenSideBar] = useState(false);
    return (
        <div className='lg:flex justify-between'>
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSlideBar}/>
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<UserProfile/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/address' element={<Address/>}/>
                    <Route path='/favorites' element={<Favorite/>}/>
                    <Route path='/events' element={<Events/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default Profile;
