import PropTypes from "prop-types";

function Input({ label, type, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        onChange={({ target: { value } }) => onChange(value)}
        value={value || ""}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
