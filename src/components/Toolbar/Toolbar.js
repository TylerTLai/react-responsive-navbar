import React from "react";
import "./Toolbar.css";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Most Popular</a>
          </li>
          <li>
            <a href="/">Top Rated</a>
          </li>
          <li>
            <a href="/">New Releases</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
