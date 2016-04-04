import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Prices } from '../../api/prices/collections.js'

export const AddPrice = React.createClass({
  getInitialState() {
    return { submissionComplete: false };
  },

  handleSubmit(event) {
    event.preventDefault();
    const self = this;
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

    Meteor.call('prices.insert', priceObject, function (e, r) {
      if(e === undefined) {
        self.setState({ submissionComplete: true });
      } else {
        alert(e);
      }
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.price).value = '';
    ReactDOM.findDOMNode(this.refs.location).value = '';
  },

  render() {
    return (
      <form className="new-price" onSubmit={this.handleSubmit} >
        A
        <input
          autoFocus
          type="text"
          ref="name"
          placeholder="coffee"
        />
         costs
        <input
          type="number"
          step="0.01"
          min="0"
          ref="price"
          placeholder="3.50"
        />
         in
        <input
          type="text"
          ref="location"
          placeholder="Somerville"
        />
        { !this.state.submissionComplete ? <input type="submit" value="Submit Price"/> : <input type="submit" value="Submit Price" disabled/> }
        { this.state.submissionComplete ? <i className="fa fa-check"></i> : null }
      </form>
    );
  },
});

export const AddPriceLayout = ({content}) => (
    <div>
      <header>
        Price Submission Form
      </header>
      <main>
        {content}
      </main>
    </div>
);
