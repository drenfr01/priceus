import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'
// Import prices collection:
import { Prices } from "../api/prices/collections.js"

class App extends Component {
  render () {
    // return <p>Rendering a react component works</p>
    arr = this.props.prices.map((price) => (
      <h1>price is { price.price }</h1>
    ));
    if (arr.length === 0) {return <h1>No Prices</h1>}
    return arr[0]
  }
}


export default createContainer(() => {
  Meteor.subscribe('allPrices')

  return {
    prices: Prices.find({}).fetch(),
  };
}, App);
