import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchCountries]);

  console.log(fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((fetchCountry, i) => (
          <option key={i} value={fetchCountry}>
            {fetchCountry}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
