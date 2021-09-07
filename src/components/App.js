import Weather from './Weather/Weather';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
