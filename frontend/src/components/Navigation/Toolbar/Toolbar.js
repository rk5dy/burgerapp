import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Burger Builder Application</a>
      </div>
      <NavigationItems/>
    </div>
  </nav>
)

export default toolbar;
