import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li class="nav-list">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li class="rw">{props.rightWrong}</li>

      <li class="current">Current Score: {props.score}</li>

      <li class="top">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;