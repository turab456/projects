import React,{useRef,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import Head from './Head';
import ProductPage from './ProductPage';
import MiniBar from './MiniBar';
import { Link } from 'react-router-dom';
import { useKart } from '../Context/Mycontext';

const Navbar = () => {
  const{cart,searchTerm, setSearchTerm,handleSearchChange}=useKart()
    const inputRef = useRef(null);


    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.style.outline = 'none';
          inputRef.current.style.borderColor = 'transparent'; 
        }
      }, []);
  return (
    <div>
<div className='bg-gray-900 p-5 w-full md:w-screen'>
<div className='flex justify-between items-center gap-2'>
  <Link to={"/"}>
  <div className='flex md:gap-2 gap-2' >
    <FaOpencart className='md:text-3xl text-xl text-yellow-800' />

    <h1 className='text-white md:text-3xl text-xl font-medium'>MyKart</h1>
</div>
  </Link>

<div className='flex'>
<input type="text" className='rounded-l-md p-2 w-[150px] md:w-[300px] '  ref={inputRef}  onFocus={(e) => {
          e.target.style.outline = 'none';
          e.target.style.borderColor = 'transparent'; 
        }}
        
        onChange={handleSearchChange}/>
<button className='bg-yellow-800 rounded-r-md p-2'><FaSearch/></button>
</div>
<div className='flex gap-4'>
<Link to={"/cart"} className='flex items-center'>
<p className='text-yellow-900'>{cart.length}</p>
<GiShoppingCart className='md:text-3xl text-2xl text-white'/>
</Link>
<RiAccountPinCircleLine className='md:text-3xl text-2xl text-white'/>

</div>
</div>
</div>
<MiniBar/>
<div >

</div>
    </div>
  )
}

export default Navbar