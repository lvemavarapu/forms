import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import '../header.css';

function useSearch() {
    const [searchText, setSearchText] = useState('');

    const handleSearchInput = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search
                ..."
                       value={searchText} onChange={handleSearchInput}/>
                <RiSearchLine className="search-icon"/>


            </div>

        </div>
    );
}


export default useSearch;