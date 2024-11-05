import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
const ingredients = [
    {
        category: "Mì",
        ingredients: ["Bò", "Mì", "Gà"]
    },
    {
        category: "Protein",
        ingredients: ["Thịt bò", "Ức gà", "Tôm", "Mực"]
    },
    {
        category: "Rau",
        ingredients: ["Cải xanh", "Rau muống"]
    }
];
const demo = [
    {
        category: "Mì",
        ingredients: ["Bò", "Mì", "Gà"]
    },
    {
        category: "Protein",
        ingredients: ["Thịt bò", "Ức gà", "Tôm", "Mực"]
    },
    {
        category: "Rau",
        ingredients: ["Cải xanh", "Rau muống"]
    }
];


const MenuCard = () => {
    const handleCheckBoxChange = (value)=>{
        console.log("value");
    }
    return (
        <div><Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className="lg:flex items-center lg:gap-5" >
                        <img className='w-[7rem] h-[7rem] object-cover ' src="https://th.bing.com/th/id/OIP.CXLVbNADPVw1qXWep3aKfAHaE8?rs=1&pid=ImgDetMain" alt="" />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className='font-semibold text-x1'> mì trộn</p>
                            <p>9$</p>
                            <p className='text-gray-400'>nice food</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form >
                    <div className="flex gap-5 flex-wrap">
                        {
                            demo.map((item) =>
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item} />)}

                                    </FormGroup>
                                </div>

                            )
                        }

                    </div>
                    <div>
                        <Button variant="contained" disabled={false} type='submit'>{true ? "Add to cart" : "Out of stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
        </div>
    )
}

export default MenuCard