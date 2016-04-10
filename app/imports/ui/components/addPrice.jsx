import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Prices } from '../../api/prices/collections.js'

export const AddPrice = React.createClass({
  getInitialState() {
    // TODO: this.state.prices maybe wants to be a list of price objects, e.g. {name, price, loc}, I think this gives us the ability to save entries on reload and fun stuff like that
    return { prices: [1] }
  },

  // This is a callback that gets passed down into the priceForm, when
  // submission is complete, this fires and adds a new row
  addNewPriceFormRow() {
    const priceFormRows = this.state.prices,
          highestKey = priceFormRows[priceFormRows.length - 1];
    priceFormRows.push(highestKey + 1);
    this.setState({ prices: priceFormRows });

  },

  render() {
    priceForms = []
    for (var priceForm of this.state.prices) {
      priceForms.push(<AddPriceForm key={priceForm} submissionCompleteCallback={this.addNewPriceFormRow}/>)
    }
    return (
      <div>{ priceForms }</div>
    )
  },
});

export const AddPriceForm = React.createClass({
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
        self.props.submissionCompleteCallback();
      } else {
        alert(e);
      }
    });
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
