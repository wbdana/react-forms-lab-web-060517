import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invalid: true,
      input: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
    if ( (e.target.value.split('\n').length === 3) && (e.target.value.split('\n')[0].split(' ').filter((i) => { return i !== ""}).length === 5) && (e.target.value.split('\n')[1].split(' ').filter((i) => { return i !== ""}).length === 3) && (e.target.value.split('\n')[2].split(' ').filter((i) => { return i !== ""}).length === 5)) {
      this.setState({
        invalid: false
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        {this.state.invalid && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
