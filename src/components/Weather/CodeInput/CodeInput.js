const CodeInput = (props) => {
  const { code, setCode } = props;

  return (
    <div className="CodeInput mb-3">
      <small className="block mb-2">(For Canadian postal codes, first 3 characters only)</small>
      <input
        type="text"
        placeholder="ZIP/Postal Code"
        pattern="^([A-Za-z]\d[A-Za-z])|(\d{5})$"
        maxLength="5"
        className="p-2 border rounded-l-lg"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-r-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default CodeInput;
