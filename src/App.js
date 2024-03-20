import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Portfolio from './Pages/portfolio/Portfolio';
import Contact from './Pages/contact/Contact';
import Themes from './components/Themes';

function App() {
  return (
   
   <BrowserRouter>
   <Navbar/>
   <Themes/>
    <Routes>
      <Route index element={<Home/>} />
      <Route exact path='about'  element={<About/>} />
      <Route exact path='portfolio'  element={<Portfolio/>} />
      <Route exact path='contact'  element={<Contact/>} />
      

    </Routes>
   </BrowserRouter>
   

  )
}

export default App;
