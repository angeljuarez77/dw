import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// const BASE_URL = 'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us';
const postal_abbreviations = ["--", "AL", "AK", "AS", "AZ", "AR", "AE", "AA", "AP", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];
// 20 W 34th St, New York, NY 10001 -- Empire State Building
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
      }
    };
    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form, [name]: value
      }
    }))
  }

  formSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/', this.state.form);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onChange={ this.formChange } onSubmit={ this.formSubmit }>
          <form>
            <h1>Enter the address where you are registered to vote</h1>
            <label>
              Street: <input type="text" name="street"></input>  
            </label>
            <label>
              Street 2: <input type="text" name="street2"></input>
            </label>
            <label>
              City: <input type="text" name="city"></input>
            </label>

            <label>
              State: 
              <select name="state">
                {postal_abbreviations.map((State, Index) => <option key={ Index } value={ State }>{ State }</option>)}
              </select>
            </label>
            <label>
              Zip code: <input type="text" size="10" name="zip"></input>
            </label>
            <button type="submit">Search!</button>
          </form>
        </header>
      </div>
    );
  }
};

export default App;
