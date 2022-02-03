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
  // eslint-disable-next-line react/destructuring-assignment
  const rows = props.characterData.map((index, row) => (
    <tr key={index}>
      <td>{row}</td>
      <td>{row}</td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

// Class Component
class Table extends React.Component {
  render() {
    // access the data inside props
    const { characterData } = this.props;

    return (
      <table>
        {/* Simple components are nested in the Class Component */}
        <TableHeader />
        {/* pass the data through to the TableBody component as props */}
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

// props validations
Table.propTypes = {
  characterData: PropTypes.array.isRequired,
};

TableBody.propTypes = {
  characterData: PropTypes.array.isRequired,
};

export default Table;
