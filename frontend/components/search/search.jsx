import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
class Search extends React.Component {

    render() {
        return (
            <div className="search_bar">
                <label className="search_label" htmlFor="search-input">
                    
                </label>
                    <input className="search-input"
                        // id="search-input"
                        type="search"
                        placeholder="Where are you going?"
                        // size="40"
                    />
                <SearchIcon/>
            </div>
        )
    }
}

export default Search;