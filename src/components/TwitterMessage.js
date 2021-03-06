import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleInputChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange} />
        <span> {this.props.maxChars-this.state.message.length} characters remaining </span>
      </div>
    );
  }
}

export default TwitterMessage;
