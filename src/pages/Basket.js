import React from "react"
import ButtonLink from "../components/ButtonLink"
import "./Basket.scss"

const Basket = (props) => {
  return (
    <div className="Basket">
      <h1 className="font-mynerve">Your Basket</h1>
      <section>
        {Object.keys(props.basket).length === 0 && (
          <>
            <p>Your basket is currently empty.</p>
            <ButtonLink to="/products">Shop now</ButtonLink>
          </>
        )}
        {Object.keys(props.basket).length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(props.basket).map((productName) => (
                  <tr key={productName}>
                    <td>
                      {productName} (£{props.basket[productName].price.toFixed(2)})
                    </td>
                    <td>{props.basket[productName].quantity}</td>
                    <td>£{(props.basket[productName].quantity * props.basket[productName].price).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <th colSpan={2} scope="row">
                    Total
                  </th>
                  <td>
                    £
                    {Object.values(props.basket)
                      .reduce((runningTotal, product) => runningTotal + product.quantity * product.price, 0)
                      .toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="button-container">
              <ButtonLink to="/checkout" variant="secondary">
                Check out
              </ButtonLink>
              <ButtonLink to="/products">Continue shopping</ButtonLink>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Basket
