import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Partnership from './pages/Partnership';


import './styles/App.scss'
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Donate from './pages/Donate';
import HomeContainer from './components/HomeContainer';
import President from './pages/President';


function App() {


  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<HomeContainer />}>
          <Route path='/about/president' element={<President />} />
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sermons' element={<Sermons />} />
        <Route path='/partnership' element={<Partnership />} />
        <Route path='/events' element={<Events />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
