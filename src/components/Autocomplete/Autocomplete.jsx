import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import searchIcon from '@assets/imgs/icons/search.svg';
import searchIconLight from '@assets/imgs/icons/search-light.svg';
import AutocompleteStyle from './Autocomplete.scss';

const Autocomplete = props => {
  const { suggestions, isLightMode } = props;
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: true,
    userInput: '',
  });

  const handleSelect = e => {
    const { innerText } = e.currentTarget;
    // Update the user input and reset the rest of the state
    setState({
      ...state,
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: innerText,
    });
  };

  const handleChangeValue = e => {
    const { value } = e.target;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );

    setState({
      ...state,
      filteredSuggestions,
      showSuggestions: true,
      userInput: value,
    });
  };

  const handleKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      setState({
        ...state,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({
        ...state,
        activeSuggestion: activeSuggestion - 1,
      });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState({
        ...state,
        activeSuggestion: activeSuggestion + 1,
      });
    }
    // console.log('key: ', key);
  };

  const renderSuggestionsListComponent = () => {
    if (state.filteredSuggestions.length) {
      return (
        <ul className={AutocompleteStyle.suggestions}>
          {state.filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === state.activeSuggestion) {
              className = AutocompleteStyle.suggestionActive;
            }

            return (
              <li
                className={className}
                key={suggestion}
                onClick={handleSelect}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className={AutocompleteStyle.noSuggestions}>
        <em>No suggestions, you&apos;re on your own!</em>
      </div>
    );
  };

  return (
    <div className={classnames(AutocompleteStyle.Autocomplete, isLightMode ? '' : AutocompleteStyle.darkMode)}>
      <img alt="search" src={isLightMode ? searchIcon : searchIconLight} />
      <input
        type="text"
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
        value={state.userInput}
      />
      {state.showSuggestions &&
        state.userInput &&
        renderSuggestionsListComponent()}
    </div>
  );
};

export default Autocomplete;

Autocomplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  isLightMode: PropTypes.bool
};

Autocomplete.defaultProps = {
  suggestions: [],
  isLightMode: true,
};
