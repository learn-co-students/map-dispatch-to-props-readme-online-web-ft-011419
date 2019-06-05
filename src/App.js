import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
//import { addItem } from  './actions/items';

class App extends Component {
// this refrences the store this.props.store.dispatch(addItem());
  handleOnClick() {
   console.log(this.props.dispatch())
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};


export default connect(state => ({ items: state.items }))(App);
