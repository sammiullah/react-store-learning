import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {

    const {cart } = value;
    return (
        <div>

{
    cart.map((item)=>
    <CartItem key={item.id} value={item} plus={value.increment} minus={value.decrement} removeItem = {value.removeItem}></CartItem>
    )
}
           
        </div>
    )
}
