import React, {  useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Country, State, City }  from 'country-state-city';


const filterCity = (inputValue) => {
    const countryCode = 'IN';
    const states = City.getCitiesOfCountry(countryCode);
    states.forEach((state) => {
      // console.log(state,"city")
  })
  const searchList = states.map(
    ( city ) => {
      return{ 
       value: city.name, 
       label: city.name 
      }
     }
    );
    console.log(searchList,"ss")
  return searchList.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterCity(inputValue));
    }, 1000);
  });

 const CitySelect=({styles,placeholder,onChange,value,name})=> {
 
    return (
      <AsyncSelect
       styles={styles} 
       name={name}
       placeholder={placeholder} 
      //  cacheOptions
      //   defaultOptions
        loadOptions={promiseOptions}
        value={value}
        onChange={onChange}
         />
  );
  
}
export default CitySelect;