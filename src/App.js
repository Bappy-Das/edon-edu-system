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
import AuthProvider from './context/AuthProvider';
import Instructors from './components/Instructor/Instructors/Instructors';
import InstructorProfile from './components/Instructor/InstructorProfile/InstructorProfile';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="fao" element={<Fao />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="enroll/:courseId" element={<Enroll />} />
            <Route path="instructors" element={<Instructors />} />
            <Route path="instructorProfile/:instructorId" element={<InstructorProfile />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
