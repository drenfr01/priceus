import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';
import { Check } from 'meteor/check';

export const Prices = new Mongo.Collection('prices');

// TODO: Figure out simple schema here

Meteor.methods({
  'prices.insert'(priceObject) {
    //TODO: Check the validity of fields here

    Prices.insert(priceObject);
  },
});
