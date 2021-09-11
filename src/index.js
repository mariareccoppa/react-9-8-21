import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './MenuItem';

// Define the following variables:
//     * name for name of item assigned to 'House Blend'
//     * price for price of item assigned to 1.49
//     * description assigned to 'A smooth, <em>mild</em> blend of
//     coffees from Mexico, Bolivia and Guatemala.'

// Then replace the definition of menuItemElement1 below to use these variables so the output looks exactly the same:

let name = 'House Blend';
let Mildem = "mild"; 
let description ="A smooth, mild blend of coffees from Mexico, Bolivia and Guatemala.,"

const menuItemElement1 = (
  <div>
    <h2>House Blend, $1.49</h2>
    <p>
      A smooth, <em>mild</em> blend of coffees from Mexico, Bolivia and
      Guatemala.
    </p>
  </div>
);

// Copy/paste/modify the variables/definitions for menuItemElement2, menuItemElement3, and menuItemElement4 (BAD IDEA IN GENERAL!).  NOTE: We need to use let initially instead of const if we're changing the values of variables and then NO use of let after that.

name = 'Mocha Cafe Latte';

// After you do this, add menuItemElement2, menuItemElement3, and menuItemElement4 in the definition of the menu element:

const menuElement = (
  <div>
    <MenuItem name="foo" />
    {menuItemElement1}
  </div>
);

ReactDOM.render(menuElement, document.getElementById('root'));



