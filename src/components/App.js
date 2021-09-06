function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <h1 className="text-4xl text-center mt-10 text-blue-500">Salaam, world :)</h1>
      <footer className="mt-auto p-14 text-white bg-blue-500">
        <p>&copy; Ali Shah, {new Date().getUTCFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
