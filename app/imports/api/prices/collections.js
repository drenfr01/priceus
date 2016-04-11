import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';
import { Check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Prices = new Mongo.Collection('prices');

// TODO: Figure out simple schema here

Meteor.methods({
  'prices.insert'(priceObject) {
    //TODO: Check the validity of fields here

    Prices.insert(priceObject);
  },
});

const priceSchema = new SimpleSchema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    decimal: true,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    defaultValue: new Date(),
  },
});

Prices.attachSchema(priceSchema);
