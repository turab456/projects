import React, { useState } from 'react';
import Navbar from './Navbar';
import { Button } from '@material-tailwind/react';
import { useKart } from '../Context/Mycontext';

const Cart = () => {
    const { cart } = useKart();
    const [itemTotals, setItemTotals] = useState({});
    const [itemQuantities, setItemQuantities] = useState({});

    const handleAdd = (itemId, price) => {
        const newQuantity = (itemQuantities[itemId] || 0) + 1;
        const newTotal = (itemTotals[itemId] || 0) + price;
        setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
        setItemTotals({ ...itemTotals, [itemId]: newTotal });
    }

    const handleDec = (itemId, price) => {
        if (itemQuantities[itemId] > 0) {
            const newQuantity = itemQuantities[itemId] - 1;
            const newTotal = itemTotals[itemId] - price;
            setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
            setItemTotals({ ...itemTotals, [itemId]: newTotal });
        }
    }

    return (
        <>
            <section className='bg-gray-200 h-screen'>
                <Navbar />
                <section className="md:grid grid-cols-12 md:justify-center mt-10 gap-10 p-5">
                    <div className="col-span-8 bg-white h-min-[10vh] flex flex-col">
                        {cart.map((item, index) => (
                            <>
                            <div key={index} className='md:flex gap-5 p-5'>
                                <div>
                                    <img src={item?.images[0]} alt="" className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[200px]" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className="text-2xl">{item?.title}</h1>
                                    <p className='text-md text-green-700'>Stock: {item?.stock}</p>
                                    <h2 className='text-xl text-black'>Total: ${itemTotals[item.id]?.toFixed(2)}</h2>
                                    <h2>Quantity: {itemQuantities[item.id]}</h2>
                                    <div className='flex gap-2'>
                                        <Button className='bg-yellow-900 text-sm' onClick={() => handleAdd(item.id, item.price)}>+</Button>
                                        <Button className='bg-yellow-900 text-sm' onClick={() => handleDec(item.id, item.price)}>-</Button>
                                    </div>
                                   
                                </div>
                            </div>
                            <hr/>
                            </>

                        ))}
                    </div>
                    {/* <div className="col-span-4 bg-white flex md:flex-row flex-col">
                        kj
                    </div> */}
                </section>
            </section>
        </>
    );
}

export default Cart;
