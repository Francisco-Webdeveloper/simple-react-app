import React from 'react';
import Table from './Table';

class App extends React.Component {
  render() {
    const characters = [
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
    ];

    return (
      <div className="container">
        {/* Pass the data through to the child component (Table) with properties */}
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
