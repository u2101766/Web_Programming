import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping , faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ShopItem from '../Components/ShopItem';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  // Sample image URLs stored in an array of objects
  const sampleImage = [
    { id: 'img1', url: 'https://img.freepik.com/free-vector/colorful-gradient-liquid-shapes_23-2148278890.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707955200&semt=ais' },
    { id: 'img2', url: 'https://img.freepik.com/premium-photo/twisted-ribbon-glowing-colorfull-background-design_955712-15789.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1712880000&semt=ais' },
    { id: 'img3', url: 'https://img.freepik.com/premium-photo/impressive-3d-rendering-that-features-dynamic-wave-abstract-background_974732-36362.jpg' },

  ];

  // State to track the main image
  const [imgMain, setImgMain] = useState(sampleImage[0].url);

  // Function to handle clicking on thumbnail images
  const handleImageClick = (imageUrl) => {
    setImgMain(imageUrl);
  };

  return (
    <div className='mx-[12%] my-12'>
      <Link to={'/shop'}>
        <FontAwesomeIcon  icon={faArrowLeft} size='2x'/>
      </Link>
      <div className='flex flex-col md:flex-row justify-center gap-12'>
        <div className='relative w-[600px] flex flex-col gap-4'>
          {/* Main Image Display */}
          <img className='w-full h-full object-cover' src={imgMain} alt="" />

          {/* Thumbnail Images */}
          <div className='w-full flex justify-between overflow-x-scroll'>
            {sampleImage.map((image, index) => (
              <img
                key={index}
                onClick={() => handleImageClick(image.url)}
                className='w-[200px] border cursor-pointer'
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className='w-[500px] josefin '>
      
          <h1 className='text-blue-600 underline'>Leopard Shirt Dress</h1> 
          <p>Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.</p>
            <br />
          <p><strong>Categories: </strong></p>
          <p><strong>Tags: </strong></p>
            <br /><hr /><br />
          <p><strong>Price: </strong> RM</p>

          <div className='flex flex-col'>
            <label>Quatity: </label>
            <input className='py-1 px-2 rounded-md ' type="number" />
          </div>

          <div className='flex gap-3 mt-4'>
            <button className='py-2 px-4 bg-[#dc3545] rounded-md flex justify-center items-center gap-2'><FontAwesomeIcon icon={faCartShopping}/>Add to Cart</button>
            <button className='px-4 py-2 bg-green-600 rounded-md'>Buy Now</button>
          </div>
        </div>
      </div>


      <h1 className='text-center text-4xl my-8 border-b-4 border- border-green-500'>FEATURED PRODUCTS</h1>
      <div className='flex flex-wrap justify-center gap-4'>
          <div className='flex flex-col justify-center items-center p-2 border rounded-md'>
            <ShopItem ratingStar={5} price={120}/>
            <button className='w-max py-2 px-4 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white '>Add to Cart</button>
          </div>
          <div className='flex flex-col justify-center items-center p-2 border rounded-md'>
            <ShopItem ratingStar={5} price={120}/>
            <button className='w-max py-2 px-4 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white '>Add to Cart</button>
          </div>
          <div className='flex flex-col justify-center items-center p-2 border rounded-md'>
            <ShopItem ratingStar={5} price={120}/>
            <button className='w-max py-2 px-4 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white '>Add to Cart</button>
          </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;
