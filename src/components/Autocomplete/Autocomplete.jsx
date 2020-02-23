import React from 'react';
import classnames from 'classnames';
import searchIcon from '@assets/imgs/icons/search.svg';
import searchIconLight from '@assets/imgs/icons/search-light.svg';
import AutocompleteStyle from './Autocomplete.scss';
import AutocompleteCtrls from './AutocompleteCtrls';

const Autocomplete = props => {
  const { 
    state,
    isLightMode,
    handleChangeValue,
    handleKeyDown, 
    renderSuggestionsListComponent 
  } = AutocompleteCtrls(props);

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
