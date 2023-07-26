import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchBar placeholder="Search friends..." />
      <FriendsList />
    </div>
  );
}

export default App;
