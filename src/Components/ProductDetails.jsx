import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Rating } from "@material-tailwind/react";
import { useKart } from '../Context/Mycontext';
import { GiShoppingCart } from "react-icons/gi";


const ProductDetails = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };
const{jewellry,setjewellry,bags,setbags,ladies,setladies,products,setProducts,handleData,addcart} = useKart()
  const [data, setData] = useState();
  const [active, setActive] = useState(null); 

  const location = useLocation();
const[related,setReleated]=useState()
  useEffect(() => {
    if (location.state) {
      setData(location.state);
    }
  }, [location.state]);


  const FetchRelated=()=>{
    fetch(`https://dummyjson.com/products/category/${data?.category}`)
.then(res => res.json())
.then(data=>
  setReleated(data.products)
).catch(err =>
  console.log(err))
  }
  useEffect(() => {
    FetchRelated()
    if (data && data.images && data.images.length > 0) {
      setActive(data.images[0]); 
    }


  }, [data]);

  return (
    <>
      <Navbar />

      <section className=" md:justify-center md:items-center md:mt-[50px] mt-[10px] gap-0 p-5 md:p-0">
        <div className="md:w-[90%] flex md:flex-row md:justify-around  flex-col gap-0">
          <div>
            <div className="grid gap-2">
              <div>
                {active && (
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[300px]"
                    src={active}
                    alt=""
                  />
                )}
              </div>
              <div className="grid grid-cols-5 gap-2 ">
                {data?.images?.length > 0 ? (
                  data.images.map((item, index) => (
                    <div key={index}>
                      <img
                        onClick={() => setActive(item)}
                        src={item}  
                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center border-8 border-sky-500"
                        alt={`gallery-image-${index}`}
                      />
                    </div>
                  ))
                ) : (
                  <p>Loading products...</p>
                )}
              </div>
              <h1 className="text-3xl hidden md:block">{data?.title}</h1>
              </div>
       
          </div>
          <div className='flex flex-col gap-4 overflow-y-auto h-[90vh] ' style={{ 
  "-ms-overflow-style": "none", 
  "scrollbar-width": "none", 
  "overflow-y": "auto", 
  "WebkitOverflowScrolling": "touch", 
}}>
            <h1 className="text-3xl">{data?.title}</h1>
            <p className='w-[600px]'>{data?.description}</p>
            <Rating readonly value={5} />
          <hr/>
          <div className='flex gap-5'>
          <h1 className='text-2xl text-red-500'>-{data?.discountPercentage}%</h1>
          <h1 className='text-2xl text-black'>${data?.price}/-</h1>

          </div>
          <div className='text-gray-800'>
          <h1>Inclusive of all taxes</h1>
          <h1>EMI starts at $1.2 No Cost EMI available </h1>
          </div>
          {/* <div className='flex gap-2'>
            <Button className='bg-yellow-900'>Add Cart</Button>
            <Button className='bg-yellow-900'>Buy Now</Button>
          </div> */}
          <div className='flex flex-col gap-1'>
            <hr/>
            <div className='flex'>
            <p className='text-black font-semibold w-[80px]'>Brand:</p>
            <p className='text-gray-900'>{data?.brand}</p>

            </div>
            <div className='flex'>
            <p className='text-black font-semibold  w-[80px]'>Sku:</p>
            <p className='text-gray-900'>{data?.sku}</p>

            </div>
            <div className='flex'>
            <p className='text-black font-semibold  w-[80px]'>Warranty:</p>
            <p className='text-gray-900'>{data?.warrantyInformation}</p>

            </div>
            <div className='flex'>
            <p className='text-black font-semibold  w-[80px]'>Shipping:</p>
            <p className='text-gray-900'>{data?.shippingInformation}</p>

            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <hr/>
          <div>
            <h1 className='text-black font-semibold text-lg'>About this item</h1>
            <div>
              <ul>
                <li><p className='text-md'>Weight : {data?.weight}</p></li>
                <li><p className='text-md'>Dimensions : {data?.dimensions.width} width x {data?.dimensions.height} height</p></li>
                <li><p className='text-md'>Return : {data?.returnPolicy}</p></li>
              </ul>
            </div>
          </div>
          </div>
          <div className='flex gap-2'>
            <Button className='bg-yellow-900 flex justify-center items-center gap-2' onClick={()=>addcart(data)}><GiShoppingCart className='text-lg'/>Cart</Button>
            <Button className='bg-yellow-900'>Shop Now</Button>
          </div>
          </div>
          <div>
            
          </div>
        </div>

        {/* <div className='md:mt-5 -mt-[100px]'>
          <div>
            <h1 className='text-center text-2xl'>Recomended Items</h1>
          </div>
          <div className=''>
            
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={100}
                      keyBoardControl={true} customTransition="all .5" transitionDuration={100} className='md:mt-10 flex justify-center items-center md:w-[100%] gap-1'>
              {related?.length > 0 ? (
                related.map((item, index) => (
                  <div key={index} className='relative md:w-[200px] w-[190px]  bg-white shadow-md' onClick={() => handleData(item.id)}>
                    <div className='bg-yellow-500'>
                      <p className='flex justify-center items-center p-5 text-lg'>{item.title}</p>
                    </div>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className='w-full h-[200px] rounded-md transition-transform ease-in-out duration-300 hover:scale-125'
                      />
                    <hr/>
                    <div className='flex justify-evenly items-center'>
                      <p className='text-lg'>Price: {item.price}</p>
                      <p><GiShoppingCart className='text-2xl'/></p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading related products...</p>
              )
              }
              {related?.length > 0 ? (
                related.map((item, index) => (
                  <div key={index} className='relative w-[200px] bg-white shadow-md' onClick={() => handleData(item.id)}>
                    <div className='bg-yellow-500'>
                      <p className='flex justify-center items-center p-5 text-lg'>{item.title}</p>
                    </div>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className='w-full h-[200px] rounded-md transition-transform ease-in-out duration-300 hover:scale-125'
                      />
                    <hr/>
                    <div className='flex justify-evenly items-center'>
                      <p className='text-lg'>Price: {item.price}</p>
                      <p><GiShoppingCart className='text-2xl'/></p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading related products...</p>
              )
              }
            </Carousel>
          </div>

        </div> */}

        <div className='-mt-[100px] md:mt-10'>
          <div>
      <h1 className='text-center md:text-3xl text-2xl'>Recommended Items</h1>
    </div>
<Carousel responsive={responsive} infinite={true}   autoPlaySpeed={100}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}  className=' p-1'>

