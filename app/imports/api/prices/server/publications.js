import { Meteor } from 'meteor/meteor';

import { Prices } from '../collections.js'


Meteor.publish('allPrices', () => {
  return Prices.find();
})
