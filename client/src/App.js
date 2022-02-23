import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ErrorPage from "./Routes/ErrorPage";
import LoginPage from "./Routes/LoginPage";
import SignUpPage from "./Routes/SignUpPage";
import ProductDetailsPage from "./Routes/ProductDetailsPage";
import AuthContextProvider from "./context/AuthContext";
import SellProductPage from "./Components/SellProductPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Routes/Products";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route
              exact
              path="/product/:id/details/:name"
              element={<ProductDetailsPage />}
            />
            <Route
              exact
              path="/user/:user_id/add/product"
              element={<SellProductPage />}
            />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
