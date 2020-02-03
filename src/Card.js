import React from "react";
import UserInteraction from "./UserInteraction";

const Prompt = props => {
  return (
    <div className="prompt">
      <em>{props.prompt}</em>
    </div>
  );
};

class Clue extends React.Component {
  /* Renders the clue prompt, and displays the clue once the user clicks it */
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  render() {
    /* The clue is created by replacing the correct word with a blank in the example sentence */
    const clue = this.props.example.replace(this.props.wordStr, "______");
    if (this.state.isClicked) {
      return <div className="clue"> {clue} </div>;
    }
    return (
      <div
        className="clue-prompt"
        onClick={() => this.setState({ isClicked: true })}
      >
        Click here for a clue
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.prompt = this.props.word["definition"];
    this.example = this.props.word["example"];
    this.wordStr = this.props.word["string"];
  }

  render() {
    return (
      <div className="card">
        <p>Guess one word for </p>
        <Prompt prompt={this.prompt} />
        <Clue example={this.example} wordStr={this.wordStr} />
        <UserInteraction wordStr={this.wordStr} />
      </div>
    );
  }
}

export default Card;
