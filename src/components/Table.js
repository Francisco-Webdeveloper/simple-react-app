import React from 'react';

// Simple Components
const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
);

const TableBody = () => (
  <tbody>
    <tr>
      <td>Charlie</td>
      <td>Janitor</td>
    </tr>
    <tr>
      <td>Mac</td>
      <td>Bouncer</td>
    </tr>
    <tr>
      <td>Dee</td>
      <td>Actress</td>
    </tr>
    <tr>
      <td>Dennis</td>
      <td>Bartender</td>
    </tr>
  </tbody>
);

// Class Component
class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
