import React, { useState, useEffect, useRef } from 'react';
import CustomCarousel from '../Components/Carousel';
import Isotope from 'isotope-layout';

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

      <div className="w-full">
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
        <div className="filter-container h-max">
            <div className='w-80 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 featured '>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 featured'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 best'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
            <div className='w-80 filter-item m-4 new'>
                <img className='w-full ' src="shopTest.png" alt="" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShopPage;
