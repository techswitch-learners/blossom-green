import React, { Component } from "react"
import ButtonLink from "../components/ButtonLink"
import "./Checkout.scss"

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      waiting: true,
    }
  }

  componentDidMount() {
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      this.props.emptyBasket()
      this.setState({
        waiting: false,
      })
    })
  }

  render() {
    return (
      <div className="Checkout">
        {this.state.waiting && (
          <>
            <h1 className="font-mynerve">Working...</h1>
            <p>Please wait while we process your order.</p>
          </>
        )}
        {!this.state.waiting && (
          <>
            <h1 className="font-mynerve">Order complete</h1>
            <p>Thank you for shopping with Blossom Green.</p>
            <ButtonLink to="/">Back to home</ButtonLink>
          </>
        )}
      </div>
    )
  }
}

export default Checkout
