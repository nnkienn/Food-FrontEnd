import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { categorizeIngredients } from '../util/categrizeIngredients';

const MenuCard = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleCheckBoxChange = (itemName) => {
        console.log('Checkbox changed:', itemName);
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== itemName));
        } else {
            setSelectedIngredients([...selectedIngredients, itemName]);
        }
    };

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const reqData = {
            token: localStorage.getItem('jwt'),
            cartItem: {
                menuItemId: item.id,
                quantity: 1,
                ingredients: selectedIngredients,
            },
        };
        console.log('Request data:', reqData);
        // Thêm xử lý logic gửi reqData đến backend ở đây nếu cần
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:flex items-center lg:gap-5">
                            <img
                                className="w-[7rem] h-[7rem] object-cover"
                                src="https://th.bing.com/th/id/OIP.CXLVbNADPVw1qXWep3aKfAHaE8?rs=1&pid=ImgDetMain"
                                alt={item.name}
                            />
                            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                                <p className="font-semibold text-xl">{item.name}</p>
                                <p>{item.price}$</p>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={handleAddItemToCart}>
                        <div className="flex gap-5 flex-wrap">
                            {Object.keys(categorizeIngredients(item.ingredients || {})).map((category) => (
                                <div key={category}>
                                    <p className="font-semibold">{category}</p>
                                    <FormGroup>
                                        {categorizeIngredients(item.ingredients)[category].map((ingredient) => (
                                            <FormControlLabel
                                                key={ingredient.id}
                                                control={
                                                    <Checkbox
                                                        onChange={() => handleCheckBoxChange(ingredient.name)}
                                                    />
                                                }
                                                label={ingredient.name}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button variant="contained" disabled={false} type="submit">
                                Add to cart
                            </Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MenuCard;
