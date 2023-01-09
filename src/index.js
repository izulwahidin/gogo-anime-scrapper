import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './components/single/Header';
import Footer from './components/single/Footer';

import Home from './page/Home';
import NoPage from './page/NoPage';
import Video from './page/Video';

export default function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home slug='/'/>} />
            <Route path="/raw" element={<Home slug='/recently-added-raw'/>} />
            <Route path="/dub" element={<Home slug='/recently-added-dub'/>} />
            <Route path="/movie" element={<Home slug='/movies'/>} />
            <Route path="/season" element={<Home slug='/new-season'/>} />
            <Route path="/popular" element={<Home slug='/popular'/>} />
            <Route path="/ongoing" element={<Home slug='/ongoing-series'/>} />
            <Route path="/watch/:slug" element={<Video/>} />
            <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);