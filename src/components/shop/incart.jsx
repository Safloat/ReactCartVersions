
import { PRODUCTS } from "./products";


const InsideCart = (props) => {
    const {removeFromCart,addToCart,removeEntirely } = props;

    if (props.ob[props.data])
    return (
    <div className="cart_internal bordering" key={props.data+ "cart"}>
        <h3>{PRODUCTS[props.data-1].title}</h3>
        <div>
        <h3>{props.ob[props.data]}</h3>
        <button className="plus" onClick={()=>addToCart(props.data)}>+</button>
        <button className="minus" onClick={()=>removeFromCart(props.data)}>-</button>
        <button className="del" onClick={()=>removeEntirely(props.data)}>Remove</button>
        </div>
        <h3>{PRODUCTS[props.data-1].price * props.ob[props.data]}</h3>
    </div>  );
}
 
export default InsideCart;

