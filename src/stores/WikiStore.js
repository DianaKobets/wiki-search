import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class WikiStore {
    results = [];
    query = '';

    constructor() {
        makeAutoObservable(this);
    }

    setQuery(query) {
        this.query = query;
    }

    async search() {
        if (!this.query) return;

        try {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    srsearch: this.query,
                    origin: '*',
                },
            });
            this.results = response.data.query.search;
        } catch (error) {
            console.error('Error fetching data from Wikipedia:', error);
        }
    }
}

const wikiStore = new WikiStore();
export default wikiStore;
