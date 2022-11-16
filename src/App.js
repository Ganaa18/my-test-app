import React from "react";
import "antd/dist/antd.css";
import MyMenu from "./Componets/Menu";
import Users from "./Componets/Users";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Componets/Register";
function App() {
  return (
    <div className="App">
      <MyMenu />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
