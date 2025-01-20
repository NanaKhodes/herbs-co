import  Carousel  from './carousel/Carousel'
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from './navigation/Nav';
import Categories from './categories/Categories';
import NewProducts from './newproducts/NewProducts';
import Footer from './footer/Footer';
import {BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import Shop from './pages/Shop';
import Blog from './pages/Blog'
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
 
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Categories />
              <NewProducts />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
