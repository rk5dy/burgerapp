import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <ul className="nav navbar-nav">
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
)

export default navigationItems;
