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
        <div>
          <input type="text" name="search"
            onChange={this.setSearch}></input>
        </div>
        <div><Search prices={this.data.prices} /></div>
      </div>
    )
  }
});

//Dumb component
//TODO: separate out a price, price results, search, price graph?
export const Search = React.createClass({

  //TODO: put event handlers here and attach them to html
  //approach is to define reactive var and then update it
  //on the event function. Then we use the reactive data
  //context in getMeteorData to pass it to publication

  renderPrice(price, index) {
    return (
      <PriceResult name={ price.name } price={ price.price } />
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

export const PriceResult = React.createClass({
  render() {
    return (
      <div>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.price }</p>
      </div>
    )
  }
})
