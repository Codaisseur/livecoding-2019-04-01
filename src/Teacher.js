import React, { Component } from 'react';

class Teacher extends Component {

  like = () => {
    console.log("i was liked (teacher)")
    console.log(this.props)
    this.props.whenLiked()
  }

  render() {
    return (
      <div>
        Hi, I'm {this.props.name}.
        <strong>Number of likes: {this.props.numLikes}</strong>
        <button onClick={this.like}>Like this!</button>
      </div>
    );
  }
}

export default Teacher;