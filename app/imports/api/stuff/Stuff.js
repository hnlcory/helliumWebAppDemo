import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class StuffsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StuffsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      owner: String,
      // eslint-disable-next-line max-len
      data: Object, 'data.block': SimpleSchema.Integer, 'data.block_added': SimpleSchema.Integer, 'data.elevation': SimpleSchema.Integer, 'data.gain': SimpleSchema.Integer, 'data.last_change_block': SimpleSchema.Integer, 'data.last_poc_challenge': SimpleSchema.Integer, 'data.lat': Number, 'data.lng': Number, 'data.location': String, 'data.location_hex': String, 'data.mode': String, 'data.name': String, 'data.nonce': SimpleSchema.Integer, 'data.owner': String, 'data.payer': String, 'data.reward_scale': Number, 'data.timestamp_added': String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const Stuffs = new StuffsCollection();
