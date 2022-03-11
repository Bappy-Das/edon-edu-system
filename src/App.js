import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Courses from './components/AllCourses/Courses/Courses';
import Blogs from './components/AllBlog/Blogs/Blogs';
import Enroll from './components/Enroll/Enroll';
import Fao from './components/fao/Fao';
import ContactUs from './components/ContactUs/ContactUs';
<<<<<<< HEAD
import Instructors from './components/Instructor/Instructors/Instructors';
import InstructorProfile from './components/Instructor/InstructorProfile/InstructorProfile';
=======
import AuthProvider from './context/AuthProvider';
>>>>>>> 2207db659aed49fb5234c143d51aa59b38ce01fb



function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="fao" element={<Fao />} />
          <Route path="courses" element={<Courses />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructorProfile/:instructorId" element={<InstructorProfile />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="enroll/:courseId" element={<Enroll />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
=======
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="fao" element={<Fao />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="courses" element={<Courses />} />
            <Route path="enroll/:courseId" element={<Enroll />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
>>>>>>> 2207db659aed49fb5234c143d51aa59b38ce01fb
    </div>
  );
}

export default App;
