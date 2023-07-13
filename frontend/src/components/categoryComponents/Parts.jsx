import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Parts = () => {
    const location = useLocation();

    const [isAdded, setIsAdded] = useState(false)

    // When ADD TO CART is clicked set state "setIsAdded" to true.
    // Send a POST to the database table carts.
    const addToCart = () => {}


    // onClick={}
    const button = (
        <button 
        class="px-6 py-1 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none items-center mt-2" 
        > 
        ADD TO CART
        </button>
    )
    
    // ******************************

    const quantityCount = (
        <div class="flex items-center mb-2 mt-1">
            <button
            type="button"
            class="w-10 py-1 mr-auto hover:bg-gray-300 rounded-full transition ease-in duration-200 border"
            >
            -
            </button>

            <input
            type="number"
            id="Quantity"
            value="1"
            class="w-16 py-1 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
            type="button"
            class="w-10 py-1 ml-auto hover:bg-gray-300 rounded-full transition ease-in duration-200 border"
            >
            +
            </button>
        </div>
    )

    // ******************************

    const [parts, setParts] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/api/inventory/category/${location.state.id}`)
        .then((data) => data.json())
        .then((jsonData) => setParts(jsonData))
    }, [])
    
    const part = parts.map((obj) => {
        return (
            <div className='flex flex-row items-center border-2 w-full rounded-[16px]'>
                {/* Name */}
                <div className='ml-7 font-semibold'>
                    {obj.name}
                </div>


                <div className='ml-auto mr-2 flex flex-row items-center'>

                    {/* Description */}
                    <div class="relative hover-trigger mr-96">
                        Description
                        <div class="absolute bg-white border border-grey-100 px-4 py-2 hover-target rounded-[12px]">
                            {obj.description}
                        </div>
                    </div>

                
                    {/* Price */}
                    <div className='mr-20 flex flex-row'>
                        ${obj.price}
                    </div>

                    {/* Buttons */}
                    <div>
                        {button}
                        {quantityCount}
                    </div>
                </div>
            </div>
        )
    })

    return (
        // Container
        <div className='flex flex-col items-center ml-60 mr-60 mt-4'>
            {part}
        </div>
    )
}

export default Parts;

/*

w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75

category border rounded flex max-w
category-container ml-60 mr-60 mt-4 place-content-center flex flex-col items-center space-y-1 border-solid border-2 shadow-md rounded-lg

category-container
items-left


ml-10
w-3/4 

flex-row 
w-full
space-y-1

flex
flex-col
items-center
category-container
place-content-center

hover:bg-gray-50




*/