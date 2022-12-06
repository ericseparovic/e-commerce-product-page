import Button from "./Button";
import ProductBasket from "./ProductBasket";

function Cart({ productInfo, setProductInfo }) {
  const handleDelete = () => {
    setProductInfo("");
  };

  return (
    <div className="header__cart-container">
      <h4 className="header__cart-h4">Cart</h4>
      <div className="header__cart-basket">
        {productInfo == "" ? (
          <p className="header__cart-p">Your cart is empty</p>
        ) : (
          <ProductBasket
            productInfo={productInfo}
            handleDelete={handleDelete}
          />
        )}

        <Button value={"Checkout"} />
      </div>
    </div>
  );
}

export default Cart;
