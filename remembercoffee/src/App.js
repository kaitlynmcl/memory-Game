import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Title from "./components/Title";
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
    currentScore: 0,
    topScore: 0,
    array: [],
    correct: "true",
    incorrect: "false",
    rightWrong: ""
  };

  shuffleImgs = arr => {                  // SHUFFLES THROUGH IMAGES TO DISPLAY BEST RESULTS
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClickImage = elem => {            // EVENT HANDLER FOR CLICKING ON IMAGES
    var newArray = [...this.state.array]; // CREATES NEW ARRAY TO ITERATE THROUGH CHANGING STATE

    if (newArray.length === 0) {
      newArray.push(elem);
      this.setState({
        correct: "true"
      });
      if (this.state.currentScore >= this.state.topScore) {
        this.setState({
          currentScore: this.state.currentScore + 1,
          topScore: this.state.topScore + 1,
          array: newArray,
          correct: "true"
        });
        console.log("%ccorrect!", "color: green");
      } else {
        this.setState({
          currentScore: this.state.currentScore + 1,
          topScore: this.state.topScore,
          array: newArray
        });
        console.log("%ccorrect!", "color: green");
      }
    } else {
      const found = newArray.includes(elem);

      if (!found) {
        newArray.push(elem);
        if (this.state.currentScore >= this.state.topScore) {
          this.setState({
            currentScore: this.state.currentScore + 1,
            topScore: this.state.topScore + 1,
            array: newArray,
            correct: "true"
          });
          console.log("%ccorrect!", "color: green");
        } else {
          this.setState({
            currentScore: this.state.currentScore + 1,
            topScore: this.state.topScore,
            array: newArray,
            correct: "true"

          });
          console.log("%ccorrect!", "color: green");
        }

      //  } else if (topScore ===12) {  TODO: MAKE WINNING UPDATE!
      // this.setState({ rightWrong: "You win!" });
      // };
  
   
      } else {
        this.setState({
          currentScore: 0,
          topScore: 0,
          array: [],
          correct: "false"
        });
        console.log("%cincorrect :/", "color: red");
      }
    }

    console.log(newArray);
    this.shuffleImgs(images);
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.shuffleImgs();
  };


  render() {                                // RENDERS NAV, JUMBOTRON, AND FOOTER 
                             
    return (
      <div>
        <Nav
          title="Coffee Brain:"
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}>
        </Nav>
        <Jumbotron />
        {/* DISPLAYS IMAGES IN JUMBOTRON  */}
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


