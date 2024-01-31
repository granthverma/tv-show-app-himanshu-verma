// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList/ShowList';
import ShowDetail from './components/ShowDetail/ShowDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
