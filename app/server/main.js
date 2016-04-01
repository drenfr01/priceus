import { Meteor } from 'meteor/meteor';

import '../imports/startup/server/fixtures.js';

// Set up our server collections
import '../imports/api/prices/collections.js'
import '../imports/api/prices/server/publications.js'
// TODO: Should we be importing something more like ../imports/api/prices/server.js and have that server.handle all the imports for the prices module?
