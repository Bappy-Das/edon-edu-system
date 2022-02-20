import './App.css';
import ExploreCategory from './components/Home/ExploreCategory/ExploreCategory';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'
import Achievements from './components/Home/Achievements/Achievements';
import OurInstructor from './components/Home/OurInstructor/OurInstructor';
import LifeTimeAccess from './components/Home/LifeTimeAccess/LifeTimeAccess';
import Community from './components/Home/Community/Community';
import Feedback from './components/Home/Feedback/Feedback';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ExploreCategory />
      <Achievements />
      <LifeTimeAccess/>
      <Feedback/>
      <OurInstructor/>
      <Community/>
      <Footer />
    </div>
  );
}

export default App;
