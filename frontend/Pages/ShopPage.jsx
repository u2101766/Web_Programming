import React, { useState, useEffect, useRef } from 'react';
import CustomCarousel from '../Components/Carousel';
import Isotope from 'isotope-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ShopItem from '../Components/ShopItem';


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
       
        <div className="filter-container mx-[12%]">
            
           <ShopItem type={'best'} ratingStar={5} price={'230'}/>
           <ShopItem type={'featured'} ratingStar={5} price={'180'}/>
           <ShopItem type={'new'} ratingStar={5} price={'200'}/>
           <ShopItem type={'featured'} ratingStar={5} price={'100'}/>
           <ShopItem type={'new'} ratingStar={4} price={'45'}/>
           <ShopItem type={'best'} ratingStar={4} price={'15'}/>
           <ShopItem type={'best'} ratingStar={4} price={'145'}/>
           <ShopItem type={'new'} ratingStar={5} price={'230'}/>

        </div>
     
        

      </div>
    </div>
  );
};

export default ShopPage;
