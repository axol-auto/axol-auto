import React, { useState, useEffect } from 'react';
import { json, useLocation } from 'react-router-dom';

const Parts = () => {
    const location = useLocation();
    
    const [parts, setParts] = useState([]);
    const [isAdded, setIsAdded] = useState(false)
    const [quantity, setQuantity] = useState({})
  

    // When ADD TO CART is clicked and the response is OK,
    // set state "setIsAdded" to true.

    // Send a POST to the database table carts.
    const addToCart = (partID) => {
        console.log('Add to Cart was clicked')

        // POST needs userID, [{items, quantity}]
        const data = {
            userId: 10, // TBD ******************************
            items: [{
                itemId: partID,
                quantity: quantity[partID]
            }]
        }

        fetch(`http://localhost:3000/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((data) => data.json())
        .then((jsonData) => console.log(jsonData))

        // Reset all quantities to 1 in state
        const temporaryObj = {}
        for (let id in quantity) {
            temporaryObj[id] = 1
        }
        setQuantity(temporaryObj)
    }


    useEffect(() => {
        fetch(`http://localhost:3000/api/inventory/category/${location.state.id}`)
        .then((data) => data.json())
        .then((jsonData) => {
            setParts(jsonData)

            const tempObj = {}
            jsonData.forEach((obj) => {
                tempObj[obj.id] = 0
            })
            setQuantity(tempObj)
        })
    }, [])
    

    const part = parts.map((obj) => {
        return (
            <div key={obj.id} className='flex flex-row items-center border-2 w-full rounded-[16px]'>
                {/* Name */}
                <div className='ml-7 font-semibold'>
                    {obj.name}
                </div>


                <div className='ml-auto mr-2 flex flex-row items-center'>
                    {/* Description */}
                    <div class="relative hover-trigger mr-96">
                        Description 
                        <div class="absolute w-96 bg-white border border-grey-100 px-4 py-2 hover-target rounded-[12px]">
                            {obj.description}
                        </div>
                    </div>
                
                    {/* Price */}
                    <div className='mr-20 flex flex-row'>
                        ${obj.price}
                    </div>

                    {/* Buttons */}
                    <div>
                        {/* addCartButton */}
                        <button class="px-6 py-1 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none items-center mt-2" 
                        onClick={() => {addToCart(obj.id)}}> 
                            ADD TO CART
                        </button>
                        {/* Quantity Button */}
                        <div class="flex items-center mb-2 mt-1">
                            <button
                            type="button"
                            class="w-10 py-1 mr-auto hover:bg-gray-300 rounded-full transition ease-in duration-200 border"
                            >
                            -
                            </button>

                            <div>
                                {quantity[obj.id]}
                            </div>

                            <button
                            type="button"
                            class="w-10 py-1 ml-auto hover:bg-gray-300 rounded-full transition ease-in duration-200 border"
                            >
                            +
                            </button>
                        </div>
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