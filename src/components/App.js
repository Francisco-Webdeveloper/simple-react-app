/* eslint-disable react/state-in-constructor */
import React from 'react';
import Table from './Table';

class App extends React.Component {
  // data is contained in the state
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
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
      </div>
    );
  }
}

export default App;
