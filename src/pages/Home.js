import React from "react"
import ButtonLink from "../components/ButtonLink"
import colourfulBouquet from "../assets/home/colourful-bouquet.jpeg"
import redAndWhiteBouquet from "../assets/home/red-and-white-bouquet.jpeg"
import wildflowers from "../assets/home/wildflowers.jpeg"
import pinkBouquet from "../assets/home/pink-bouquet.jpeg"
import eventFlowers from "../assets/home/event-flowers.jpeg"
import "./Home.scss"

const Home = () => {
  return (
    <div className="Home">
      <section className="heading-section">
        <div className="heading-container">
          <h1 className="font-mynerve">Welcome</h1>
          <p>
            Find the perfect flowers
            <br />
            for any occasion.
          </p>
        </div>
      </section>
      <section className="trends-section">
        <h2>Seasonal trends</h2>
        <div className="image-container">
          <img src={colourfulBouquet} alt="A colourful bouquet" className="wide-image" />
          <img src={redAndWhiteBouquet} alt="A red and white bouquet" className="square-image" />
          <img src={wildflowers} alt="A handful of wildflowers" className="square-image" />
          <img src={pinkBouquet} alt="A pink bouquet" className="wide-image" />
        </div>
        <p>
          <ButtonLink to="/products">Shop now</ButtonLink>
        </p>
      </section>
      <section className="history-section">
        <div className="history-container">
          <h2 className="font-mynerve">Delivering flowers around the Southeast</h2>
          <p>
            Established as a small boutique in North London in 2005, we have since expanded to multiple locations across
            the wider region.
          </p>
        </div>
      </section>
      <section className="events-section">
        <h2>Events</h2>
        <p>
          Find out how we can help you with
          <br />a function, wedding or other ceremony.
        </p>
        <img src={eventFlowers} alt="Flowers for an event" />
        <p>
          <ButtonLink to="mailto:blossomgreen@example.com" variant="secondary">
            Contact us
          </ButtonLink>
        </p>
      </section>
    </div>
  )
}

export default Home
