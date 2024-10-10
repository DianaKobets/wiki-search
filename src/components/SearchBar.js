import React from 'react';
import { observer } from 'mobx-react';
import wikiStore from '../stores/WikiStore';
import './styles/SearchBar.css';

const SearchBar = observer(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            wikiStore.search();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Wikipedia..."
                value={wikiStore.query}
                onChange={(e) => wikiStore.setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={() => wikiStore.search()}>Search</button>
        </div>
    );
});

export default SearchBar;
