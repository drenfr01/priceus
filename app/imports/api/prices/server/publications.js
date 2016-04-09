import { Meteor } from 'meteor/meteor';

import { Prices } from '../collections.js'


Meteor.publish('allPrices', () => {
  return Prices.find();
});

Meteor.publish('searchPrices', (name, limit, skip) => {
  check(limit, Match.Integer);
  check(skip, Match.Integer);

  var selector = name ? {name: {$regex: name, $options: "i" } } : {};

  return Prices.find(selector);
});
