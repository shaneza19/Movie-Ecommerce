import React from "react";

const CartTable = ({ item, columns, removeFromCart }) => {
  return (
    <div className="center-container">
    <table>
      <tbody>
        <tr key={item.id}>
          <td key={item.id}>{item.title} - </td>
          <td key={item.id}>{Math.round(item.popularity)} baht</td>
          <td>
            <button onClick={() => removeFromCart(item)}>🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default CartTable;
