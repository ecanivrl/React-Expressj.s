import React from 'react';
import { Header } from './components/Header';
import { AddEdit } from './pages/addedit/AddEdit';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
      </Routes>
      </div>
    </Router>
  );
}
