import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import Pallets from './pallets.json';
import Inventory from './inventory.json';
import PalletList from './PalletList';


function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return Inventory.filter(item => regex.test(item.item_code));
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.item_code}</span>
  );
}

function getPalletList(sku) {
  const pallets = Pallets;
  const results = pallets.filter(pallet => pallet.inventory_id === sku);
  console.log(results);
  return results;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };    
  }

  getSuggestionValue = (suggestion) => {
    console.log(suggestion);
    let results = getPalletList(suggestion.id);
    return suggestion.id;
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <React.Fragment>
        <h1>Pallet Selection</h1>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <button>CLEAR</button>
        <PalletList selected={this.state.value} />
      </React.Fragment>
    );
  }
};

export default App;