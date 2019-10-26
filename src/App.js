import React, { Component } from 'react';
import Currency from './components/Currency'
import Navbar from './components/Navbar'

class App extends Component {

  render() {
  // const { name, surname, age } = this.props.user;

    return (
      <div className="App">
          <Navbar/>
          <Currency/>
      </div>
  );
  }
}

// const mapStateToProps = state => ({
//   items: state.App.Items.List,
//   filters: state.App.Items.Filters,
// });

export default App;
