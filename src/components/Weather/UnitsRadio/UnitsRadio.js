const UnitsRadio = (props) => {
  const { label, name, checked, onChange } = props;

  return (
    <label className="block mb-1">
      <input
        type="radio"
        className="mr-1"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default UnitsRadio;
