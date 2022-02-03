/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

// Simple Components
const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        {/* button that deletes the character chosen by the user */}
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  ));
  // return a table row for each object in the array
  return <tbody>{rows}</tbody>;
};

// Class Component
class Table extends React.Component {
  render() {
    // access the data inside props
    const { characterData, removeCharacter } = this.props;
    // const { characterData } = this.props;
    // const { removeCharacter } = this.props;

    return (
      <table>
        {/* Simple components are nested in the Class Component */}
        <TableHeader />
        {/* pass the data through to the TableBody component as props */}
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

// props validations
Table.propTypes = {
  characterData: PropTypes.array.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

TableBody.propTypes = {
  characterData: PropTypes.array.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default Table;
