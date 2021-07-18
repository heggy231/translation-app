import React from "react";
import rot13 from "rot-thirteen";

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // if props.initialText is falsey, use empty String '';
      text: props.initialText || "",
      translated: rot13(props.initialText) || "",
    };
  }

  render() {
    return (
      <div>
        <h1>Translator</h1>
        <input type="text" onChange={this._updateText} />
        <p>{this.state.text}</p>
        <p>{this.state.translated}</p>
      </div>
    );
  }

  // creating helper methods (aka: public instance field)
  _updateText = (event) => {
    const newText = event.target.value;
    this.setState(
      {
        text: newText,
        translated: rot13(newText),
      },
      () => {
        console.log(`Text updated to: ${newText}`);
      }
    );
  };
}

export default Translator;
