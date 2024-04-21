import React, { useState, useEffect, useRef } from 'react';
import CustomCarousel from '../Components/Carousel';
import Isotope from 'isotope-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import RequestModal from '../Components/RequestModal';

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const isotopeRef = useRef(null);

  useEffect(() => {
    // Initialize Isotope when the component mounts
    isotopeRef.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });

    return () => {
      // Destroy Isotope instance when the component unmounts
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Update the filter when activeFilter changes
    if (isotopeRef.current) {
      const filterValue = activeFilter === '*' ? '*' : `.${activeFilter}`;
      isotopeRef.current.arrange({ filter: filterValue });
    }
  }, [activeFilter]);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <div>
     
      <CustomCarousel/>

      <div className="w-full mt-12">
        <div className="title text-center">
          <h1 className="text-white josefin text-3xl">New Collection</h1>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className={`p-1 m-2 text-white josefin ${activeFilter === '*' ? 'active border rounded-md' : ''}`}
            onClick={() => handleFilterClick('*')}
          >
            All
          </button>
          <button
            type="button"
            className={`p-1 m-2 text-white josefin ${activeFilter === 'best' ? 'active border rounded-md' : ''}`}
            onClick={() => handleFilterClick('best')}
          >
            Best Seller
          </button>
          <button
            type="button"
            className={`p-1 m-2 text-white josefin ${activeFilter === 'featured' ? 'active border rounded-md' : ''}`}
            onClick={() => handleFilterClick('featured')}
          >
            Featured
          </button>
          <button
            type="button"
            className={`p-1 m-2 text-white josefin ${activeFilter === 'new' ? 'active border rounded-md' : ''}`}
            onClick={() => handleFilterClick('new')}
          >
            New Arrival
          </button>
        </div>

        <hr />

        {/* Filtered items container */}
       
        <div className="filter-container pl-16">
            <div className='w-72 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 featured '>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 featured'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
            <div className='w-72 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
                <div className='flex justify-center gap-1 my-2'>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faStar} color='white' size='2x'/>
                </div>
            </div>
        </div>
     
        

      </div>
    </div>
  );
};

export default ShopPage;
