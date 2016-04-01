// This will run on client initialization
import React from 'react';
import {mount} from 'react-mounter';

// load React components
// import {SearchLayout, Search} from '../../ui/components/search.jsx';
import {AddPriceLayout, AddPrice} from '../../ui/components/addPrice.jsx';

// FlowRouter.route("/", {
//   action() {
//     mount(SearchLayout, {
//       content: (<Search/>)
//     });
//   }
// });

FlowRouter.route("/add-price", {
  action() {
    mount(AddPriceLayout, {
      content: (<AddPrice name="Tyler"/>)
    });
  }
});
