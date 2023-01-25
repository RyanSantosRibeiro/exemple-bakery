
import Banner from './../components/Banner';
import Header from './../components/Header';
import About from './../components/About';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import Services from './../components/Services';
import Instagram from './../components/Instagram';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Services />
      <Instagram />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default Home;