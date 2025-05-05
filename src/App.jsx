import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Homepage = lazy(() => import("./Homepage/Homepage"));
const Contact = lazy(() => import("./Contact/Contact"));
import "./index.css";
function App() {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <h3 className="text-danger text-center mt-5">
            <i className="fa fa-spinner fa-spin"></i> <br /> Please Wait Loading...
          </h3>
        }
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
