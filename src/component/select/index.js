
import React from 'react';
import Select from 'react-select';
const options = [
  { value: 'intrcity Smartbus', label: 'Intrcity Smartbus' },
  { value: 'A/C Seater [Volvo, Multi..] ', label: 'A/C Seater [Volvo, Multi..] ' },
  { value: 'Bia', label: 'Bia' }
]

const CustomSelect=({placeholder,isMulti,styles,Indicatorcomponent}) => (

  <Select
  styles={styles}
    defaultValue={[options[0], options[3]]}
    isMulti={isMulti}
    name="colors"
    options={options}
    components={Indicatorcomponent}
    classNamePrefix={placeholder}
    placeholder={placeholder}
  />

);
export default CustomSelect;