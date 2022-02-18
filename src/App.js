import './App.css';
import ExploreCategory from './components/Home/ExploreCategory/ExploreCategory';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ExploreCategory />
      <Footer />
    </div>
  );
}

export default App;
