import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="search_bar">
                <label className="search_label" htmlFor="search-input">
                </label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Where are you going?"
                    />
            </div>
        )
    }
}

export default Search;