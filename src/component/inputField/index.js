import TextField from "@material-ui/core/TextField";
import LayoutStyle from "./style";

const InputField = ({
  value,
  id,
    type,
  multiline,
  fullWidth,
  placeholder,
  name,
  formate,
  variant,
  size,
  rows,
  defaultValue,
  rowsMax,
  inputClass,
  error = null,
  onChange,
  startAdornment
}) => {
  const { root, input } = LayoutStyle();
  return (
    <TextField
      id={id}
      formate={formate}
      className={[root,inputClass]}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      type={type}
      value={value}
      variant={variant}
      multiline={multiline}
      fullWidth={fullWidth}
      rows={rows}
      size={size}
      rowsMax={rowsMax}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      InputProps={{
        classes: { input: input },
        startAdornment:startAdornment,
      }}
      
    />
  );
};

InputField.defaultProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined",
  rows: "3",
  rowsMax: "3",
};

export default InputField;