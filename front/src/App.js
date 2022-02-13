import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Router, Route, Switch, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Header />
        <main className="py-3 ">
          <Container>
            <Route path="/" element={<HomeScreen />} />
          </Container>
        </main>
        <Footer />
      </Routes>
    </Router>
  );
};

export default App;
