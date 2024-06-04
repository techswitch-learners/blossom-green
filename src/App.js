import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import "./App.scss"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basket: {},
    }
  }

  updateBasket = (product, action) => {
    if (product.name in this.state.basket && action == "addOne") {
      this.setState((state) => ({
        basket: { ...state.basket, [product.name]: { ...product, quantity: state.basket[product.name].quantity + 1 } },
      }))
    } else if (
      product.name in this.state.basket &&
      action == "removeOne" &&
      this.state.basket[product.name].quantity > 1
    ) {
      this.setState((state) => ({
        basket: { ...state.basket, [product.name]: { ...product, quantity: state.basket[product.name].quantity - 1 } },
      }))
    } else if (product.name in this.state.basket && action == "removeOne") {
      this.setState((state) => ({
        basket: { ...(delete state.basket[product.name] && state.basket) },
      }))
    } else if (action === "addOne") {
      this.setState((state) => ({
        basket: { ...state.basket, [product.name]: { ...product, quantity: 1 } },
      }))
    }
  }

  emptyBasket = () => {
    this.setState({
      basket: {},
    })
  }

  render() {
    return (
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/products"
              element={<Products basket={this.state.basket} updateBasket={this.updateBasket} />}
            />
            <Route path="/basket" element={<Basket basket={this.state.basket} updateBasket={this.updateBasket} />} />
            <Route path="/checkout" element={<Checkout emptyBasket={this.emptyBasket} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App
