import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favorite = () => {
  const {auth} =useSelector(store=>store)
    return (
    <div>
      <h1 className='py-5 text-x1 font-semibold text-center '>My Favorites</h1>
      <div className='flex flex-wrap gap-1 justify-center'>
        {auth.favorites.map((item)=><RestaurantCard  item={item} />)}
      </div>
    </div>
  )
}

export default Favorite