import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>Max characters: {this.props.maxChars}</p>
        <p>{this.props.maxChars - this.state.input.length} characters remaining!</p>
      </div>
    );
  }
}

export default TwitterMessage;
