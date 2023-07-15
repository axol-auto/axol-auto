import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoryLabel = () => {
    const location = useLocation();

    return (
      <div className='mt-4 place-content-center flex flex-col items-center category-container space-y-1'>
        <div className='p-4 w-5/6 category border-solid border-2 shadow-md rounded-md items-center'>
          <h2 className='ml-7 text-xl inline'>{location.state.name}</h2>
          <img className='max-h-20 mr-7' src={location.state.url}></img>
        </div>
      </div>
    )
}

export default CategoryLabel;