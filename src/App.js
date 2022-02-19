import './App.css';
import ExploreCategory from './components/Home/ExploreCategory/ExploreCategory';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'
import Achievements from './components/Home/Achievements/Achievements';
import OurInstructor from './components/Home/OurInstructor/OurInstructor';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ExploreCategory />
      <Achievements />
      <OurInstructor/>
      <Footer />
    </div>
  );
}

export default App;
