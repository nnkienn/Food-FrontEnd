import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../../State/menu/Action';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegetarian" },
    { label: "Seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, menu } = useSelector((store) => store);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [foodType, setFoodType] = useState("all");

    const { id } = useParams();

    // Fetch restaurant details and categories
    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }));
        dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
    }, [dispatch, jwt, id]);

    // Fetch menu items whenever filters change
    useEffect(() => {
        const params = {
            jwt,
            restaurantId: id,
            vegetarian: foodType === "vegetarian",
            nonveg: foodType === "non-vegetarian",
            seasonal: foodType === "seasonal",
            food_category: selectedCategory,
        };

        console.log("Fetching menu items with params:", params);
        dispatch(getMenuItemsByRestaurantId(params));
    }, [foodType, selectedCategory, dispatch, jwt, id]);

    // Handlers
    const handleFoodTypeChange = (e) => setFoodType(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">
                    Home / Viet Nam / Viet Food / {id}
                </h3>
            </section>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img
                            className="w-full h-[40vh] object-cover"
                            src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg"
                            alt="Main restaurant"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img
                            className="w-full h-[40vh] object-cover"
                            src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg"
                            alt="Secondary image 1"
                        />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <img
                            className="w-full h-[40vh] object-cover"
                            src="https://i.pinimg.com/originals/e7/98/a3/e798a3239a965f7429f8ec2d44755d8e.jpg"
                            alt="Secondary image 2"
                        />
                    </Grid>
                </Grid>
            </div>

            <div className="pt-3 pb-5">
                <div className="pt-3 mt-3">
                    <h1 className="text-4x1 font-semibold">
                        {restaurant.restaurant?.name || "Restaurant Name"}
                    </h1>
                    <p className="text-gray-500 mt-1">
                        {restaurant.restaurant?.descriptions || "Restaurant Description"}
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon />
                            <span>
                                {restaurant.restaurant?.address?.street || "Street"} -{" "}
                                {restaurant.restaurant?.address?.state || "State"} -{" "}
                                {restaurant.restaurant?.address?.city || "City"}
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarMonthIcon />
                            <span>{restaurant.restaurant?.openingHours || "Opening Hours"}</span>
                        </p>
                    </div>
                </div>
            </div>

            <Divider />

            <section className="pt-[2rem] lg:flex relative">
                {/* Filters */}
                <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
                    <div className="space-y-10 box lg:sticky top-28">
                        {/* Food Types */}
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-x-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFoodTypeChange} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        {/* Food Categories */}
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-x-5" component={"fieldset"}>
                                <RadioGroup
                                    onChange={handleCategoryChange}
                                    name="food_category"
                                    value={selectedCategory}
                                >
                                    {restaurant.categories?.map((category) => (
                                        <FormControlLabel
                                            key={category.name}
                                            value={category.name}
                                            control={<Radio />}
                                            label={category.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.menuItems && menu.menuItems.length > 0 ? (
                        menu.menuItems.map((item) => <MenuCard key={item.id} item={item} />)
                    ) : (
                        <p className="text-gray-500">No menu items found</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;
