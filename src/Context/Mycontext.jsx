import React, { createContext, useContext,useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const KartContext = createContext();

export const useKart = () => {
  const context = useContext(KartContext);
  if (!context) {
    throw new Error("useKart must be used within a KartProvider");
  }
  return context;
};

const KartProvider = ({ children }) => {
    const navigate=useNavigate()
    const[products,setProducts]=useState()
    const[ladies,setladies]=useState()
    const[bags,setbags]=useState()
    const[jewellry,setjewellry]=useState()
    const[data,setData]=useState()
    const[fragrances,setFragrances]=useState() 
    const[cart,setCart]=useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    const handleData = (id) => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
         .then(data=>
            navigate(`/details/${id}`,{state:data} )
         ).catch(err => console.error(err));
    }



    const addcart = (item) => {
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    
      if (!isItemInCart) {
        setCart([...cart, item]);
      } else {
        alert('This item is already in your cart!');
      }
    }

console.log(cart);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await Promise.all([
            fetch('https://dummyjson.com/products/category/mens-shoes').then(res => res.json()),
            fetch('https://dummyjson.com/products/category/womens-dresses').then(res => res.json()),
            fetch('https://dummyjson.com/products/category/womens-bags').then(res => res.json()),
            fetch('https://dummyjson.com/products/category/womens-jewellery').then(res => res.json()),
            fetch('https://dummyjson.com/products/category/fragrances').then(res => res.json())
          ]);
  
          setProducts(responses[0].products);
          setladies(responses[1].products);
          setbags(responses[2].products);
          setjewellry(responses[3].products);
          setFragrances(responses[4].products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);  
    console.log(searchTerm);
  return (
    <KartContext.Provider value={{handleData,data,setData,jewellry,setjewellry,bags,setbags,ladies,setladies,products,setProducts,fragrances,addcart,cart,searchTerm, setSearchTerm,handleSearchChange}}>
      {children}
    </KartContext.Provider>
  );
};

export default KartProvider;