{related?.length > 0 ? (
        related.map((item, index) => (
          <div key={index} className='relative w-[200px] bg-white shadow-md' onClick={()=>handleData(item.id)}>
           <div className='bg-yellow-500'><p className='flex justify-center items-center p-5 text-lg'>{item.title}</p></div>
            <img
              src={item.images[0]}
              alt={item.title}
              className='w-full h-[200px] rounded-md transition-transform ease-in-out duration-300 hover:scale-125'
              //  
            />
            <hr/>
<div className='flex justify-evenly items-center'>
<p className='text-lg'>Price: {item.price}</p>
<p ><GiShoppingCart className='text-2xl'/></p>

</div>
           
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
      {related?.length > 0 ? (
        related.map((item, index) => (
          <div key={index} className='relative w-[200px] bg-white shadow-md' onClick={()=>handleData(item.id)} >
           <div className='bg-yellow-500'><p className='flex justify-center items-center p-5 text-lg'>{item.title}</p></div>
            <img
              src={item.images[0]}
              alt={item.title}
              className='w-[200px] h-full rounded-md transition-transform ease-in-out duration-300 hover:scale-125'
              //  
            />
            <hr/>
<div className='flex justify-evenly items-center'>
<p className='text-lg'>Price: {item.price}</p>
<p ><GiShoppingCart className='text-2xl'/></p>

</div>
           
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
 </Carousel>

        </div>
      </section>
    </>
  );
};

export default ProductDetails;
