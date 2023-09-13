import React from 'react';

function PriceTable({ grossPrice, discountPercentage, netPrice2Decimals }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Gross Price</th>
          <th>Discount</th>
          <th>Net Price</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{grossPrice} baht</td>
            <td>{discountPercentage}%</td>
            <td>{netPrice2Decimals} baht</td>
          </tr>
      </tbody>
    </table>
  );
}

export default PriceTable;
