import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="">Burger Builder Application</a>
      </div>
      <NavigationItems/>
    </div>
  </nav>
)

export default toolbar;
