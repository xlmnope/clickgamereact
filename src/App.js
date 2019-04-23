import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import CardWrapper from "./components/CardWrapper";

import Navbar from "./components/Navbar";
import friends from "./friends.json";
// import Title from "./components/Title"
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0

  };

  //calculate highscore -- need to test this 
  highscore =() => {
    if (this.state.score > this.state.highscore){
      this.setState({highscore:this.state.score}, function() {
        console.log(this.state.highscore);
      })
    }
  }

  //TODO: if score is x, you win yay!
  gameover=() => {
    this.state.friends.forEach(friends => {
      friends.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.highscore();
          this.gameover();
        }
      }
      return false;
    });
  }





  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar className="header" score={this.state.score} highscore={this.state.highscore}/>
        <header >
          <h1>Clicky Game!</h1>
          <h2>Click an image! Once you click the character, don't click them again!  </h2>
        </header>
        <CardWrapper>
        {/* <Title>Match Click Game</Title> */}
        {this.state.friends.map(friend => (
          <CharacterCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            count={friend.count}
            clickCount={this.clickCount}
          />
        ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
