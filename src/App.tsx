import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import Programme from './components/Programme';
import Culture from './components/Culture';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
        <Programme />
        <Culture />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
