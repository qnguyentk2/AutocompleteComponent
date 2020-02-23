import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import GlobalContext from '@contexts/GlobalContext';
import AutocompleteStyle from './Autocomplete.scss';

const AutocompleteCtrls = () => {
  const suggestions = ['Hồ Chí Minh', 'Hội An', 'Hà Nội'];
  const { isLightMode } = useContext(GlobalContext);
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: true,
    userInput: '',
  });

  const handleSelect = e => {
    const { innerText } = e.currentTarget;

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

    // key enter
    if (e.keyCode === 13) {
      setState({
        ...state,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // key up
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({
        ...state,
        activeSuggestion: activeSuggestion - 1,
      });
    }
    // key down
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
        <div className={AutocompleteStyle.wrapper}>
          <ul className={AutocompleteStyle.suggestions}>
            {state.filteredSuggestions.map((suggestion, index) => {
              let className;

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
        </div>
      );
    }

    return (
      <div className={classnames(AutocompleteStyle.noSuggestions, AutocompleteStyle.darkMode)}>
        <em>No suggestions, you&apos;re on your own!</em>
      </div>
    );
  };

  return {
    state,
    isLightMode,
    handleChangeValue,
    handleKeyDown,
    renderSuggestionsListComponent
  }
}

export default AutocompleteCtrls;
