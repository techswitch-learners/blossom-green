import React, { Component } from "react"
import { getProducts } from "../api/client"
import Button from "../components/Button"
import "./Products.scss"

const Product = ({ basketCount, addOne, removeOne, ...product }) => {
  return (
    <div className="Product">
      <img
        src={product.image}
        alt={`A bouquet named ${product.name}`}
        style={{ objectPosition: product.position ?? "center" }}
      />
      <div className="details">
        <h2 className="font-mynerve">{product.name}</h2>
        <p className="price">£{product.price}</p>
        <Button onClick={removeOne} disabled={basketCount === 0}>
          &ndash;
        </Button>
        <span>{basketCount}</span>
        <Button onClick={addOne} variant="secondary">
          +
        </Button>
        <p>currently in your basket</p>
      </div>
    </div>
  )
}

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: undefined,
      loading: true,
      error: false,
    }
  }

  loadProducts = () => {
    this.setState({
      products: undefined,
      loading: true,
      error: false,
    })
    getProducts()
      .then((data) =>
        this.setState({
          products: data,
          loading: false,
          error: false,
        }),
      )
      .catch(() =>
        this.setState({
          products: undefined,
          loading: false,
          error: true,
        }),
      )
  }

  componentDidMount() {
    this.loadProducts()
  }

  render() {
    return (
      <div className="Products">
        <h1 className="font-mynerve">Our Products</h1>
        <section className="products-section">
          {this.state.products &&
            this.state.products.map((product) => (
              <Product
                key={product.name}
                {...product}
                basketCount={this.props.basket[product.name]?.quantity ?? 0}
                addOne={() => this.props.updateBasket(product, "addOne")}
                removeOne={() => this.props.updateBasket(product, "removeOne")}
              />
            ))}
          {this.state.loading && <p className="text-loading">Loading products...</p>}
          {this.state.error && (
            <div>
              <p className="text-error">Unable to load products at this time.</p>
              <Button onClick={this.loadProducts}>Try again</Button>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Products
