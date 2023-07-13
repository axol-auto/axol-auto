import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Parts = () => {
    const location = useLocation();

    const [parts, setParts] = useState([]);

    // Fetch `http://localhost:3001/api/inventory/category/${location.state.id}`
    // Set state to an array of the data received.
    // Map 

    useEffect(() => {
      fetch(`http://localhost:3001/api/inventory/category/${location.state.id}`)
        .then((data) => data.json())
        // .then((jsonData) => console.log(location.state.id))
        .then((jsonData) => setParts(jsonData))
    }, [])

    const part = parts.map((obj) => {
        return (
            <li className='category border rounded flex'>
                <div >
                    {obj.name}
                </div>

            </li>
        )
    })

    return (
        // Container
        <div className='category-container ml-60 mr-60 mt-4 place-content-center flex flex-col items-center  space-y-1'>
            <ul>
                {part}
            </ul>

        </div>
    )
}

export default Parts;

/*
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