import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Partnership from './pages/Partnership';


import './styles/App.scss'
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Donate from './pages/Donate';
import President from './pages/President';
import AboutLagos from './pages/AboutLagos';
import Programme from './pages/Programme';
import Pastors from './pages/Pastors';
import AboutGlobal from './pages/AboutGlobal';
import ScrollUp from './components/ScrollUp';


function App() {


  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about/president' element={<President />} />
        <Route path='/about/global' element={<AboutGlobal />} />
        <Route path='/about/lagos' element={<AboutLagos />} />
        <Route path='/programs' element={<Programme />} />
        <Route path='/pastors' element={<Pastors />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sermons' element={<Sermons />} />
        <Route path='/partnership' element={<Partnership />} />
        <Route path='/events' element={<Events />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
