import React from 'react';
import { observer } from 'mobx-react';
import wikiStore from '../stores/WikiStore';
import './styles/SearchResults.css';

const SearchResults = observer(() => {
    if (wikiStore.results.length === 0) return null;

    return (
        <ul className="results-list">
            {wikiStore.results.map((result) => (
                <li key={result.pageid}>
                    <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer">
                        {result.title}
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </li>
            ))}
        </ul>
    );
});

export default SearchResults;
