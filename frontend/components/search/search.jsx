import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
class Search extends React.Component {

    render() {
        return (
        
        // <div className='combined'>
            <div className="search_bar">       
                <input className="search-input"
                    // id="search-input"
                    type="search"
                    placeholder="Where are you going?"
                    // size="40"
                />
            <button className="searchbutton"><SearchIcon/></button>
            {/* <button className="search-icon-button"><SearchIcon /></button> */}

            {/* </div> */}
         </div>
        )
    }
}

export default Search;