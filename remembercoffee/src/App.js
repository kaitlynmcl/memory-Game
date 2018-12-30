import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import pic1 from "./components/Nav/images/pic1.jpg";
import pic2 from "./components/Nav/images/pic2.jpg";
import pic3 from "./components/Nav/images/pic3.jpg";
import pic4 from "./components/Nav/images/pic4.jpg";
import pic5 from "./components/Nav/images/pic5.jpg";
import pic6 from "./components/Nav/images/pic6.jpg";
import pic7 from "./components/Nav/images/pic7.jpg";
import pic8 from "./components/Nav/images/pic8.jpg";
import pic9 from "./components/Nav/images/pic9.jpg";
import pic10 from "./components/Nav/images/pic10.jpg";
import pic11 from "./components/Nav/images/pic11.jpg";
import pic12 from "./components/Nav/images/pic12.jpg";

                                            // LOADS ARRAY OF IMAGES FOR DISPLAY

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];

                                            // SETS ORIGINAL STATE OF GAME 
class App extends Component {
  state = {
    score: 0,
    
    topScore: 0,
    array: [],
    guessedCorrect: "true",
    guessedIncorrect: "false"
  };

  render() {                                // RENDERS NAV, JUMBOTRON, AND FOOTER 
    return (
      <div>
        <Nav 
         title="Coffee Brain:">
        </Nav>
        <Jumbotron />

          <div className="container">
            {images.map((pic) => (<Jumbotron
              image={pic}
              handleClickImage={this.handleClickImage}
              key={pic}
            />))}

           </div>
           <Footer />
        </div>
 
    );
  }
}
export default App;                     // EXPORTS TO APP


