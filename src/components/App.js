/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
  // data is contained in the state
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    // retrieve the state
    const { characters } = this.state;

    // update / manipulate the state
    this.setState({
      // filter returns a new array that returns all the indices
      // in the array but the one that is passed through
      characters: characters.filter((character, i) => i !== index),
    });
  };

  // function that updates the state by taking the existing this.state.characters
  // and adding the new character parameter
  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          // Pass the data through to the child component (Table) with properties / as props
          characterData={characters}
          // pass the removeCharacter function through as a prop to Table
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
