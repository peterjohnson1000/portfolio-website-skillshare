import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';
import Projects from './components/Projects';

function App() {
  return ( 
    <div className="bg-mainbgcolor pl-52 pr-52 overflow-hidden smm:pl-0 smm:pr-0 xl:pl-40 xl:pr-40 lg:pl-28 lg:pr-28 md:p-0">
      <Header/>
      <Hero/>
      <Projects/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
