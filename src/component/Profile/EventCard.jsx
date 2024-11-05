import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia sx={{ height: 345 }} image='https://th.bing.com/th/id/R.da0f9d4f79ede796113d198e964631b1?rik=ba4nm8LaaalLow&pid=ImgRaw&r=0' />
                <CardContent>
                    <Typography variant='h5' >
                        Viet Nam food
                    </Typography>
                    <Typography variant='body2'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"Viet nam"}</p>
                        <p className='text-sm text-blue-500'>Febrary 12,2024 12:00 AM </p>
                        <p className='text-sm text-red-500'>Febrary 12,2024 12:00 AM </p>

                    </div>

                </CardContent>
                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}

export default EventCard