import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Elections from './components/Elections';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: '',
        street2: '',
        city: '',
        state: '',
        zip: ''
      },
      view: 'form',
      elections: null
    };
    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  };
  
  getView() {
    switch (this.state.view) {
      case 'elections':
        return <Elections elections={ this.state.elections }/>
      case 'form':
        return <Form formChange={ this.formChange } formSubmit={ this.formSubmit }/>
      default:
        return <Form formChange={ this.formChange } formSubmit={ this.formSubmit }/>
    };
  };

  formChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form, [name]: value
      },
    }));
  };

  // mixing conditional rendering and form submission here maybe I shoul've used hooks
  // assuming the form will be perfect
  formSubmit(e) {
    e.preventDefault();
    this.postForm();
    this.setState({
      view: 'elections'
    });
  };

  async postForm() {
    const req = await axios.post('http://localhost:3001/', this.state.form);
    this.setState({ elections: req.data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.getView() }
        </header>
      </div>
    );
  };
};

export default App;