import './App.css';
import Navbar from './components/00-UI/Navbar';
import Header from './components/01-Header/Header';
import About from './components/02-About/About';
import Blogs from './components/04-Blogs/Blogs';
import Footer from './components/05-Footer/Footer';
import Works from './components/03-Works/Works';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Works /> */}
      {/* <Blogs /> */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;
