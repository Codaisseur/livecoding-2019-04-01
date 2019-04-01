import React, { Component } from 'react';
import './App.css';

import _ from "lodash"

import Teacher from "./Teacher"

class App extends Component {

  state = {
    teachers: [
      { name: "Kelley", numLikes: 6 },
      { name: "Arien", numLikes: 670 },
      { name: "Mimi", numLikes: 1234 },
      // ..and more lovely teachers!
    ]
  }

  likeTeacher = (name) => {
    this.setState({
      teachers: this.state.teachers.map(
        teacher => {
          if (teacher.name === name) {
            teacher.numLikes += 500;
          }
          return teacher;
        }
      ),
    })
  }

  render() {

    let teachers = this.state.teachers.slice();
    teachers = _.orderBy(teachers, ['numLikes']);

    return (
      <div className="App">
        Watup! Saved
        <ul>
          {teachers.map(teacher => (
            <li>
              <Teacher
                name={teacher.name}
                numLikes={teacher.numLikes}
                whenLiked={() => this.likeTeacher(
                  teacher.name
                )}
                newProp="Kelley"
              />
            </li>
          ))}
        </ul>
        <p>
          Number of really popular teachers:
          {
            this.state.teachers
              .filter(t => t.numLikes > 2000)
              .length
          }
        </p>
      </div>
    );
  }
}

export default App;
