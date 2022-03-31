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
      data: Object, 'data.block': SimpleSchema.Integer, 'data.block_added': SimpleSchema.Integer, 'data.elevation': SimpleSchema.Integer, 'data.gain': SimpleSchema.Integer, 'data.geocode': Object, 'data.geocode.city_id': String, 'data.geocode.long_city': String, 'data.geocode.long_country': String, 'data.geocode.long_state': String, 'data.geocode.long_street': String, 'data.geocode.short_city': String, 'data.geocode.short_country': String, 'data.geocode.short_state': String, 'data.geocode.short_street': String, 'data.last_change_block': SimpleSchema.Integer, 'data.last_poc_challenge': SimpleSchema.Integer, 'data.lat': Number, 'data.lng': Number, 'data.location': String, 'data.location_hex': String, 'data.mode': String, 'data.name': String, 'data.nonce': SimpleSchema.Integer, 'data.owner': String, 'data.payer': String, 'data.reward_scale': Number, 'data.status': Object, 'data.status.height': SimpleSchema.Integer, 'data.status.listen_addrs': {
        type: Array,
        minCount: 1,
        maxCount: 1,
      }, 'data.status.listen_addrs.$': String,
      'data.status.online': String, 'data.status.timestamp': String, 'data.timestamp_added': String,
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
