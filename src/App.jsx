import  Carousel  from './carousel/Carousel'
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from './navigation/Nav'
import Categories from './categories/Categories';
import NewProducts from './newproducts/NewProducts';
function App() {
 

  return (
    <>
      <Nav />
      <Carousel />
      <Categories />
      <NewProducts />
    </>
  )
}

export default App
