import { Meteor } from 'meteor/meteor';

import { Prices } from '../collections.js'


Meteor.publish('allPrices', () => {
  return Prices.find();
});

Meteor.publish('searchPrices', (searchTerm, limit, skip) => {
  check(limit, Match.Integer);
  check(skip, Match.Integer);

  const selector = searchTerm ? {name: {$regex: searchTerm, $options: "i" } } : { _id: 0 };

  return Prices.find(selector);
});
