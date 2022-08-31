import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchFilter from "./SearchFilter";

const SearchBar = () => {
    const [search, setSearch] = useState()

    function updateSearchField(e){
        search.phrase = e.target.value;
        setSearch(search);
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-center pt-4">
                <div className="input-group my-2">
                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                        <FaSearch className="text-light"/>
                    </span>
                    <input type="email" className="form-control" placeholder="Search..." onChange={(e) => updateSearchField(e)} />
                    <SearchFilter/>
                    <button className="btn btn-outline-secondary">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;