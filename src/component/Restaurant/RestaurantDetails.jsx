import Grid from '@mui/material/Grid';  // Đúng cách import Grid từ MUI
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Label } from '@mui/icons-material';
import MenuCard from './MenuCard';

const categories = [
    "cơm",
    "phở",
    "bún",
    "cháo",
    "súp"
]
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegatarian" },
    { label: "Seasonal", value: "seasonal" }
]
const menu=[1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Viet Nam/Viet Food/3</h3>
            </section>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg" alt="main image" />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg" alt="secondary image 1" />
                    </Grid>

                    <Grid item xs={6} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg" alt="secondary image 2" />
                    </Grid>
                </Grid>
            </div>

            <div className='pt-3 pb-5'>
                <div className="pt-3 mt-3">
                    <h1 className='text-4x1 font-semibold'>
                        Tum kin food
                    </h1>
                    <p className='text-gray-500 mt-1'>
                        <span>
                            ChupFood offers authentic Vietnamese cuisine in a cozy, modern setting. Enjoy flavorful dishes like Phở and Bánh Mì, crafted with fresh ingredients and exceptional care.
                        </span>

                    </p>
                    <div className="space-y-3 mt-3">
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                HochiMinh ,Vietnam
                            </span>

                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarMonthIcon />
                            <span>
                                Mon-sun : 7:00am - 11pm
                            </span>
                        </p>
                    </div>
                </div>


            </div>

            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md ">
                    <div className='space-y-10 box lg:sticky top-28 d'>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food type
                            </Typography>
                            <FormControl className="py-10 space-x-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType} >
                                    {foodTypes.map((item) =>
                                        <FormControlLabel value={item.value} control={<Radio />} label={item.label}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-x-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType} >
                                    {categories.map((item) =>
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10 ">
                    {menu.map((item)=><MenuCard/>)}
                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;
