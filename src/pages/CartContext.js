import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (car) => {
        const carWithParsedPrice = {
            ...car,
            price: parseFloat(car.price.replace(/[^0-9.-]+/g,"")) // remove any non-numeric characters and parse to float
        };
        setCart([...cart, carWithParsedPrice]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(car => car.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
