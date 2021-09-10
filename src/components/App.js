import Weather from './Weather/Weather';
import Footer from './Footer/Footer';
import TailwindCard from './TailwindCard/TailwindCard'

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-100">
      {/* <Weather /> */}
      <TailwindCard />
      <Footer />
    </div>
  );
}

export default App;
