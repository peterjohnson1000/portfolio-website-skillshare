import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';
import Projects from './components/Projects';

function App() {
  return ( 
    <div className="bg-mainbgcolor pl-52 pr-52 overflow-hidden xl:pl-10 xl:pr-10 smm:pl-3 smm:pr-3">
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
