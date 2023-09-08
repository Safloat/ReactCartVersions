import { PRODUCTS } from "./products";
const Products = (props) => {

  
  const{addToCart} = props;

    return ( 
         <>{PRODUCTS.map((cat)=> { if(cat.catg===props.data)
         {
            return <div className="item_title" onClick={()=> addToCart(cat.idn)} key={cat.idn}>{cat.title}</div>
         }
        })}</>
     );
}
 
export default Products;