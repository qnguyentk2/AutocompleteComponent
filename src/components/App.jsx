import React from 'react';
import Header from '@components/Header/Header';
import Autocomplete from '@components/Autocomplete/Autocomplete';
import styles from './styles.scss';

const suggestions = ['Hồ Chí Minh', 'Hội An', 'Hà Nội'];

const App = () => (
  <div className={styles.container}>
    <Header />
    <Autocomplete suggestions={suggestions} />
  </div>
);

export default App;
