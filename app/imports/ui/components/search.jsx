import React from 'react'; import {Prices} from '../../api/prices/collections.js'

//Smart Component
export const SearchLayout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData () {
    var limit = 10;
    var skip = 10;
    Meteor.subscribe('searchPrices', this.state.name, limit, skip);
    return {
      prices: Prices.find().fetch()
    }
  },

  getInitialState: function() {
    return {
      name: null
    }
  },

  setSearch(event) {
    this.setState({name: event.target.value})
  },

  render() {
    return (
      <div>
        <h1>Search Prices</h1>
        <hr />
        <form>
          How much does a
          <input autoFocus type="text" placeholder="Coffee" onChange={this.setSearch} />
          cost in
          <input type="text" placeholder="Somerville" />?
        </form>
        <SearchResults prices={this.data.prices} />
      </div>
    )
  }
});

//Dumb component
//TODO: separate out a price, price results, search, price graph?
export const SearchResults = React.createClass({

  //TODO: put event handlers here and attach them to html
  //approach is to define reactive var and then update it
  //on the event function. Then we use the reactive data
  //context in getMeteorData to pass it to publication

  renderPrice(price, index) {
    return (
      <PriceResult price={ price } key={ index } />
    )
  },

  render() {
    //TODO: unlike blaze, we put capture element directly into
    //html then handle it
    return (
      <div>
        {this.props.prices.map(this.renderPrice)}
      </div>
    )
  }
});

const PriceResult = React.createClass({
  // TODO: I think this should get pulled out into a UI helpers class
  formatCurrency(number) {
    return parseFloat(number).toFixed(2);
  },

  render() {
    return (
      <div key={ this.props.price.key }>
        <h2>{ this.props.price.name } in { this.props.price.location }</h2>
        <p>$ { this.formatCurrency(this.props.price.price) }</p>
      </div>
    )
  }
})
