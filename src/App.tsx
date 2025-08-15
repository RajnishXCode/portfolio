import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Projectspage from './pages/Projectspage';
import Contactpage from './pages/Contactpage';
import NotFound from './pages/NotFound';
import PrivateCode from './pages/PrivateCode';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/projects' element={<Projectspage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/private' element={<PrivateCode />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
