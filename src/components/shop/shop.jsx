import { useState } from "react";
import { CATEGORIES } from "./categories";
import Category from "./category";
import './shop_style.css'
import CartVariable from "./cart";
import { PRODUCTS } from "./products";

const Shop = () => {

    const getDefaultCart = () => {
        let cart={}
        for(let i=1; i<PRODUCTS.length +1; i++)
        {
            cart[i] =0;
        }
        return cart
    }

    const [cartItems, setCartItems]= useState(getDefaultCart())
    const addToCart = (item_id) => {
        if(item_id==26)
        {
            console.log("Hello hELLO hellooo")

        }
        setCartItems((prev) => ({...prev, [item_id]: prev[item_id] +1 }))
        console.log(cartItems)
    }

    const removeFromCart = (item_id) => {
        
        setCartItems((prev) => ({...prev, [item_id]: prev[item_id] -1 }))  
    }

    const removeEntirely = (item_id) => {

        setCartItems((prev) => ({...prev, [item_id]: 0 }))  
    }

    const EmptyCart = () => {
        setCartItems((curr)=>getDefaultCart())
    }
    return ( 
        <div id="shop">
            <div className="catss">
                {
                    CATEGORIES.map((cat)=> <Category key={cat.id+"cat"} title={cat.title} addToCart={addToCart}/>)
                }
            </div>
            <CartVariable addToCart={addToCart} removeFromCart ={removeFromCart } removeEntirely={removeEntirely} EmptyCart ={EmptyCart} cartItems= {cartItems}/>
        </div>
     );
}
 
export default Shop;
