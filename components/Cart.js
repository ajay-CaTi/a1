import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  // Only Give access to specific part(not as above) of store is good optimization in a big huge application

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCartButton = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="cart_hesding">My cart</h1>
      <div className="cart_butt_sty">
        <button className="cart_butt" onClick={handleClearCartButton}>
          clear cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h2 className="cart_hesding">Cart is Empty 🤒 please add some items</h2>
      ) : (
        <div className="res_cat_sty">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};
export default Cart;
