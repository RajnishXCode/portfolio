import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden ">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;
