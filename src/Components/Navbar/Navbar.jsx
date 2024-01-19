import React from 'react'
import logo from './picture/logo.png'
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";


function Navbar() {
    return (

        <>
            <div className=''>

                <div className='bg-black font-inter  p-2 text-white font-extrabold  text-center tracking-normal leading-none'>

                    <h1>Welcome All</h1>

                </div>

                <div className='flex flex-row justify-around'>


                    <div className='w-[8%]'>
                        <img className=' w-full object-fill' src={logo} alt='error' />
                    </div>

                    <div className='flex flex-row'>
                        <div className='mt-8'>

                            <button className='font-semibold font-inter'> Logout</button>

                        </div>


                        <div className='mt-9 ml-4'>
                            <IoIosHeartEmpty />

                        </div>
                        <div className='mt-8 ml-1 font-inter'>
                            <p >Whish List</p>

                        </div>
                        <div className='mt-9 ml-3'>
                            <HiOutlineShoppingBag />
                        </div>
                        <div className='mt-8 ml-1 font-inter'>
                            <p >Shopping Bag</p>

                        </div>
                    </div>



                </div>


                <div className='bg-black flex flex-row justify-around py-3'>

                    <div className='font-bold font-sans text-white leading-none '>
                        <h1>50%OFF</h1>
                    </div>
                    <div className='font-bold font-sans text-white leading-none '>
                        <h1>Free Shipping and return</h1>
                    </div>
                    <div className='font-bold font-sans text-white leading-none '>
                        <h1>Different Payment Methods</h1>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Navbar