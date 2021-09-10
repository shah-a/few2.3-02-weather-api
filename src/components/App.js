import Weather from './Weather/Weather';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-100">
      <div className="my-auto sm:mx-auto">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-x-0 inset-y-10 sm:inset-10 bg-gradient shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 my-10 sm:m-10">
            <Weather />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
