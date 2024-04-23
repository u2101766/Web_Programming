import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ShopItem = ({ price, ratingStar, type }) => {
  // Create an array of star elements based on the ratingStar prop
  const stars = [];
  for (let i = 0; i < ratingStar; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color='white' size='lg' />);
  }

  return (
    <Link to='/shop/shirt'>
      <div className={`filter-item w-56 m-4 ${type}`}>
        <img className='w-full' src='../shopTest.png' alt='Shop Item' />
        <div className='flex justify-center gap-1 my-2'>
          {stars.map((star, index) => (
            <div key={index}>{star}</div>
          ))}
        </div>
        <h1 className='text-center'>RM {price}</h1>
      </div>
    </Link>
  );
};

export default ShopItem;
