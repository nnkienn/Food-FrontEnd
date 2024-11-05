import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src="https://wallpapercave.com/wp/wp7845825.jpg" alt="" srcset="" />
                <div>
                    <p>Pizza</p>
                    <p>$20</p>
                </div>
            </div>
            <div>
                <Button  className='cursor-not-allowed'>completed</Button>
            </div>
        </Card>
    )
}

export default OrderCard