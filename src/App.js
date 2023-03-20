import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProducts from "./components/SingleProducts/SingleProducts";
import Header from "./components/Header/Header"
import Newsletter from "./components/Footer/Newslatter/Newslatter"
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/singleproducts/:id" element={<SingleProducts />}/>
        </Routes>
        <Newsletter /> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
