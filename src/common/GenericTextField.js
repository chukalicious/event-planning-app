import TextField from "@mui/material/TextField";

const GenericTextField = (props) => {
  return (
    <div className="text-field">
      <label></label>
      <TextField
        name={props.name}
        value={props.value}
        label={props.label}
        helperText={props.helperText}
        type={props.type}
        variant="outlined"
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
        error={props.error}
        autoFocus="false"
        margin="normal"
      />
      {props.error && <div className="error">{props.error}</div>}
    </div>
  );
};

export default GenericTextField;
