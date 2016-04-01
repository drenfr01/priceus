import "../imports/startup/client/init.js"

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<p> Hello World, React appears to be working </p>, document.getElementById('render-target'));
});
