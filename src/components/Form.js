/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  // props validation
  static propTypes = {
    handleSubmit: propTypes.func.isRequired,
  };

  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    // update the state of the form everytime a field is changed in the form
    this.setState({
      // set the state to have the 'name' (key) and 'value' of the inputs
      [name]: value,
    });
  };

  submitForm = () => {
    // we call the handleSubmit function and pass the Form state as the character parameter
    this.props.handleSubmit(this.state);
    // reset the state to the initial state, to clear the form after submit
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name} // we assign the state properties as the values of the form keys
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job} // we assign the state properties as the values of the form keys
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
