import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Contact from './components/Contact'

class App extends Component {

  render() {
  // const { name, surname, age } = this.props.user;

    return (
      <div className="App">
          <Header/>
          <Content/>
          <Contact/>
          <Footer/>          
      </div>
  );
  }
}

// const mapStateToProps = state => ({
//   items: state.App.Items.List,
//   filters: state.App.Items.Filters,
// });

export default App;
