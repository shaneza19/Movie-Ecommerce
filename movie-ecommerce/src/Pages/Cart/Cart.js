import React, { useState, useEffect } from "react";
import CartTable from "../../Components/CartTable";
import PriceTable from "../../Components/PriceTable";
import Modal from "../../Components/Modal";
import paymentMethod from'./paymentMethod.jpg';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const columns = [
    { key: "id", title: "ID" },
    { key: "title", title: "Title" },
    { key: "popularity", title: "Price" },
  ];

  /*
  To sum a property in an array of objects:
1.Use the reduce() method to iterate over the array.
2.On each iteration increment the sum with the specific value.
3.The result will contain the sum of the values for the specific property.
  */
  const grossPrice = cart.reduce((accumulator, object) => {
    return accumulator + Math.round(object.popularity);
  }, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);

  /*caculate discount % whenever number of movies in the cart changes
if more than 3 movies = 10%,
if more than 5 movies = 20%,
otherwise = 0%
  */
  useEffect(() => {
    if (cart.length < 4) {
      setDiscountPercentage(0);
    }
    if (cart.length > 3) {
      setDiscountPercentage(10);
    }
    if (cart.length > 5) {
      setDiscountPercentage(20);
    }
  }, [cart]);

  const netPrice = grossPrice * (1 - discountPercentage / 100);
  const netPrice2Decimals = (Math.round(netPrice * 100) / 100).toFixed(2);

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart?.map((item) => (
        <CartTable
          item={item}
          columns={columns}
          removeFromCart={removeFromCart}
        />
      ))}

      <div className="center-container">
        <div className="price-container">
          <PriceTable
            grossPrice={grossPrice}
            discountPercentage={discountPercentage}
            netPrice2Decimals={netPrice2Decimals}
          />
        </div>
      </div>
      <button className="clear-button" onClick={clearCart}>
        Clear shopping cart
      </button>

      <button className="buy-button" onClick={openModal}>Buy Now</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img  src={paymentMethod} alt="paymentMethod" width="400px" height="400px"/>
        <p>Net Price = {netPrice2Decimals} baht</p>
        <p>Order ID =  {Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}</p>
      </Modal>
    </div>
  );
};

export default Cart;
