import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import LogIN from "./pages/LogIN";
import Register from "./pages/Register";
import LogOUT from "./pages/LogOUT";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
    <Route exact path ="/" element={<Home />}/>
    <Route exact path="/oddaj-rzeczy" element={<Home />} />
    <Route exact path="/logowanie" element={<LogIN />} />
    <Route exact path="/rejestracja" element={<Register />} />
    <Route exact path="/wylogowano" element={<LogOUT />} />
    <Route  path="*" component={NotFound} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
