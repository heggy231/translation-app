# translation-app

- package: [rot-thirteen](https://www.npmjs.com/package/rot-thirteen)

  * How to use:
    > npm i rot-thirteen // install the package
    
    > const rot13 = require("rot-thirteen");
    > rot13('hello')

## Translator.js 

* _updateText()


```jsx

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

    _updateText = (event) => {
        const newText = event.target.value;
        this.setState({
            text: newText,
            translated: rot13(newText)
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```

`_updateText()` has 2 responsibilities:

    - Deal with the Event Obj
    - Cal this.setState()

    - negative constraints:
      * `_updateText()` can only be used as a Event Handler fx.  You can't pass it text retrived from an API, or run it manually to test it out.

      * Using an anonymous function keeps `_updateText()` flexible.

  - option 2 refactor:

```jsx
render() {
    return (
  <input type="text" onChange={(event) => {
    console.log(event.target.value);
    this._updateText(event.target.value);
  }}>
}

_updateText = (newText) => {
// pass in newText, replace state obj
  this.setState({
    text: newText,
    translated: rot13(newText)
  }, () => {
    console.log(`Text updated to: ${newText}`);
  })
}
```