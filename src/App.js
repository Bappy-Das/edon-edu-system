import './App.css';
import ExploreCategory from './components/Home/ExploreCategory/ExploreCategory';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'
import Achievements from './components/Home/Achievements/Achievements';
import OurInstructor from './components/Home/OurInstructor/OurInstructor';
import LifeTimeAccess from './components/Home/LifeTimeAccess/LifeTimeAccess';
import Community from './components/Home/Community/Community';
import Banner from './components/Home/Banner/Banner';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <ExploreCategory />
      <Achievements />
      <LifeTimeAccess />
      <OurInstructor />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
