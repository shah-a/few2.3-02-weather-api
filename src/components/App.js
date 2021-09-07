import Weather from './Weather/Weather';
import Footer from './Footer/Footer';
import Tailwind from './Tailwind';

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <Weather />
      {/* <Tailwind /> */}
      <Footer />
    </div>
  );
}

export default App;
