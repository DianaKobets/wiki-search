import React from 'react';
import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import './App.css';

function App() {
    return (
        <div>
            <h1>Wikipedia Searcher</h1>
            <SearchBar />
            <SearchResults />
        </div>
    );
}

export default App;
