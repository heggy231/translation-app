import React from "react";

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // if props.initialText is falsey, use empty String '';
      text: props.initialText || "",
    };
  }

  render() {
    return (
      <div>
        <h1>Translator</h1>
        <input type="text" onChange={(event) => {
          console.log(event.target.value);
        }} />
        <p>{this.state.text}</p>
      </div>
    );
  }

  // creating helper methods (aka: public instance field)
  _updateText = (newText) => {
    this.setState({
      text: newText,
    }, () => {
      console.log(`Text updated to: ${newText}`);
    })
  }
}

export default Translator;
