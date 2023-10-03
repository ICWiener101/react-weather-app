import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({ onSearchChange }) => {
      const [search, setSearch] = useState(null);

      const loadOptions = async (inputValue) => {
            try {
                  const response = await fetch(
                        `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
                        geoApiOptions
                  );

                  if (!response.ok) {
                        throw new Error('Network response was not ok');
                  }

                  const data = await response.json();
                  return {
                        options: data.data.map((city) => ({
                              value: `${city.latitude} ${city.longitude}`,
                              label: `${city.name}, ${city.countryCode}`,
                        })),
                  };
            } catch (error) {
                  console.error(error);
            }
      };
      const handleOnChange = (searchData) => {
            setSearch(setSearch);
            onSearchChange(searchData);
      };

      return (
            <AsyncPaginate
                  placeholder="Search for a city"
                  debounceTimeout={600}
                  value={search}
                  onChange={handleOnChange}
                  loadOptions={loadOptions}
            />
      );
};

export default Search;
