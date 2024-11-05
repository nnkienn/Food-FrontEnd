import React from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
const restaurant=[1,1,1,1,1]

const Home = () => {
    
    return (
        <div className=''>
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-4xl lg:text-8xl font-bold z-10 py-5' style={{ fontFamily: 'Playwright, cursive' }}>
                        Chup Food
                    </p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>
                        Taste the Convenience : Food, Fast and Delivered
                    </p>
                </div>
                <div className='cover absolute top-0 left-0 right-0'></div>
            </section>
            <section className='p-10 lg:py-10 lg:px-20 '>
                <p className='text-3xl font-semibold text-gray-400 py-4 pb-10'>Top Meels</p>
                <MultiItemCarousel/>
            </section>

            <section className='px-5 lg:px-20 pt-5 '>
                <p className='text-3xl font-semibold text-gray-400 py-4 pb-5'>From our Favorities</p>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {
                        restaurant.map((item)=><RestaurantCard/>)
                    }
                </div>
            </section>
          
        </div>


    )
}

export default Home
