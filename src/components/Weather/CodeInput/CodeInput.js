const CodeInput = (props) => {
  const { code, setCode, loading } = props;

  const spinner = (
    <svg className="inline-block animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  const submitButton = loading ? (
    <button disabled className="p-2 text-white bg-teal-600 border rounded-r-lg">
      {spinner}Loading
    </button>
  ) : (
    <button type="submit" className="p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-r-lg">
      Get Weather
    </button>
  );

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
        disabled={loading}
        onChange={(e) => setCode(e.target.value)}
      />
      {submitButton}
    </div>
  );
};

export default CodeInput;
