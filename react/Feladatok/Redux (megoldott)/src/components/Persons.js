import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";
import AddPerson from "./AddPerson";
import { ADD_PERSON, DELETE_PERSON } from "./store/actions";

export class Persons extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) =>
      dispatch({ type: ADD_PERSON, payload: { personData: { name, age } } }),
    onDeletePerson: (id) =>
      dispatch({ type: DELETE_PERSON, payload: { personId: id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
