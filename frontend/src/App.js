import React from 'react'
import { Home } from "./pages/home/Home";
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Header from './components/Header.jsx'
import AddEdit from './pages/addedit/AddEdit';

export default function App() {
  return (
    <Router>
      <Header/>
     <div className='container'>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddEdit/>} />
      </Routes>
     </div>
    </Router>
  )
}
