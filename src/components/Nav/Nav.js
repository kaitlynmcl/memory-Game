import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li class="nav-list">
        {/* <a href="/clicky-game/">{props.title}</a> */}
      </li>
      <li class="rw">{props.rightWrong}</li>
      <li class="top">Current Score: {props.topScore}</li>
      <li class="current">Top Score: 12 </li> 
    </ul>

    <div class= "navTitle">
    Coffee Brain:
    </div>
    <div class="game-deets">
      A Memory Game
      <p class="instructions">
      Click on an image to earn points, but don't click on any more than once! 
     <p class ="i">Best played after the caffeine kicks in. </p>
  

      </p>
    </div>
  </nav>
);

export default Nav;