import  Carousel  from './carousel/Carousel'
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from './navigation/Nav'
import Categories from './categories/Categories';
import NewProducts from './newproducts/NewProducts';
import Footer from './footer/Footer';
import { BrowserRouter, Router,Routes,Route } from 'react-router-dom';
function App() {
 
  return (
    <BrowserRouter>
      <Nav />
      <Carousel />
      <Categories />
      <NewProducts />
      <Footer />
    </BrowserRouter>
  );
}

export default App
