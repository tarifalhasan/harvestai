import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import "./index.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";

import Faq2 from "./pages/Faq2";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/faq-1" element={<Faq />} />
          <Route path="/faq-2" element={<Faq2 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
