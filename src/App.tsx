import React from "react";
import "./App.css";
import { Main, UserDetails } from "./components";
import ThemeProvider from "./context/themeContext";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
