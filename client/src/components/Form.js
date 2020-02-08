import React from 'react';

const postal_abbreviations = ["--", "AL", "AK", "AS", "AZ", "AR", "AE", "AA", "AP", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];
function Form(props) {
  return (
    <form onChange={ props.formChange } onSubmit={ props.formSubmit }>
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
  );
};

export default Form;