import React from "react";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/approutes";

const App = () => {
  return (
  <BrowserRouter>
<AppRoutes />
  </BrowserRouter>
  );
};

export default App;