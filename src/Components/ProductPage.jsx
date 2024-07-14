import React, { useEffect ,useState} from 'react'
import { products } from '../utils/Products'
import watch from "../assets/watch.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GiShoppingCart } from "react-icons/gi";
import Head from './Head';
import { useKart } from '../Context/Mycontext';


const ProductPage = () => {


  const{handleData,jewellry,setjewellry,bags,setbags,ladies,setladies,products,setProducts,fragrances,searchTerm, setSearchTerm,handleSearchChange} =useKart()
  // const [searchTerm, setSearchTerm] = useState('');


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

 

  const filteredProducts = products?.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredProducts1 = bags?.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredProducts2 = fragrances?.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredProducts);
  return (
    <>
    <div>
      <Head/>
    </div>
     <div className='w-screen bg-gray-200 relative  '>
  <div className='' >
    <div>
      <h1 className='text-center md:text-3xl text-2xl'>Newly Arrival Shoes</h1>
    </div>
<Carousel responsive={responsive} infinite={true}   autoPlaySpeed={100}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}  className='mt-5 p-1'>

{filteredProducts?.length > 0 ? (
        filteredProducts.map((item, index) => (
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
      {filteredProducts?.length > 0 ? (
        filteredProducts.map((item, index) => (
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

<div className='md:grid md:grid-cols-12 mt-5 p-2 gap-5 '>
<div className='md:col-span-4 bg-white md:w-full w-screen'>
  <div className='flex justify-center'>
    <h1 className='text-2xl md:text-center p-2'>Ladies Collection</h1>
  </div>
<div className='  rounded-sm h-[50vh] flex flex-wrap gap-4 overflow-y-auto' style={{ 
  "-ms-overflow-style": "none", 
  "scrollbar-width": "none",
  "overflow-y": "auto", 
  "WebkitOverflowScrolling": "touch", 
}}>


  {
  ladies?.map((item,index) => (
    
<div className='h-min-[100px]' onClick={()=>handleData(item.id)}>
<img src={item.images[0]} alt="" className='h-[90px]'   />
</div>
  ))
}
{
  ladies?.map((item,index) => (
    
<div className='h-min-[100px]' onClick={()=>handleData(item.id)}>
<img src={item.images[0]} alt="" className='h-[90px]'   />
</div>
  ))
}
{
  ladies?.map((item,index) => (
    
<div className='h-min-[100px]' onClick={()=>handleData(item.id)}>
<img src={item.images[0]} alt="" className='h-[90px]'   />
</div>
  ))
}
{
  ladies?.map((item,index) => (
    
<div className='h-min-[100px]' onClick={()=>handleData(item.id)}>
<img src={item.images[0]} alt="" className='h-[90px]'   />
</div>
  ))
}
{
  ladies?.map((item,index) => (
    
<div className='h-min-[100px]' onClick={()=>handleData(item.id)}>
<img src={item.images[0]} alt="" className='h-[90px]'   />
</div>
  ))
}
</div>



</div>
<div className='w-min-[10vh] bg-white col-span-8'>
<div className='p-5'>
<div >
  <h1 className='text-2xl text-center p-2'>Best Womens Collections </h1>
</div>
<Carousel responsive={responsive} infinite={true}   autoPlaySpeed={100}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100} 
  className='p-2'
  >


{
  filteredProducts1?.map((item,index) =>(
    <div onClick={()=>handleData(item.id)}>
      <img src={item.images[0]} alt=""   />
    </div>
  ))
}
{
  filteredProducts1?.map((item,index) =>(
    <div onClick={()=>handleData(item.id)}>
      <img src={item.images[0]} alt=""   />
    </div>
  ))
}
<div>
 
</div>
  </Carousel>
<Carousel responsive={responsive} infinite={true}   autoPlaySpeed={100}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100} className='mt-4'>


{
  jewellry?.map((item,index) =>(
    <div onClick={()=>handleData(item.id)}>
      <img src={item.images[0]} alt=""   />
    </div>
  ))
}
{
  jewellry?.map((item,index) =>(
    <div onClick={()=>handleData(item.id)}>
      <img src={item.images[0]} alt=""   />
    </div>
  ))
}
<div>
 
</div>
  </Carousel>
</div>

</div>
</div>
<div className='p-2'>
<div className=' w-full h-min-[20vh] bg-white'>
 <div className='p-1'>
  <h1 className='text-center text-2xl p-2'>Fragnance Store</h1>
 </div>

 <div className='flex gap-4 flex-wrap p-2 '>

{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[0]} alt="" className='h-[100px] mx-auto'  />
{/* <div>
  <h1 className='text-center'>{item?.title}</h1>
</div> */}
      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[1]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[2]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[0]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[1]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[0]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
{
  filteredProducts2?.map((item, i) =>(
    <div onClick={()=>handleData(item.id)} className='bg-gray-200 w-[250px] h-[150px] rounded-md flex justify-center items-center'>
<img src={item?.images[2]} alt="" className='h-[100px] mx-auto'  />

      </div>
  ))
}
 </div>
</div>

</div>
  </div>
 </div>
    </>

  )
}

export default ProductPage