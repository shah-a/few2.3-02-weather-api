const CodeInput = (props) => {
  const { code, setCode } = props;

  return (
    <div className="CodeInput mb-3">
      <input
        type="text"
        placeholder="ZIP/Postal Code"
        pattern="^([A-Za-z]\d[A-Za-z])|(\d{5})$"
        className="p-2 border border-blue-500 rounded-l"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r"
      >
        Submit
      </button>
    </div>
  );
};

export default CodeInput;
