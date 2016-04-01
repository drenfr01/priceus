import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Prices } from '../../api/prices/collections.js'

export class AddPrice extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const price = ReactDOM.findDOMNode(this.refs.price).value.trim();
    const location = ReactDOM.findDOMNode(this.refs.location).value.trim();

    priceObject = {
      name: name,
      price: price,
      location: location,
      createdAt: new Date(), // current time
    }

    Meteor.call('prices.insert', priceObject);

    // Clear form
    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.price).value = '';
    ReactDOM.findDOMNode(this.refs.location).value = '';
  }

  render() {
    return (
      <form className="new-price" onSubmit={this.handleSubmit.bind(this)} >
        A
        <input
          type="text"
          ref="name"
          placeholder="coffee"
          autofocus
        />
         costs
        <input
          type="number"
          ref="price"
          placeholder="3.50"
        />
         in
        <input
          type="text"
          ref="location"
          placeholder="Somerville"
        />
        <input type="submit" value="Submit Price"/>
      </form>
    );
  }
}

export const AddPriceLayout = ({content}) => (
    <div>
      <header>
        Add a price for a
      </header>
      <main>
        {content}
      </main>
    </div>
);
